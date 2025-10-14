"use client";

import React from 'react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ChatErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Chatbot Error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4">
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>
              Terjadi kesalahan pada chatbot. Silakan refresh untuk mencoba lagi.
            </AlertDescription>
          </Alert>
          <Button onClick={this.handleReset} size="sm" className="w-full">
            <RefreshCw size={16} className="mr-2" />
            Refresh Chatbot
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}