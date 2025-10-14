import { NextRequest, NextResponse } from 'next/server';
import { getChatService } from '@/lib/citra-assistant';

export async function POST(request: NextRequest) {
  try {
    const { message, stream = false } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Pesan tidak valid' },
        { status: 400 }
      );
    }

    const chatService = getChatService();

    if (stream) {
      // Streaming response
      const responseStream = await chatService.sendMessageStream(message);
      
      return new Response(responseStream, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    } else {
      // Regular response
      const response = await chatService.sendMessage(message);
      
      return NextResponse.json({
        message: response,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Terjadi kesalahan internal server' 
      },
      { status: 500 }
    );
  }
}

// Reset chat history
export async function DELETE() {
  try {
    const chatService = getChatService();
    chatService.resetChat();
    
    return NextResponse.json({
      message: 'Riwayat chat telah direset',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Chat Reset Error:', error);
    return NextResponse.json(
      { error: 'Gagal mereset riwayat chat' },
      { status: 500 }
    );
  }
}