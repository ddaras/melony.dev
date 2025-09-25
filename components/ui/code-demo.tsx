"use client";

import React from "react";
import { CodeBlock, InlineCode } from "./code-block";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

export function CodeDemo() {
  const reactExample = `import React, { useState } from 'react';
import { useAgent } from 'melony';

function ChatInterface() {
  const [message, setMessage] = useState('');
  
  const { messages, sendMessage, isLoading } = useAgent({
    model: 'gpt-4',
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    systemPrompt: 'You are a helpful AI assistant.',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    try {
      await sendMessage(message);
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-4">
            <strong>{msg.role}:</strong> {msg.content}
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
          className="w-full p-2 border rounded"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}`;

  const bashExample = `# Install melony
npm install melony

# Or with pnpm
pnpm add melony

# Start development server
npm run dev`;

  const jsonExample = `{
  "name": "my-chat-app",
  "version": "1.0.0",
  "dependencies": {
    "melony": "^1.4.7",
    "react": "^19.0.0",
    "next": "15.3.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}`;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>React/TypeScript Example</CardTitle>
          <CardDescription>
            A complete chat interface using the useAgent hook
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="tsx">
            {reactExample}
          </CodeBlock>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shell Commands</CardTitle>
          <CardDescription>
            Installation and setup commands
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="bash">
            {bashExample}
          </CodeBlock>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
          <CardDescription>
            Package.json configuration example
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock language="json">
            {jsonExample}
          </CodeBlock>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inline Code</CardTitle>
          <CardDescription>
            Examples of inline code formatting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Use the <InlineCode>useAgent</InlineCode> hook to manage chat state, 
            or import <InlineCode>Conversation</InlineCode> for UI components.
            You can also access <InlineCode>process.env.NEXT_PUBLIC_OPENAI_API_KEY</InlineCode> 
            for your API configuration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
