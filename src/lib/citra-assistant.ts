// Citra Assistant - Advanced AI Chatbot Service
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export class CitraAssistantService {
  private conversationContext: string[] = [];
  private userPreferences: { [key: string]: any } = {};

  private cleanMarkdown(text: string): string {
    return text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove ** bold formatting
      .replace(/\*(.*?)\*/g, '$1')     // Remove * italic formatting
      .replace(/\n\n+/g, '\n\n')      // Clean up multiple line breaks
      .trim();
  }

  async sendMessage(message: string): Promise<string> {
    // Simulasi proses berpikir yang realistis
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1500));

    // Analisis konteks dan sentimen
    const analysis = this.analyzeMessage(message);
    
    // Simpan konteks percakapan
    this.conversationContext.push(message);
    if (this.conversationContext.length > 5) {
      this.conversationContext.shift(); // Keep last 5 messages
    }

    // Generate respons yang kontekstual dan personal
    const response = this.generateIntelligentResponse(message, analysis);
    
    return this.cleanMarkdown(response);
  }

  private analyzeMessage(message: string): any {
    const lowerMessage = message.toLowerCase();
    
    return {
      sentiment: this.detectSentiment(lowerMessage),
      intent: this.detectIntent(lowerMessage),
      entities: this.extractEntities(lowerMessage),
      complexity: this.assessComplexity(message),
      urgency: this.detectUrgency(lowerMessage)
    };
  }

  private detectSentiment(message: string): 'positive' | 'neutral' | 'negative' | 'confused' {
    const positiveWords = ['senang', 'bagus', 'terima kasih', 'mantap', 'keren', 'hebat', 'suka'];
    const negativeWords = ['susah', 'sulit', 'bingung', 'masalah', 'error', 'gagal', 'buruk'];
    const confusedWords = ['gimana', 'bagaimana', 'tidak tahu', 'bingung', 'help'];
    
    if (confusedWords.some(word => message.includes(word))) return 'confused';
    if (positiveWords.some(word => message.includes(word))) return 'positive';
    if (negativeWords.some(word => message.includes(word))) return 'negative';
    return 'neutral';
  }

  private detectIntent(message: string): string {
    const intents = {
      greeting: ['halo', 'hai', 'hello', 'selamat', 'apa kabar'],
      question: ['apa', 'bagaimana', 'mengapa', 'kapan', 'dimana', 'siapa'],
      request_help: ['bantu', 'tolong', 'help', 'minta', 'butuh'],
      business_advice: ['bisnis', 'usaha', 'modal', 'profit', 'strategi'],
      thanks: ['terima kasih', 'thanks', 'makasih', 'terimakasih'],
      goodbye: ['selamat tinggal', 'bye', 'sampai jumpa', 'dadah']
    };

    for (const [intent, keywords] of Object.entries(intents)) {
      if (keywords.some(keyword => message.includes(keyword))) {
        return intent;
      }
    }
    return 'general';
  }

  private extractEntities(message: string): string[] {
    const entities: string[] = [];
    const businessTypes = ['kuliner', 'makanan', 'restoran', 'cafe', 'fashion', 'clothing', 'online', 'digital', 'teknologi', 'jasa', 'produk'];
    const topics = ['marketing', 'keuangan', 'modal', 'investasi', 'branding', 'website', 'sosial media'];
    
    businessTypes.forEach(type => {
      if (message.includes(type)) entities.push(type);
    });
    
    topics.forEach(topic => {
      if (message.includes(topic)) entities.push(topic);
    });
    
    return entities;
  }

  private assessComplexity(message: string): 'simple' | 'medium' | 'complex' {
    if (message.length < 30) return 'simple';
    if (message.length < 100) return 'medium';
    return 'complex';
  }

  private detectUrgency(message: string): 'low' | 'medium' | 'high' {
    const urgentWords = ['segera', 'urgent', 'cepat', 'secepatnya', 'penting', 'darurat'];
    if (urgentWords.some(word => message.includes(word))) return 'high';
    
    const questionWords = ['bagaimana', 'gimana', 'apa', 'kapan'];
    if (questionWords.some(word => message.includes(word))) return 'medium';
    
    return 'low';
  }

  private generateIntelligentResponse(message: string, analysis: any): string {
    const { sentiment, intent, entities, complexity, urgency } = analysis;
    
    // Respons berdasarkan intent dan konteks
    switch (intent) {
      case 'greeting':
        return this.generateGreeting(sentiment);
      
      case 'thanks':
        return this.generateThanksResponse();
      
      case 'goodbye':
        return this.generateGoodbye();
      
      case 'business_advice':
        return this.generateBusinessAdvice(entities, complexity);
      
      case 'question':
        return this.generateQuestionResponse(message, entities, urgency);
      
      case 'request_help':
        return this.generateHelpResponse(sentiment, entities);
      
      default:
        return this.generateGeneralResponse(message, sentiment, entities);
    }
  }

  private generateGreeting(sentiment: string): string {
    const greetings = [
      "Halo! Saya Citra, asisten AI Anda. Senang bisa membantu Anda hari ini! 😊\n\nSebagai konsultan bisnis virtual, saya siap memberikan saran dan panduan untuk mengembangkan bisnis Anda. Ada yang ingin Anda diskusikan?",
      
      "Hai! Perkenalkan, saya Citra - asisten konsultasi bisnis Anda! ✨\n\nSaya di sini untuk membantu Anda dengan berbagai aspek bisnis, mulai dari strategi, marketing, keuangan, hingga operasional. Bagaimana saya bisa membantu Anda hari ini?",
      
      "Selamat datang! Saya Citra, asisten AI yang akan menemani perjalanan bisnis Anda! 🚀\n\nDengan pengalaman dalam konsultasi bisnis, saya siap membantu Anda menemukan solusi terbaik. Ceritakan tentang tantangan atau rencana bisnis yang sedang Anda hadapi!"
    ];
    
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  private generateThanksResponse(): string {
    const responses = [
      "Sama-sama! Senang bisa membantu Anda. 😊\n\nJika ada pertanyaan lain tentang bisnis atau strategi, jangan ragu untuk bertanya. Saya Citra, selalu siap membantu!",
      
      "Dengan senang hati! Itulah tugas saya sebagai Citra, asisten konsultasi Anda. ✨\n\nSemoga saran yang saya berikan bisa bermanfaat untuk perkembangan bisnis Anda. Ada hal lain yang ingin didiskusikan?",
      
      "Terima kasih kembali! Saya senang bisa berbagi insights dengan Anda. 🙏\n\nIngat, kesuksesan bisnis adalah perjalanan, bukan destinasi. Saya **Citra** akan selalu di sini untuk mendukung langkah Anda!"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private generateGoodbye(): string {
    const farewells = [
      "Sampai jumpa! Semoga bisnis Anda semakin berkembang! 🌟\n\nJika butuh konsultasi lagi, **Citra** akan selalu siap membantu. Tetap semangat dalam berkarya!",
      
      "Selamat tinggal! Wishing you all the best untuk bisnis Anda! 🚀\n\nIngat, setiap langkah kecil adalah progress. Saya **Citra** akan menunggu untuk membantu Anda lagi!",
      
      "Take care! Semoga strategi yang kita diskusikan bisa membawa hasil positif! ✨\n\nSampai bertemu lagi, dan ingat - **Citra** selalu siap menjadi partner konsultasi Anda!"
    ];
    
    return farewells[Math.floor(Math.random() * farewells.length)];
  }

  private generateBusinessAdvice(entities: string[], complexity: string): string {
    const hasKuliner = entities.some(e => ['kuliner', 'makanan', 'restoran', 'cafe'].includes(e));
    const hasFashion = entities.some(e => ['fashion', 'clothing'].includes(e));
    const hasOnline = entities.some(e => ['online', 'digital'].includes(e));
    
    if (hasKuliner) {
      return "Wah, bisnis kuliner! Saya **Citra** sangat excited membahas ini! 🍽️\n\n**Strategi Sukses Kuliner:**\n\n🎯 **Unique Selling Point** - Ciptakan cita rasa atau konsep yang memorable\n🏪 **Lokasi Strategic** - Riset traffic dan target market di area tersebut\n📱 **Digital Presence** - Manfaatkan Instagram, TikTok, dan platform delivery\n💰 **Food Cost Management** - Jaga food cost di bawah 30% untuk profit optimal\n⭐ **Customer Experience** - Service yang ramah dan konsisten\n\nDari pengalaman saya menganalisis banyak bisnis kuliner, yang paling penting adalah konsistensi rasa dan inovasi berkelanjutan. Mau fokus ke aspek yang mana dulu nih?";
    }
    
    if (hasFashion) {
      return "Fashion business! That's exciting! Saya **Citra** punya banyak insights untuk ini! 👗✨\n\n**Fashion Business Roadmap:**\n\n🎨 **Brand Identity** - Tentukan style signature dan target demografi\n📸 **Visual Marketing** - Invest dalam fotografi produk berkualitas\n📦 **Inventory Strategy** - Mulai dengan bestseller items, jangan over-stock\n🤝 **Influencer Collaboration** - Partner dengan micro-influencer yang align\n🔄 **Trend Adaptation** - Follow trend tapi tetap punya karakter unik\n\nSaran **Citra**: Fashion bukan hanya soal produk, tapi tentang lifestyle yang Anda jual. Customers beli feeling, bukan cuma baju. Mau explore strategi marketing yang lebih spesifik?";
    }
    
    if (hasOnline) {
      return "Digital business! Perfect timing! Saya **Citra** akan share strategi yang proven effective! 💻🚀\n\n**Digital Business Excellence:**\n\n🌐 **Platform Selection** - Pilih 2-3 platform utama, master semuanya\n🎯 **SEO & Content** - Invest dalam content marketing jangka panjang\n📊 **Data Analytics** - Track everything: traffic, conversion, customer behavior\n💳 **Payment Gateway** - Multiple options untuk convenience customer\n📱 **Mobile Optimization** - 70%+ traffic dari mobile, pastikan seamless\n🔄 **Automation** - Otomatisasi repetitive tasks untuk efisiensi\n\nTips dari **Citra**: Online business sukses karena sistem, bukan hustle 24/7. Build once, profit repeatedly. Mau diskusi tentang automation tools yang tepat?";
    }
    
    // General business advice
    return "Terima kasih sudah percaya pada **Citra** untuk konsultasi bisnis Anda! 🌟\n\n**Framework Bisnis Sukses:**\n\n🎯 **Market Research** - Understand your customer deeply\n💡 **Value Proposition** - Apa yang membuat Anda berbeda?\n📈 **Financial Planning** - Cash flow is king, profit is queen\n🤝 **Team Building** - Surround yourself dengan orang yang tepat\n📱 **Digital Transformation** - Embrace technology untuk scale up\n🔄 **Continuous Learning** - Adaptasi adalah kunci survival\n\nSebagai **Citra**, saya percaya setiap bisnis punya potensi unik. Yang penting adalah eksekusi yang konsisten dan terus belajar dari market feedback. Ada aspek spesifik yang mau kita deep dive?";
  }

  private generateQuestionResponse(message: string, entities: string[], urgency: string): string {
    const urgencyPrefix = urgency === 'high' ? 'Saya **Citra** langsung bantu untuk hal urgent ini! ⚡\n\n' : 'Saya **Citra** senang bisa menjawab pertanyaan Anda! 💡\n\n';
    
    // Detect specific question types
    if (message.includes('bagaimana') || message.includes('gimana')) {
      if (entities.includes('marketing')) {
        return `${urgencyPrefix}**Marketing Strategy yang Effective:**\n\n🎯 **Know Your Audience** - Buat buyer persona yang detail\n📱 **Multi-Channel Approach** - Kombinasi organic dan paid advertising\n📊 **Content Marketing** - Provide value dulu, sell belakangan\n🤝 **Community Building** - Engage authentically dengan audience\n📈 **Measure & Optimize** - Track ROI setiap campaign\n\nDari observasi **Citra**: Marketing yang sukses adalah yang sustainable dan authentic. Customers bisa feel kalo Anda genuine atau cuma sales pitch. Mau bahas strategi yang mana lebih detail?`;
      }
      
      if (entities.includes('keuangan') || entities.includes('modal')) {
        return `${urgencyPrefix}**Financial Management Excellence:**\n\n💰 **Separate Accounts** - Pisahkan keuangan pribadi dan bisnis\n📊 **Cash Flow Monitoring** - Weekly review, monthly analysis\n🎯 **Emergency Fund** - Minimal 6 bulan operational cost\n📈 **Investment Strategy** - Reinvest profit untuk growth\n🧾 **Bookkeeping Discipline** - Record every transaction\n\nTips **Citra**: Uang adalah fuel bisnis, bukan tujuan akhir. Good financial management memberikan Anda freedom untuk take calculated risks. Ada aspek keuangan spesifik yang challenging?`;
      }
    }
    
    if (message.includes('apa') && message.includes('harus')) {
      return `${urgencyPrefix}**Action Plan yang Saya Citra Recommend:**\n\n✅ **Start with WHY** - Clarify tujuan dan motivasi Anda\n📋 **Market Validation** - Test idea sebelum full investment\n👥 **Network Building** - Connect dengan mentor dan peers\n📚 **Skill Development** - Invest in yourself first\n🎯 **MVP Development** - Start small, iterate fast\n\nPhilosophy **Citra**: Perfect planning can become procrastination. Sometimes you need to start messy and improve along the way. Ready to take the first step?`;
    }
    
    return `${urgencyPrefix}Pertanyaan yang menarik! Sebagai **Citra**, saya ingin memberikan jawaban yang paling berguna untuk situasi Anda.\n\nBisa ceritakan lebih detail tentang:\n• **Konteks** - Situasi bisnis Anda saat ini\n• **Challenge** - Obstacle spesifik yang dihadapi\n• **Goal** - Target yang ingin dicapai\n\nDengan informasi ini, saya bisa berikan insights yang lebih targeted dan actionable! 🎯`;
  }

  private generateHelpResponse(sentiment: string, entities: string[]): string {
    const empathyPrefix = sentiment === 'negative' ? 'I understand ini challenging, tapi **Citra** yakin kita bisa find solution! 💪\n\n' : '**Citra** senang bisa membantu Anda! Let\'s solve this together! 🤝\n\n';
    
    return `${empathyPrefix}**Citra's Help Framework:**\n\n🎯 **Problem Definition** - Mari identify root cause nya\n💡 **Solution Brainstorming** - Explore multiple options\n📊 **Impact Analysis** - Evaluate pros and cons\n🚀 **Action Planning** - Create step-by-step roadmap\n📈 **Progress Monitoring** - Regular check-in dan adjustment\n\nSebagai asisten konsultasi, **Citra** percaya setiap problem ada solution nya. Yang penting adalah approach yang systematic dan mindset yang growth-oriented.\n\nCeritakan secara detail challenge yang Anda hadapi, nanti kita breakdown together! 🌟`;
  }

  private generateGeneralResponse(message: string, sentiment: string, entities: string[]): string {
    const personalizedGreeting = sentiment === 'positive' ? 'Saya **Citra** senang dengan energy positif Anda! ✨' : sentiment === 'negative' ? 'Saya **Citra** understand concerns Anda, mari kita address together! 🤗' : 'Saya **Citra** appreciate Anda sharing ini dengan saya! 😊';
    
    if (entities.length > 0) {
      const topicList = entities.join(', ');
      return `${personalizedGreeting}\n\nMenarik sekali Anda mention tentang ${topicList}! Sebagai **Citra**, saya punya banyak insights di area tersebut.\n\n**Mari kita explore together:**\n• Apa specific goals Anda di bidang ini?\n• Challenge apa yang currently Anda face?\n• Resources apa yang sudah Anda punya?\n\nWith this information, saya bisa provide more targeted advice yang actionable untuk situation Anda! 🎯\n\nRemember, every expert was once a beginner. Yang penting adalah consistency dalam learning dan executing! 🚀`;
    }
    
    return `${personalizedGreeting}\n\n**Sebagai Citra, saya siap membantu Anda dengan:**\n\n🏢 **Business Strategy & Planning**\n📈 **Marketing & Branding**\n💰 **Financial Management**\n🚀 **Growth & Scaling**\n💡 **Innovation & Problem Solving**\n👥 **Team & Leadership**\n\nSaya percaya setiap conversation adalah opportunity untuk growth. Share apa yang ada di mind Anda, dan let's create something amazing together! ✨\n\nApa yang paling urgent untuk bisnis Anda right now? 🤔`;
  }

  async sendMessageStream(message: string): Promise<ReadableStream<string>> {
    const response = await this.sendMessage(message);
    
    return new ReadableStream({
      start(controller) {
        // Simulasi streaming dengan typing effect yang natural
        const words = response.split(' ');
        let wordIndex = 0;
        
        const sendWord = () => {
          if (wordIndex < words.length) {
            const word = words[wordIndex];
            controller.enqueue(word + ' ');
            wordIndex++;
            
            // Variable speed untuk natural feeling
            const delay = word.length > 8 ? 80 : 
                         word.includes('\n') ? 200 : 
                         word.includes('**') ? 100 : 60;
            
            setTimeout(sendWord, delay);
          } else {
            controller.close();
          }
        };
        
        setTimeout(sendWord, 100); // Initial delay
      }
    });
  }

  resetChat() {
    this.conversationContext = [];
    this.userPreferences = {};
    return;
  }
}

// Citra Assistant Service - Advanced AI Chatbot
let chatService: CitraAssistantService | null = null;

export function getChatService(): CitraAssistantService {
  if (!chatService) {
    chatService = new CitraAssistantService();
  }
  return chatService;
}