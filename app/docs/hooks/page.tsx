import { CodeBlock } from "@/components/ui/code-block";

export default function HooksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Hooks</h1>
        <p className="text-xl text-muted-foreground">
          Complete reference for all melony hooks and their usage.
        </p>
      </div>

      <section id="overview">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-6">
          melony provides several hooks that give you fine-grained access to chat state and functionality. 
          All hooks must be used within a <code className="bg-muted px-1 py-0.5 rounded text-sm">MelonyProvider</code>.
        </p>
      </section>

      <section id="useMelonyMessages">
        <h2 className="text-3xl font-bold mb-4">useMelonyMessages</h2>
        <p className="text-muted-foreground mb-6">
          Returns grouped and processed messages with optional filtering and transformation.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <CodeBlock language="tsx">
              {`import { useMelonyMessages } from "melony";

function ChatMessages() {
  const messages = useMelonyMessages();
  
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.role}:</strong>
          {message.parts.map((part, i) => (
            <div key={i}>{part.type === "text" && part.text}</div>
          ))}
        </div>
      ))}
    </div>
  );
}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Options</h3>
            <CodeBlock language="tsx">
              {`const messages = useMelonyMessages({
  filter: (part) => part.type === "text",
  joinTextDeltas: true,
  limit: 50,
  sortBy: (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
});`}
            </CodeBlock>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Options</h3>
            <div className="space-y-2 text-sm">
              <div><code className="bg-muted px-1 py-0.5 rounded">filter</code> - Function to filter messages or parts</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">groupBy</code> - Function to group messages</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">sortBy</code> - Function to sort messages</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">limit</code> - Maximum number of messages to keep</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">joinTextDeltas</code> - Whether to join text deltas automatically</div>
            </div>
          </div>
        </div>
      </section>

      <section id="useMelonySend">
        <h2 className="text-3xl font-bold mb-4">useMelonySend</h2>
        <p className="text-muted-foreground mb-6">
          Returns a function to send new messages to the chat.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <CodeBlock language="tsx">
              {`import { useMelonySend } from "melony";

function ChatInput() {
  const send = useMelonySend();
  
  const handleSend = () => {
    send("Hello, world!");
  };
  
  return (
    <button onClick={handleSend}>
      Send Message
    </button>
  );
}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Error Handling</h3>
            <CodeBlock language="tsx">
              {`function ChatInput() {
  const send = useMelonySend();
  
  const handleSend = async (message: string) => {
    try {
      await send(message);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };
  
  return (
    <input 
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          handleSend(e.currentTarget.value);
        }
      }}
    />
  );
}`}
            </CodeBlock>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Return Value</h3>
            <p className="text-muted-foreground text-sm">
              <strong>Type:</strong> <code className="bg-muted px-1 py-0.5 rounded">(message: string) =&gt; Promise&lt;void&gt;</code>
            </p>
            <p className="text-muted-foreground text-sm">
              Function that sends a message to the chat and returns a Promise that resolves when the message is sent.
            </p>
          </div>
        </div>
      </section>

      <section id="useMelonyStatus">
        <h2 className="text-3xl font-bold mb-4">useMelonyStatus</h2>
        <p className="text-muted-foreground mb-6">
          Returns the current conversation state.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <CodeBlock language="tsx">
              {`import { useMelonyStatus } from "melony";

function ChatStatus() {
  const status = useMelonyStatus();
  
  return (
    <div>
      Status: {status}
      {status === "streaming" && <div>Assistant is typing...</div>}
      {status === "error" && <div>Something went wrong</div>}
    </div>
  );
}`}
            </CodeBlock>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Status Values</h3>
            <div className="space-y-2 text-sm">
              <div><code className="bg-muted px-1 py-0.5 rounded">&quot;idle&quot;</code> - No active requests</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">&quot;requested&quot;</code> - Request sent, waiting for response</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">&quot;streaming&quot;</code> - Receiving streaming response</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">&quot;error&quot;</code> - An error occurred</div>
            </div>
          </div>
        </div>
      </section>

      <section id="useMelonyPart">
        <h2 className="text-3xl font-bold mb-4">useMelonyPart</h2>
        <p className="text-muted-foreground mb-6">
          Subscribe to individual parts as they stream in for real-time updates.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <CodeBlock language="tsx">
              {`import { useMelonyPart } from "melony";

function PartListener() {
  useMelonyPart((part) => {
    console.log("New part received:", part);
  });
  
  return <div>Listening for parts...</div>;
}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Typing Indicator</h3>
            <CodeBlock language="tsx">
              {`import { useState } from "react";
import { useMelonyPart } from "melony";

function TypingIndicator() {
  const [isTyping, setIsTyping] = useState(false);
  
  useMelonyPart((part) => {
    if (part.type === "text" && part.text) {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 1000);
    }
  });
  
  return (
    <div>
      {isTyping && <div>Assistant is typing...</div>}
    </div>
  );
}`}
            </CodeBlock>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Callback Function</h3>
            <p className="text-muted-foreground text-sm">
              <strong>Type:</strong> <code className="bg-muted px-1 py-0.5 rounded">(part: MelonyPart) =&gt; void</code>
            </p>
            <p className="text-muted-foreground text-sm">
              Function called for each part as it streams in. Use this for real-time updates, 
              typing indicators, or custom processing.
            </p>
          </div>
        </div>
      </section>

      <section id="hook-combinations">
        <h2 className="text-3xl font-bold mb-4">Hook Combinations</h2>
        <p className="text-muted-foreground mb-6">
          Combine multiple hooks to build sophisticated chat interfaces:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Complete Chat Interface</h3>
            <CodeBlock language="tsx">
              {`import { 
  useMelonyMessages, 
  useMelonySend, 
  useMelonyStatus, 
  useMelonyPart 
} from "melony";

function CompleteChat() {
  const messages = useMelonyMessages();
  const send = useMelonySend();
  const status = useMelonyStatus();
  const [typing, setTyping] = useState(false);
  
  useMelonyPart((part) => {
    if (part.type === "text") {
      setTyping(true);
      setTimeout(() => setTyping(false), 1000);
    }
  });
  
  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={\`message \${message.role}\`}>
            {message.parts.map((part, i) => (
              <div key={i}>{part.type === "text" && part.text}</div>
            ))}
          </div>
        ))}
        {typing && <div>Assistant is typing...</div>}
      </div>
      
      <div className="input">
        <button 
          onClick={() => send("Hello!")} 
          disabled={status === "streaming"}
        >
          {status === "streaming" ? "Sending..." : "Send"}
        </button>
        {status === "error" && <div>Error occurred</div>}
      </div>
    </div>
  );
}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Filtered Messages with Status</h3>
            <CodeBlock language="tsx">
              {`function FilteredChat() {
  const textMessages = useMelonyMessages({
    filter: (part) => part.type === "text",
    limit: 20,
  });
  
  const status = useMelonyStatus();
  const send = useMelonySend();
  
  return (
    <div>
      <div className="status">
        Status: {status} | Messages: {textMessages.length}
      </div>
      
      {textMessages.map((message) => (
        <div key={message.id}>
          {message.parts.map((part, i) => (
            <p key={i}>{part.text}</p>
          ))}
        </div>
      ))}
      
      <button 
        onClick={() => send("New message")}
        disabled={status === "streaming"}
      >
        Send
      </button>
    </div>
  );
}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="custom-hooks">
        <h2 className="text-3xl font-bold mb-4">Custom Hooks</h2>
        <p className="text-muted-foreground mb-6">
          Create your own custom hooks that combine melony functionality:
        </p>

        <CodeBlock language="tsx">
          {`import { useMelonyMessages, useMelonySend, useMelonyStatus } from "melony";

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

// Usage
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
}`}
        </CodeBlock>
      </section>

      <section id="performance-tips">
        <h2 className="text-3xl font-bold mb-4">Performance Tips</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Use useMemo for expensive operations</h3>
            <p className="text-muted-foreground text-sm">
              Wrap expensive computations in useMemo to avoid recalculating on every render.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Use useCallback for event handlers</h3>
            <p className="text-muted-foreground text-sm">
              Wrap event handlers in useCallback to prevent unnecessary re-renders of child components.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Limit message count</h3>
            <p className="text-muted-foreground text-sm">
              Use the limit option in useMelonyMessages to prevent memory issues with large conversations.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Filter early</h3>
            <p className="text-muted-foreground text-sm">
              Use the filter option in useMelonyMessages instead of filtering in your render function.
            </p>
          </div>
        </div>
      </section>

      <section id="troubleshooting">
        <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Hooks not working</h3>
            <p className="text-muted-foreground text-sm">
              Make sure you&apos;re using hooks inside a MelonyProvider component.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Messages not updating</h3>
            <p className="text-muted-foreground text-sm">
              Check that your server is sending the correct format and that the endpoint is accessible.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Performance issues</h3>
            <p className="text-muted-foreground text-sm">
              Use the limit option and consider implementing virtual scrolling for large message lists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
