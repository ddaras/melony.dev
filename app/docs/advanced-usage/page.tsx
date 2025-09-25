import { CodeBlock } from "@/components/ui/code-block";

export default function AdvancedUsagePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Advanced Usage</h1>
        <p className="text-xl text-muted-foreground">
          Explore advanced features and hook combinations for building sophisticated chat interfaces.
        </p>
      </div>

      <section id="individual-hooks">
        <h2 className="text-3xl font-bold mb-4">Individual Hooks</h2>
        <p className="text-muted-foreground mb-6">
          For more control, use individual hooks to build custom UIs with fine-grained state management:
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import {
  useMelonyMessages,
  useMelonySend,
  useMelonyStatus,
  useMelonyPart,
} from "melony";

export function AdvancedChat() {
  const messages = useMelonyMessages({
    filter: (part) => part.type === "text",
    joinTextDeltas: true,
    limit: 50,
  });
  const send = useMelonySend();
  const status = useMelonyStatus();

  // Listen to individual parts as they stream
  useMelonyPart((part) => {
    console.log("New part received:", part);
  });

  return (
    <div>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={\`message \${message.role}\`}>
            {message.parts.map((part, i) => (
              <div key={i}>{part.type === "text" && part.text}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="input">
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
}`}
        </CodeBlock>
      </section>

      <section id="message-filtering">
        <h2 className="text-3xl font-bold mb-4">Message Filtering</h2>
        <p className="text-muted-foreground mb-6">
          Filter messages and parts to show only what you need:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Filter by part type</h3>
            <CodeBlock language="tsx">
              {`const textMessages = useMelonyMessages({
  filter: (part) => part.type === "text",
});`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Filter by role</h3>
            <CodeBlock language="tsx">
              {`const userMessages = useMelonyMessages({
  filter: (message) => message.role === "user",
});`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Complex filtering</h3>
            <CodeBlock language="tsx">
              {`const recentTextMessages = useMelonyMessages({
  filter: (part) => 
    part.type === "text" && 
    part.text && 
    part.text.length > 10,
  limit: 20,
});`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="message-grouping">
        <h2 className="text-3xl font-bold mb-4">Message Grouping</h2>
        <p className="text-muted-foreground mb-6">
          Group messages by different criteria for better organization:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Group by role</h3>
            <CodeBlock language="tsx">
              {`const groupedMessages = useMelonyMessages({
  groupBy: (message) => message.role,
});`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Group by timestamp</h3>
            <CodeBlock language="tsx">
              {`const timeGroupedMessages = useMelonyMessages({
  groupBy: (message) => {
    const date = new Date(message.createdAt);
    return date.toDateString();
  },
});`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="message-sorting">
        <h2 className="text-3xl font-bold mb-4">Message Sorting</h2>
        <p className="text-muted-foreground mb-6">
          Sort messages in different orders:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Sort by timestamp (newest first)</h3>
            <CodeBlock language="tsx">
              {`const sortedMessages = useMelonyMessages({
  sortBy: (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
});`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Sort by message length</h3>
            <CodeBlock language="tsx">
              {`const lengthSortedMessages = useMelonyMessages({
  sortBy: (a, b) => {
    const aLength = a.parts.reduce((sum, part) => sum + (part.text?.length || 0), 0);
    const bLength = b.parts.reduce((sum, part) => sum + (part.text?.length || 0), 0);
    return bLength - aLength;
  },
});`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="part-listening">
        <h2 className="text-3xl font-bold mb-4">Part Listening</h2>
        <p className="text-muted-foreground mb-6">
          Listen to individual parts as they stream in for real-time updates:
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import { useMelonyPart } from "melony";

function RealTimeChat() {
  const [typingIndicator, setTypingIndicator] = useState(false);
  const [lastPart, setLastPart] = useState(null);

  // Listen to all parts as they arrive
  useMelonyPart((part) => {
    setLastPart(part);
    
    if (part.type === "text" && part.text) {
      setTypingIndicator(true);
      // Hide typing indicator after a delay
      setTimeout(() => setTypingIndicator(false), 1000);
    }
  });

  return (
    <div>
      {lastPart && (
        <div className="last-part">
          Last part: {lastPart.type} - {lastPart.text}
        </div>
      )}
      {typingIndicator && (
        <div className="typing-indicator">
          Assistant is typing...
        </div>
      )}
    </div>
  );
}`}
        </CodeBlock>
      </section>

      <section id="custom-send-function">
        <h2 className="text-3xl font-bold mb-4">Custom Send Function</h2>
        <p className="text-muted-foreground mb-6">
          Create custom send functions with additional logic:
        </p>

        <CodeBlock language="tsx">
          {`function CustomChat() {
  const send = useMelonySend();
  const status = useMelonyStatus();

  const sendWithRetry = async (message: string, maxRetries = 3) => {
    let attempts = 0;
    
    while (attempts < maxRetries) {
      try {
        await send(message);
        break;
      } catch (error) {
        attempts++;
        if (attempts >= maxRetries) {
          console.error("Failed to send message after", maxRetries, "attempts");
          throw error;
        }
        // Wait before retry
        await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
      }
    }
  };

  const sendWithMetadata = async (message: string) => {
    const messageWithMeta = {
      text: message,
      metadata: {
        timestamp: Date.now(),
        userId: "user123",
        sessionId: "session456",
      },
    };
    
    await send(JSON.stringify(messageWithMeta));
  };

  return (
    <div>
      <button onClick={() => sendWithRetry("Hello!")}>
        Send with Retry
      </button>
      <button onClick={() => sendWithMetadata("Hello with metadata!")}>
        Send with Metadata
      </button>
    </div>
  );
}`}
        </CodeBlock>
      </section>

      <section id="error-handling">
        <h2 className="text-3xl font-bold mb-4">Error Handling</h2>
        <p className="text-muted-foreground mb-6">
          Implement robust error handling for better user experience:
        </p>

        <CodeBlock language="tsx">
          {`function ErrorHandlingChat() {
  const messages = useMelonyMessages();
  const send = useMelonySend();
  const status = useMelonyStatus();
  const [error, setError] = useState(null);

  const handleSend = async (message: string) => {
    try {
      setError(null);
      await send(message);
    } catch (err) {
      setError(err.message || "Failed to send message");
    }
  };

  const retryLastMessage = () => {
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
  };

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id} className={\`message \${message.role}\`}>
          {message.parts.map((part, i) => (
            <div key={i}>
              {part.type === "text" && part.text}
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
    </div>
  );
}`}
        </CodeBlock>
      </section>

      <section id="performance-optimization">
        <h2 className="text-3xl font-bold mb-4">Performance Optimization</h2>
        <p className="text-muted-foreground mb-6">
          Optimize your chat interface for better performance:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Limit message count</h3>
            <CodeBlock language="tsx">
              {`const recentMessages = useMelonyMessages({
  limit: 50, // Only keep last 50 messages
});`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Memoize expensive operations</h3>
            <CodeBlock language="tsx">
              {`const processedMessages = useMemo(() => {
  return messages.map(message => ({
    ...message,
    wordCount: message.parts.reduce((count, part) => 
      count + (part.text?.split(' ').length || 0), 0
    ),
  }));
}, [messages]);`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Virtual scrolling for large lists</h3>
            <CodeBlock language="tsx">
              {`import { FixedSizeList as List } from 'react-window';

function VirtualizedChat() {
  const messages = useMelonyMessages();
  
  const MessageItem = ({ index, style }) => (
    <div style={style}>
      {renderMessage(messages[index])}
    </div>
  );

  return (
    <List
      height={600}
      itemCount={messages.length}
      itemSize={100}
    >
      {MessageItem}
    </List>
  );
}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="real-world-example">
        <h2 className="text-3xl font-bold mb-4">Complete Advanced Example</h2>
        <p className="text-muted-foreground mb-6">
          Here&apos;s a complete example showcasing advanced features:
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

function AdvancedChatInterface() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyUserMessages, setShowOnlyUserMessages] = useState(false);
  
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
  
  const [typingIndicator, setTypingIndicator] = useState(false);
  
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
                  {part.type === "text" && (
                    <p>{part.text}</p>
                  )}
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

export default function AdvancedChat() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <AdvancedChatInterface />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>
    </div>
  );
}
