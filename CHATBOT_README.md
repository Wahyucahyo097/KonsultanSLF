# Chatbot Canggih dengan Gemini AI

Chatbot yang telah ditambahkan ke aplikasi ini memiliki fitur-fitur berikut:

## 🤖 Fitur Utama

### 1. **AI yang Canggih**
- Menggunakan Gemini 1.5 Pro dari Google
- Respons yang kontekstual dan informatif
- Khusus disesuaikan untuk konsultasi bisnis

### 2. **Antarmuka yang Menarik**
- Floating button yang responsif
- Animasi smooth dengan Framer Motion
- Design modern dengan shadcn/ui components
- Chat bubbles yang elegant

### 3. **Fitur Chat Lengkap**
- Typing indicator saat AI memproses
- Timestamp pada setiap pesan
- Reset chat history
- Auto-scroll ke pesan terbaru
- Input dengan Enter key support

### 4. **Responsif & Aksesibilitas**
- Adaptif untuk berbagai ukuran layar
- Keyboard navigation support
- Loading states yang jelas
- Error handling yang proper

## 📱 Cara Menggunakan

1. **Buka Chat**: Klik tombol chat di pojok kanan bawah
2. **Kirim Pesan**: Ketik pertanyaan Anda dan tekan Enter atau klik tombol Send
3. **Reset Chat**: Klik tombol rotate untuk mulai percakapan baru
4. **Tutup Chat**: Klik tombol X atau klik tombol chat lagi

## 🔧 Konfigurasi

### Environment Variables
```bash
GEMINI_API_KEY=AIzaSyAfgwOqnJlAAvAGVXJ_FsN76r1OJwdcM3A
```

### API Endpoints
- `POST /api/chat` - Mengirim pesan ke chatbot
- `DELETE /api/chat` - Reset riwayat chat

## 🎨 Kustomisasi

Chatbot dapat dikustomisasi melalui:

1. **Prompt System** - Edit di `src/lib/gemini.ts`
2. **Styling** - Modifikasi di `src/components/ui/chatbot.tsx`
3. **Animasi** - Ubah di `src/app/globals.css`

## 🚀 Fitur Mendatang

- [ ] Voice input/output
- [ ] File upload support
- [ ] Chat history persistence
- [ ] Multi-language support
- [ ] Custom AI personas
- [ ] Integration dengan database

## 📝 Struktur File

```
src/
├── app/
│   └── api/
│       └── chat/
│           └── route.ts          # API endpoint untuk chat
├── components/
│   └── ui/
│       ├── chatbot.tsx           # Komponen utama chatbot
│       └── chat-message.tsx      # Komponen pesan chat
└── lib/
    └── gemini.ts                 # Service untuk Gemini AI
```

## 🔒 Keamanan

- API key disimpan di environment variables
- Input validation pada server-side
- Error handling yang aman
- Rate limiting (dapat ditambahkan)

Chatbot siap digunakan dan dapat memberikan bantuan konsultasi yang profesional kepada pengguna!