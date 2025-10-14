"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChatMessage, Message } from "@/components/ui/chat-message";
import { QuickQuestions } from "@/components/ui/quick-questions";
import { ChatErrorBoundary } from "@/components/ui/chat-error-boundary";
import { Loader2, Send, X, RotateCcw, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Halo! Saya Citra, asisten bisnis cerdas Anda! ✨\n\nSaya siap membantu Anda dengan konsultasi bisnis yang personal dan actionable. Dari strategi, marketing, keuangan, hingga growth hacking - mari kita wujudkan bisnis impian Anda bersama!\n\nAda yang bisa saya bantu hari ini? 😊',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new message is added
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          stream: false
        }),
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim pesan');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Maaf, terjadi kesalahan. Silakan coba lagi dalam beberapa saat.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = async () => {
    try {
      await fetch('/api/chat', {
        method: 'DELETE',
      });
      
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: 'Halo! Saya Citra, asisten bisnis cerdas Anda! ✨\n\nSaya siap membantu Anda dengan konsultasi bisnis yang personal dan actionable. Dari strategi, marketing, keuangan, hingga growth hacking - mari kita wujudkan bisnis impian Anda bersama!\n\nAda yang bisa saya bantu hari ini? 😊',
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error resetting chat:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const isFirstChat = messages.length === 1;

  return (
    <ChatErrorBoundary>
      <div className="fixed bottom-2 left-2 sm:bottom-4 sm:left-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="mb-4"
          >
            <Card className="w-80 sm:w-96 h-[480px] sm:h-[520px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-6rem)] shadow-2xl border-0 bg-white chat-backdrop overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg px-3 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base sm:text-lg font-semibold">
                    ✨ Citra Assistant
                  </CardTitle>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={resetChat}
                      className="text-white hover:bg-blue-600 p-1.5 sm:p-2"
                    >
                      <RotateCcw size={14} className="sm:w-4 sm:h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleChat}
                      className="text-white hover:bg-blue-600 p-1.5 sm:p-2"
                    >
                      <X size={14} className="sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-xs sm:text-sm opacity-90">
                  Asisten Bisnis Cerdas & Personal
                </div>
              </CardHeader>
              
              <CardContent className="p-0 flex flex-col h-[400px] sm:h-[440px] overflow-hidden">
                <ScrollArea 
                  ref={scrollAreaRef}
                  className="flex-1 px-4 py-4 chat-scroll overflow-hidden"
                >
                  <div className="space-y-2 max-w-full chat-container">
                    {messages.map((message) => (
                      <ChatMessage
                        key={message.id}
                        message={message}
                      />
                    ))}
                    {isLoading && (
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <Loader2 size={16} className="text-white animate-spin" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Loader2 size={16} className="animate-spin" />
                            <span className="text-sm">Sedang mengetik...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
                
                <QuickQuestions 
                  onQuestionSelect={handleQuickQuestion}
                  isVisible={isFirstChat && !isLoading}
                />
                
                <div className="border-t px-3 sm:px-4 py-2 sm:py-3 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <Input
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ketik pesan Anda..."
                      disabled={isLoading}
                      className="flex-1 border-gray-300 focus:border-blue-500 text-sm sm:text-base"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 px-2 sm:px-3 min-w-[40px]"
                    >
                      <Send size={14} className="sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={toggleChat}
          className={cn(
            "w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 chat-float-btn",
            isOpen && "bg-gray-500 hover:bg-gray-600"
          )}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </div>
    </ChatErrorBoundary>
  );
}