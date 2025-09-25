import { CodeBlock } from "@/components/ui/code-block";

export default function CustomTypesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Custom Message Types</h1>
        <p className="text-xl text-muted-foreground">
          Extend melony with your own message structures and types using TypeScript generics.
        </p>
      </div>

      <section id="overview">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-6">
          melony supports custom message structures through TypeScript generics and mappers. 
          This allows you to define your own part types and message formats while maintaining full type safety.
        </p>
      </section>

      <section id="defining-custom-types">
        <h2 className="text-3xl font-bold mb-4">Defining Custom Types</h2>
        <p className="text-muted-foreground mb-6">
          Start by defining your custom part type that extends the base melony structure:
        </p>

        <CodeBlock language="typescript">
          {`// Define your custom part type
type CustomPart = {
  melonyId: string;
  type: "text" | "image" | "tool_call";
  role: "user" | "assistant" | "system";
  text?: string;
  imageUrl?: string;
  toolName?: string;
  toolArgs?: Record<string, any>;
};`}
        </CodeBlock>

        <div className="mt-6 p-4 border border-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Required Fields</h3>
          <div className="space-y-2 text-sm">
            <div><code className="bg-muted px-1 py-0.5 rounded">melonyId</code> - Unique identifier for the part</div>
            <div><code className="bg-muted px-1 py-0.5 rounded">type</code> - The type of content (text, image, tool_call, etc.)</div>
            <div><code className="bg-muted px-1 py-0.5 rounded">role</code> - Who sent the message (user, assistant, system)</div>
          </div>
        </div>
      </section>

      <section id="using-custom-types">
        <h2 className="text-3xl font-bold mb-4">Using Custom Types</h2>
        <p className="text-muted-foreground mb-6">
          Use your custom types with the MelonyProvider and hooks:
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import {
  MelonyProvider,
  useMelonyMessages,
  useMelonySend,
  useMelonyStatus,
} from "melony";

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

function ChatWithCustomTypes() {
  const messages = useMelonyMessages<CustomPart>();
  const send = useMelonySend();
  const status = useMelonyStatus();

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.role}:</strong>
          {message.parts.map((part, i) => (
            <div key={i}>
              {part.type === "text" && <p>{part.text}</p>}
              {part.type === "image" && (
                <img src={part.imageUrl} alt="User uploaded image" />
              )}
              {part.type === "tool_call" && (
                <div>
                  <strong>Tool:</strong> {part.toolName}
                  <pre>{JSON.stringify(part.toolArgs, null, 2)}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => send("Hello!")} disabled={status === "streaming"}>
        {status === "streaming" ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

export default function Chat() {
  return (
    <MelonyProvider<CustomPart> endpoint="/api/chat">
      <ChatWithCustomTypes />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="advanced-custom-types">
        <h2 className="text-3xl font-bold mb-4">Advanced Custom Types</h2>
        <p className="text-muted-foreground mb-6">
          You can create more complex custom types with additional metadata and validation:
        </p>

        <CodeBlock language="typescript">
          {`// Advanced custom part with metadata
type AdvancedPart = {
  melonyId: string;
  type: "text" | "image" | "video" | "audio" | "file" | "code_block" | "tool_call";
  role: "user" | "assistant" | "system" | "function";
  
  // Text content
  text?: string;
  language?: string; // For code blocks
  
  // Media content
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  
  // Tool calls
  toolName?: string;
  toolArgs?: Record<string, any>;
  toolResult?: any;
  
  // Metadata
  timestamp?: number;
  metadata?: Record<string, any>;
  
  // UI hints
  isStreaming?: boolean;
  isError?: boolean;
  errorMessage?: string;
};`}
        </CodeBlock>
      </section>

      <section id="type-mappers">
        <h2 className="text-3xl font-bold mb-4">Type Mappers</h2>
        <p className="text-muted-foreground mb-6">
          You can create custom mappers to transform server responses into your custom types:
        </p>

        <CodeBlock language="typescript">
          {`// Custom mapper function
function mapServerResponseToCustomPart(serverData: any): CustomPart {
  return {
    melonyId: serverData.id || crypto.randomUUID(),
    type: serverData.type,
    role: serverData.role,
    text: serverData.content,
    imageUrl: serverData.image_url,
    toolName: serverData.function_name,
    toolArgs: serverData.function_arguments,
  };
}

// Use with custom mapper
const messages = useMelonyMessages<CustomPart>({
  mapper: mapServerResponseToCustomPart,
});`}
        </CodeBlock>
      </section>

      <section id="validation">
        <h2 className="text-3xl font-bold mb-4">Type Validation</h2>
        <p className="text-muted-foreground mb-6">
          Add runtime validation to ensure your custom types are properly structured:
        </p>

        <CodeBlock language="typescript">
          {`// Validation function
function validateCustomPart(part: any): part is CustomPart {
  return (
    typeof part === 'object' &&
    typeof part.melonyId === 'string' &&
    typeof part.type === 'string' &&
    typeof part.role === 'string' &&
    ['text', 'image', 'tool_call'].includes(part.type) &&
    ['user', 'assistant', 'system'].includes(part.role)
  );
}

// Use with validation
const messages = useMelonyMessages<CustomPart>({
  validator: validateCustomPart,
});`}
        </CodeBlock>
      </section>

      <section id="real-world-example">
        <h2 className="text-3xl font-bold mb-4">Real-World Example</h2>
        <p className="text-muted-foreground mb-6">
          Here&apos;s a complete example of a chat interface with custom message types:
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import { MelonyProvider, useMelonyMessages, useMelonySend } from "melony";

// Define custom part types for a rich chat interface
type RichPart = {
  melonyId: string;
  type: "text" | "image" | "code" | "tool_call" | "error";
  role: "user" | "assistant" | "system";
  text?: string;
  imageUrl?: string;
  code?: string;
  language?: string;
  toolName?: string;
  toolArgs?: Record<string, any>;
  errorMessage?: string;
};

function RichChatInterface() {
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
      
      case "error":
        return (
          <div className="error-message text-red-500">
            ❌ {part.errorMessage}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="chat-container">
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

export default function RichChat() {
  return (
    <MelonyProvider<RichPart> endpoint="/api/chat">
      <RichChatInterface />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="best-practices">
        <h2 className="text-3xl font-bold mb-4">Best Practices</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Keep types focused</h3>
            <p className="text-muted-foreground text-sm">
              Define types that match your specific use case rather than trying to support every possible message type.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Use TypeScript strictly</h3>
            <p className="text-muted-foreground text-sm">
              Enable strict TypeScript settings to catch type errors at compile time.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Add runtime validation</h3>
            <p className="text-muted-foreground text-sm">
              Include validation functions to catch runtime errors and provide better error messages.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Document your types</h3>
            <p className="text-muted-foreground text-sm">
              Add JSDoc comments to explain the purpose and structure of your custom types.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
