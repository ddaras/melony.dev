import { CodeBlock } from "@/components/ui/code-block";

export default function ExamplesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Examples</h1>
        <p className="text-xl text-muted-foreground">
          Real-world examples showing how to use melony in different scenarios.
        </p>
      </div>

      <section id="basic-chat">
        <h2 className="text-3xl font-bold mb-4">Basic Chat Interface</h2>
        <p className="text-muted-foreground mb-6">
          A simple chat interface with streaming support using melony hooks.
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import {
  MelonyProvider,
  useMelonyMessages,
  useMelonySend,
  useMelonyStatus,
} from "melony";

function ChatMessages() {
  const messages = useMelonyMessages();
  const send = useMelonySend();
  const status = useMelonyStatus();

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={\`message \${message.role}\`}>
            <div className="message-header">
              <strong>{message.role}</strong>
            </div>
            <div className="message-content">
              {message.parts.map((part, i) => (
                <div key={i}>
                  {part.type === "text" && <p>{part.text}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="input-area">
        <button 
          onClick={() => send("Hello!")} 
          disabled={status === "streaming"}
        >
          {status === "streaming" ? "Sending..." : "Send"}
        </button>
        {status === "error" && <p>Error occurred. Please try again.</p>}
      </div>
    </div>
  );
}

export default function BasicChat() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <ChatMessages />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="custom-message-types">
        <h2 className="text-3xl font-bold mb-4">Custom Message Types</h2>
        <p className="text-muted-foreground mb-6">
          Chat interface with custom message types for rich content.
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import { MelonyProvider, useMelonyMessages, useMelonySend } from "melony";

// Define custom part types
type RichPart = {
  melonyId: string;
  type: "text" | "image" | "code" | "tool_call";
  role: "user" | "assistant" | "system";
  text?: string;
  imageUrl?: string;
  code?: string;
  language?: string;
  toolName?: string;
  toolArgs?: Record<string, any>;
};

function RichChat() {
  const messages = useMelonyMessages<RichPart>();
  const send = useMelonySend();

  const renderPart = (part: RichPart) => {
    switch (part.type) {
      case "text":
        return <p className="text-content">{part.text}</p>;
      
      case "image":
        return (
          <div className="image-container">
            <img src={part.imageUrl} alt="Chat image" className="max-w-full rounded" />
          </div>
        );
      
      case "code":
        return (
          <pre className="code-block">
            <code className={\`language-\${part.language}\`}>
              {part.code}
            </code>
          </pre>
        );
      
      case "tool_call":
        return (
          <div className="tool-call">
            <strong>🔧 {part.toolName}</strong>
            <pre>{JSON.stringify(part.toolArgs, null, 2)}</pre>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="rich-chat">
      {messages.map((message) => (
        <div key={message.id} className={\`message \${message.role}\`}>
          <div className="message-header">
            <strong>{message.role}</strong>
          </div>
          <div className="message-content">
            {message.parts.map((part, i) => (
              <div key={i} className="part">
                {renderPart(part)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CustomTypesChat() {
  return (
    <MelonyProvider<RichPart> endpoint="/api/chat">
      <RichChat />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="advanced-features">
        <h2 className="text-3xl font-bold mb-4">Advanced Features</h2>
        <p className="text-muted-foreground mb-6">
          Chat interface with advanced features like filtering, search, and real-time updates.
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import { useState, useMemo, useCallback } from "react";
import {
  MelonyProvider,
  useMelonyMessages,
  useMelonySend,
  useMelonyStatus,
  useMelonyPart,
} from "melony";

function AdvancedChat() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyUserMessages, setShowOnlyUserMessages] = useState(false);
  const [typingIndicator, setTypingIndicator] = useState(false);
  
  const messages = useMelonyMessages({
    filter: (message) => {
      if (showOnlyUserMessages && message.role !== "user") return false;
      if (searchTerm && !message.parts.some(part => 
        part.text?.toLowerCase().includes(searchTerm.toLowerCase())
      )) return false;
      return true;
    },
    sortBy: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    limit: 100,
  });
  
  const send = useMelonySend();
  const status = useMelonyStatus();
  
  // Listen to parts for typing indicator
  useMelonyPart((part) => {
    if (part.type === "text" && part.text) {
      setTypingIndicator(true);
      setTimeout(() => setTypingIndicator(false), 1000);
    }
  });
  
  const handleSend = useCallback(async (message: string) => {
    if (!message.trim()) return;
    
    try {
      await send(message);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }, [send]);
  
  const messageStats = useMemo(() => {
    const userCount = messages.filter(m => m.role === "user").length;
    const assistantCount = messages.filter(m => m.role === "assistant").length;
    const totalWords = messages.reduce((count, message) => 
      count + message.parts.reduce((partCount, part) => 
        partCount + (part.text?.split(' ').length || 0), 0
      ), 0
    );
    
    return { userCount, assistantCount, totalWords };
  }, [messages]);

  return (
    <div className="advanced-chat">
      <div className="chat-header">
        <h2>Advanced Chat</h2>
        <div className="stats">
          Messages: {messages.length} | 
          Words: {messageStats.totalWords} |
          Status: {status}
        </div>
      </div>
      
      <div className="chat-controls">
        <input
          type="text"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showOnlyUserMessages}
            onChange={(e) => setShowOnlyUserMessages(e.target.checked)}
          />
          Show only user messages
        </label>
      </div>
      
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={\`message \${message.role}\`}>
            <div className="message-header">
              <span className="role">{message.role}</span>
              <span className="timestamp">
                {message.createdAt.toLocaleTimeString()}
              </span>
            </div>
            <div className="message-content">
              {message.parts.map((part, i) => (
                <div key={i} className="part">
                  {part.type === "text" && <p>{part.text}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {typingIndicator && (
          <div className="typing-indicator">
            Assistant is typing...
          </div>
        )}
      </div>
      
      <div className="input-area">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
          disabled={status === "streaming"}
        />
        <button
          onClick={() => {
            const input = document.querySelector('input[placeholder="Type your message..."]');
            if (input) {
              handleSend(input.value);
              input.value = "";
            }
          }}
          disabled={status === "streaming"}
        >
          {status === "streaming" ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default function AdvancedChatExample() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <AdvancedChat />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="server-integration">
        <h2 className="text-3xl font-bold mb-4">Server Integration</h2>
        <p className="text-muted-foreground mb-6">
          Complete example with server-side integration using AI SDK.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Client Component</h3>
            <CodeBlock language="tsx">
              {`"use client";
import { MelonyProvider, useMelonyMessages, useMelonySend } from "melony";

function ChatInterface() {
  const messages = useMelonyMessages();
  const send = useMelonySend();

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={\`message \${message.role}\`}>
            {message.parts.map((part, i) => (
              <div key={i}>
                {part.type === "text" && <p>{part.text}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="input">
        <button onClick={() => send("Hello!")}>
          Send Message
        </button>
      </div>
    </div>
  );
}

export default function Chat() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <ChatInterface />
    </MelonyProvider>
  );
}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Server API Route</h3>
            <CodeBlock language="typescript">
              {`// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { message } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return result.toUIMessageStream();
}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="error-handling">
        <h2 className="text-3xl font-bold mb-4">Error Handling</h2>
        <p className="text-muted-foreground mb-6">
          Robust error handling with retry functionality and user feedback.
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import { useState, useCallback } from "react";
import { MelonyProvider, useMelonyMessages, useMelonySend, useMelonyStatus } from "melony";

function ErrorHandlingChat() {
  const messages = useMelonyMessages();
  const send = useMelonySend();
  const status = useMelonyStatus();
  const [error, setError] = useState<string | null>(null);

  const handleSend = useCallback(async (message: string) => {
    try {
      setError(null);
      await send(message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    }
  }, [send]);

  const retryLastMessage = useCallback(() => {
    const lastUserMessage = messages
      .filter(m => m.role === "user")
      .pop();
    
    if (lastUserMessage) {
      const lastText = lastUserMessage.parts
        .find(p => p.type === "text")?.text;
      
      if (lastText) {
        handleSend(lastText);
      }
    }
  }, [messages, handleSend]);

  return (
    <div className="error-handling-chat">
      {messages.map((message) => (
        <div key={message.id} className={\`message \${message.role}\`}>
          {message.parts.map((part, i) => (
            <div key={i}>
              {part.type === "text" && <p>{part.text}</p>}
              {part.type === "error" && (
                <div className="error-part text-red-500">
                  Error: {part.errorMessage}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      
      {status === "error" && (
        <div className="error-banner">
          <p>Something went wrong. Please try again.</p>
          <button onClick={retryLastMessage}>Retry Last Message</button>
        </div>
      )}
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
      
      <div className="input">
        <button 
          onClick={() => handleSend("Hello!")}
          disabled={status === "streaming"}
        >
          {status === "streaming" ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default function ErrorHandlingExample() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <ErrorHandlingChat />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="custom-hooks">
        <h2 className="text-3xl font-bold mb-4">Custom Hooks</h2>
        <p className="text-muted-foreground mb-6">
          Building custom hooks that combine melony functionality for reusable logic.
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import { useMemo, useCallback } from "react";
import { useMelonyMessages, useMelonySend, useMelonyStatus } from "melony";

// Custom hook for chat statistics
function useChatStats() {
  const messages = useMelonyMessages();
  
  return useMemo(() => {
    const userCount = messages.filter(m => m.role === "user").length;
    const assistantCount = messages.filter(m => m.role === "assistant").length;
    const totalWords = messages.reduce((count, message) => 
      count + message.parts.reduce((partCount, part) => 
        partCount + (part.text?.split(' ').length || 0), 0
      ), 0
    );
    
    return { userCount, assistantCount, totalWords };
  }, [messages]);
}

// Custom hook for message search
function useMessageSearch(query: string) {
  const messages = useMelonyMessages();
  
  return useMemo(() => {
    if (!query) return messages;
    
    return messages.filter(message =>
      message.parts.some(part =>
        part.text?.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [messages, query]);
}

// Custom hook for chat controls
function useChatControls() {
  const send = useMelonySend();
  const status = useMelonyStatus();
  
  const sendWithRetry = useCallback(async (message: string, maxRetries = 3) => {
    let attempts = 0;
    
    while (attempts < maxRetries) {
      try {
        await send(message);
        break;
      } catch (error) {
        attempts++;
        if (attempts >= maxRetries) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
      }
    }
  }, [send]);
  
  return {
    send,
    sendWithRetry,
    status,
    isIdle: status === "idle",
    isStreaming: status === "streaming",
    hasError: status === "error",
  };
}

// Usage in component
function MyChat() {
  const stats = useChatStats();
  const searchResults = useMessageSearch("hello");
  const { send, isStreaming, hasError } = useChatControls();
  
  return (
    <div>
      <div>Stats: {stats.userCount} user, {stats.assistantCount} assistant</div>
      <div>Search results: {searchResults.length}</div>
      <button onClick={() => send("Hello")} disabled={isStreaming}>
        Send
      </button>
      {hasError && <div>Error occurred</div>}
    </div>
  );
}

export default function CustomHooksExample() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <MyChat />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>
    </div>
  );
}