"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  isTyping?: boolean;
}

export function ChatMessage({ message, isTyping = false }: ChatMessageProps) {
  const isUser = message.role === 'user';

  // Clean markdown formatting and improve paragraph structure
  const cleanContent = (content: string) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove ** bold formatting
      .replace(/\*(.*?)\*/g, '$1')     // Remove * italic formatting
      .replace(/\n\n+/g, '\n\n')      // Clean up multiple line breaks
      .trim();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex w-full mb-4 gap-3",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarImage src="/bot-avatar.png" />
          <AvatarFallback className="bg-blue-500 text-white">
            <Bot size={16} />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div
        className={cn(
          "max-w-[250px] sm:max-w-[280px] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 break-words overflow-hidden chat-message",
          isUser
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-gray-100 text-gray-900 rounded-bl-md",
          isTyping && "animate-pulse"
        )}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap word-wrap break-words overflow-wrap-anywhere">
          {cleanContent(message.content)}
          {isTyping && (
            <span className="inline-block w-1 h-4 bg-current ml-1 animate-pulse" />
          )}
        </div>
        <div className={cn(
          "text-xs mt-2 opacity-70",
          isUser ? "text-blue-100" : "text-gray-500"
        )}>
          {message.timestamp.toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>

      {isUser && (
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarFallback className="bg-gray-500 text-white">
            <User size={16} />
          </AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  );
}