import { CodeBlock } from "@/components/ui/code-block";

export default function MelonyProviderPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MelonyProvider</h1>
        <p className="text-xl text-muted-foreground">
          The main provider component that manages chat state and handles server communication.
        </p>
      </div>

      <section id="overview">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-6">
          <code className="bg-muted px-1 py-0.5 rounded text-sm">MelonyProvider</code> is the root component 
          that wraps your chat interface and provides context to all melony hooks. It manages the streaming 
          chat state and handles communication with your server.
        </p>
      </section>

      <section id="basic-usage">
        <h2 className="text-3xl font-bold mb-4">Basic Usage</h2>
        <CodeBlock language="tsx">
          {`import { MelonyProvider } from "melony";

function App() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <YourChatComponent />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="props">
        <h2 className="text-3xl font-bold mb-4">Props</h2>
        
        <div className="space-y-6">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">endpoint</h3>
            <p className="text-muted-foreground text-sm mb-2">
              <strong>Type:</strong> <code className="bg-muted px-1 py-0.5 rounded">string</code>
            </p>
            <p className="text-muted-foreground text-sm mb-2">
              <strong>Default:</strong> <code className="bg-muted px-1 py-0.5 rounded">&quot;/api/chat&quot;</code>
            </p>
            <p className="text-muted-foreground text-sm">
              API endpoint for chat requests. Should return a streaming response in text/event-stream format.
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">headers</h3>
            <p className="text-muted-foreground text-sm mb-2">
              <strong>Type:</strong> <code className="bg-muted px-1 py-0.5 rounded">Record&lt;string, string&gt;</code>
            </p>
            <p className="text-muted-foreground text-sm mb-2">
              <strong>Default:</strong> <code className="bg-muted px-1 py-0.5 rounded">undefined</code>
            </p>
            <p className="text-muted-foreground text-sm">
              Additional headers to send with requests. Useful for authentication tokens or custom headers.
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">children</h3>
            <p className="text-muted-foreground text-sm mb-2">
              <strong>Type:</strong> <code className="bg-muted px-1 py-0.5 rounded">React.ReactNode</code>
            </p>
            <p className="text-muted-foreground text-sm">
              React components that will have access to melony context and hooks.
            </p>
          </div>
        </div>
      </section>

      <section id="typescript-generics">
        <h2 className="text-3xl font-bold mb-4">TypeScript Generics</h2>
        <p className="text-muted-foreground mb-6">
          You can specify custom part types using TypeScript generics:
        </p>

        <CodeBlock language="tsx">
          {`import { MelonyProvider } from "melony";

// Define your custom part type
type CustomPart = {
  melonyId: string;
  type: "text" | "image" | "tool_call";
  role: "user" | "assistant" | "system";
  text?: string;
  imageUrl?: string;
  toolName?: string;
  toolArgs?: Record<string, any>;
};

function App() {
  return (
    <MelonyProvider<CustomPart> endpoint="/api/chat">
      <YourChatComponent />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="examples">
        <h2 className="text-3xl font-bold mb-4">Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic setup</h3>
            <CodeBlock language="tsx">
              {`<MelonyProvider endpoint="/api/chat">
  <ChatInterface />
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With custom headers</h3>
            <CodeBlock language="tsx">
              {`<MelonyProvider 
  endpoint="/api/chat"
  headers={{
    "Authorization": "Bearer your-token",
    "X-Custom-Header": "value"
  }}
>
  <ChatInterface />
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With custom endpoint</h3>
            <CodeBlock language="tsx">
              {`<MelonyProvider endpoint="https://api.example.com/chat">
  <ChatInterface />
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With custom types</h3>
            <CodeBlock language="tsx">
              {`type MyPart = {
  melonyId: string;
  type: "text" | "code" | "image";
  role: "user" | "assistant";
  text?: string;
  code?: string;
  language?: string;
  imageUrl?: string;
};

<MelonyProvider<MyPart> endpoint="/api/chat">
  <ChatInterface />
</MelonyProvider>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="context-value">
        <h2 className="text-3xl font-bold mb-4">Context Value</h2>
        <p className="text-muted-foreground mb-6">
          The MelonyProvider provides the following context to child components:
        </p>

        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">endpoint</h3>
            <p className="text-muted-foreground text-sm">
              The API endpoint URL for chat requests.
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">headers</h3>
            <p className="text-muted-foreground text-sm">
              Additional headers to include with requests.
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">messages</h3>
            <p className="text-muted-foreground text-sm">
              Array of all messages in the conversation.
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">status</h3>
            <p className="text-muted-foreground text-sm">
              Current conversation status (idle, requested, streaming, error).
            </p>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">send</h3>
            <p className="text-muted-foreground text-sm">
              Function to send a new message to the chat.
            </p>
          </div>
        </div>
      </section>

      <section id="error-handling">
        <h2 className="text-3xl font-bold mb-4">Error Handling</h2>
        <p className="text-muted-foreground mb-6">
          The MelonyProvider handles errors gracefully and provides error state through hooks:
        </p>

        <CodeBlock language="tsx">
          {`import { MelonyProvider, useMelonyStatus } from "melony";

function ChatWithErrorHandling() {
  const status = useMelonyStatus();

  return (
    <div>
      {status === "error" && (
        <div className="error-message">
          Something went wrong. Please try again.
        </div>
      )}
      {/* Your chat UI */}
    </div>
  );
}

function App() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <ChatWithErrorHandling />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="performance-considerations">
        <h2 className="text-3xl font-bold mb-4">Performance Considerations</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Single Provider</h3>
            <p className="text-muted-foreground text-sm">
              Use only one MelonyProvider per application to avoid duplicate state management.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Provider Placement</h3>
            <p className="text-muted-foreground text-sm">
              Place the MelonyProvider as high as possible in your component tree, but only around 
              components that need chat functionality.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Memory Management</h3>
            <p className="text-muted-foreground text-sm">
              The provider automatically manages memory by limiting the number of messages kept in state.
            </p>
          </div>
        </div>
      </section>

      <section id="migration">
        <h2 className="text-3xl font-bold mb-4">Migration from Other Libraries</h2>
        <p className="text-muted-foreground mb-6">
          If you&apos;re migrating from other chat libraries, here are some common patterns:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">From react-chatbot-kit</h3>
            <CodeBlock language="tsx">
              {`// Before
import Chatbot from 'react-chatbot-kit';

// After
import { MelonyProvider } from 'melony';

// Wrap your components
<MelonyProvider endpoint="/api/chat">
  <YourChatComponents />
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">From react-chat-widget</h3>
            <CodeBlock language="tsx">
              {`// Before
import { Widget } from 'react-chat-widget';

// After
import { MelonyProvider, useMelonyMessages, useMelonySend } from 'melony';

// Use hooks instead of widget props
function ChatWidget() {
  const messages = useMelonyMessages();
  const send = useMelonySend();
  // Your custom UI
}`}
            </CodeBlock>
          </div>
        </div>
      </section>
    </div>
  );
}
