import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export class GeminiChatService {
  private model;

  constructor() {
    this.model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      // Tambahkan context untuk konsultasi
      const contextualMessage = `Anda adalah asisten AI yang sangat canggih untuk konsultasi bisnis dan profesional. Gunakan bahasa Indonesia yang baik dan berikan jawaban yang informatif, praktis, dan profesional.

Pertanyaan pengguna: ${message}

Berikan jawaban yang berguna dan relevan:`;

      const result = await this.model.generateContent(contextualMessage);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      throw new Error('Maaf, terjadi kesalahan dalam memproses pesan Anda. Silakan coba lagi.');
    }
  }

  async sendMessageStream(message: string): Promise<ReadableStream<string>> {
    try {
      const contextualMessage = `Anda adalah asisten AI yang sangat canggih untuk konsultasi bisnis dan profesional. Gunakan bahasa Indonesia yang baik dan berikan jawaban yang informatif, praktis, dan profesional.

Pertanyaan pengguna: ${message}

Berikan jawaban yang berguna dan relevan:`;

      const result = await this.model.generateContentStream(contextualMessage);
      
      return new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of result.stream) {
              const chunkText = chunk.text();
              if (chunkText) {
                controller.enqueue(chunkText);
              }
            }
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        }
      });
    } catch (error) {
      console.error('Error streaming message from Gemini:', error);
      throw new Error('Maaf, terjadi kesalahan dalam memproses pesan Anda. Silakan coba lagi.');
    }
  }

  resetChat() {
    // Untuk implementasi sederhana, tidak perlu reset khusus
    return;
  }
}

// Singleton instance
let geminiService: GeminiChatService | null = null;

export function getGeminiService(): GeminiChatService {
  if (!geminiService) {
    geminiService = new GeminiChatService();
  }
  return geminiService;
}