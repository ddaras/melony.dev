import { CodeBlock } from "@/components/ui/code-block";

export default function TypesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Types</h1>
        <p className="text-xl text-muted-foreground">
          Complete TypeScript type definitions for melony.
        </p>
      </div>

      <section id="overview">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-6">
          melony is built with TypeScript and provides comprehensive type definitions for all components, 
          hooks, and utilities. This ensures type safety and excellent developer experience.
        </p>
      </section>

      <section id="core-types">
        <h2 className="text-3xl font-bold mb-4">Core Types</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">MelonyPart</h3>
            <p className="text-muted-foreground mb-3">
              Base part structure that represents individual pieces of content in a message.
            </p>
            <CodeBlock language="typescript">
              {`type MelonyPart<TType = string, TExtra = {}> = {
  melonyId: string;
  type: TType;
  role: Role;
} & TExtra;`}
            </CodeBlock>
            
            <div className="mt-4 p-4 border border-border rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Properties</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-muted px-1 py-0.5 rounded">melonyId</code> - Unique identifier for the part</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">type</code> - Type of content (text, image, tool_call, etc.)</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">role</code> - Who sent the message (user, assistant, system)</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">TExtra</code> - Additional properties specific to the part type</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">MelonyMessage</h3>
            <p className="text-muted-foreground mb-3">
              Message container that groups related parts together.
            </p>
            <CodeBlock language="typescript">
              {`type MelonyMessage<TPart = MelonyPart> = {
  id: string;
  role: Role;
  parts: TPart[];
  createdAt: Date;
  metadata?: Record<string, any>;
};`}
            </CodeBlock>
            
            <div className="mt-4 p-4 border border-border rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Properties</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-muted px-1 py-0.5 rounded">id</code> - Unique identifier for the message</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">role</code> - Who sent the message</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">parts</code> - Array of parts in the message</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">createdAt</code> - When the message was created</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">metadata</code> - Optional additional data</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Role</h3>
            <p className="text-muted-foreground mb-3">
              Enumeration of possible message roles.
            </p>
            <CodeBlock language="typescript">
              {`type Role = "user" | "assistant" | "system";`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="hook-types">
        <h2 className="text-3xl font-bold mb-4">Hook Types</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">useMelonyMessages Options</h3>
            <CodeBlock language="typescript">
              {`type UseMelonyMessagesOptions<TPart = MelonyPart> = {
  filter?: (part: TPart) => boolean;
  groupBy?: (message: MelonyMessage<TPart>) => string;
  sortBy?: (a: MelonyMessage<TPart>, b: MelonyMessage<TPart>) => number;
  limit?: number;
  joinTextDeltas?: boolean | JoinTextDeltasOptions;
  mapper?: (data: any) => TPart;
  validator?: (data: any) => data is TPart;
};`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">JoinTextDeltasOptions</h3>
            <CodeBlock language="typescript">
              {`type JoinTextDeltasOptions = {
  deltaType: string;
  idField: string;
  deltaField: string;
  outputType: string;
  outputField: string;
};`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">useMelonyPart Callback</h3>
            <CodeBlock language="typescript">
              {`type MelonyPartCallback<TPart = MelonyPart> = (part: TPart) => void;`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="provider-types">
        <h2 className="text-3xl font-bold mb-4">Provider Types</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">MelonyProvider Props</h3>
            <CodeBlock language="typescript">
              {`type MelonyProviderProps<TPart = MelonyPart> = {
  endpoint?: string;
  headers?: Record<string, string>;
  children: React.ReactNode;
};`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">MelonyContext</h3>
            <CodeBlock language="typescript">
              {`type MelonyContext<TPart = MelonyPart> = {
  endpoint: string;
  headers?: Record<string, string>;
  messages: MelonyMessage<TPart>[];
  status: MelonyStatus;
  send: (message: string) => Promise<void>;
};`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="status-types">
        <h2 className="text-3xl font-bold mb-4">Status Types</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">MelonyStatus</h3>
            <CodeBlock language="typescript">
              {`type MelonyStatus = "idle" | "requested" | "streaming" | "error";`}
            </CodeBlock>
            
            <div className="mt-4 p-4 border border-border rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Status Values</h4>
              <div className="space-y-2 text-sm">
                <div><code className="bg-muted px-1 py-0.5 rounded">&quot;idle&quot;</code> - No active requests</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">&quot;requested&quot;</code> - Request sent, waiting for response</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">&quot;streaming&quot;</code> - Receiving streaming response</div>
                <div><code className="bg-muted px-1 py-0.5 rounded">&quot;error&quot;</code> - An error occurred</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="custom-types">
        <h2 className="text-3xl font-bold mb-4">Custom Types</h2>
        <p className="text-muted-foreground mb-6">
          You can extend melony&apos;s types to create custom part structures:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Custom Part</h3>
            <CodeBlock language="typescript">
              {`// Define your custom part type
type CustomPart = MelonyPart<"text" | "image" | "tool_call", {
  text?: string;
  imageUrl?: string;
  toolName?: string;
  toolArgs?: Record<string, any>;
}>;

// Use with MelonyProvider
<MelonyProvider<CustomPart> endpoint="/api/chat">
  <YourChatComponent />
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Advanced Custom Part</h3>
            <CodeBlock language="typescript">
              {`// More complex custom part with additional metadata
type AdvancedPart = MelonyPart<"text" | "code" | "image" | "video", {
  // Text content
  text?: string;
  language?: string; // For code blocks
  
  // Media content
  imageUrl?: string;
  videoUrl?: string;
  
  // Metadata
  timestamp?: number;
  isStreaming?: boolean;
  isError?: boolean;
  errorMessage?: string;
  
  // Custom fields
  priority?: "low" | "medium" | "high";
  tags?: string[];
}>;`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Custom Message with Metadata</h3>
            <CodeBlock language="typescript">
              {`// Custom message type with additional metadata
type CustomMessage = MelonyMessage<CustomPart> & {
  conversationId: string;
  userId: string;
  sessionId: string;
  priority: "low" | "medium" | "high";
  tags: string[];
  isRead: boolean;
  isArchived: boolean;
};`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="utility-types">
        <h2 className="text-3xl font-bold mb-4">Utility Types</h2>
        <p className="text-muted-foreground mb-6">
          melony provides several utility types for common use cases:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">TextPart</h3>
            <CodeBlock language="typescript">
              {`// Predefined type for text parts
type TextPart = MelonyPart<"text", {
  text: string;
}>;`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">ImagePart</h3>
            <CodeBlock language="typescript">
              {`// Predefined type for image parts
type ImagePart = MelonyPart<"image", {
  imageUrl: string;
  alt?: string;
  width?: number;
  height?: number;
}>;`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">ToolCallPart</h3>
            <CodeBlock language="typescript">
              {`// Predefined type for tool call parts
type ToolCallPart = MelonyPart<"tool_call", {
  toolName: string;
  toolArgs: Record<string, any>;
  toolResult?: any;
}>;`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="type-guards">
        <h2 className="text-3xl font-bold mb-4">Type Guards</h2>
        <p className="text-muted-foreground mb-6">
          Use type guards to safely check part types at runtime:
        </p>

        <CodeBlock language="typescript">
          {`// Type guard functions
function isTextPart(part: MelonyPart): part is TextPart {
  return part.type === "text" && "text" in part;
}

function isImagePart(part: MelonyPart): part is ImagePart {
  return part.type === "image" && "imageUrl" in part;
}

function isToolCallPart(part: MelonyPart): part is ToolCallPart {
  return part.type === "tool_call" && "toolName" in part;
}

// Usage in components
function PartRenderer({ part }: { part: MelonyPart }) {
  if (isTextPart(part)) {
    return <p>{part.text}</p>;
  }
  
  if (isImagePart(part)) {
    return <img src={part.imageUrl} alt={part.alt} />;
  }
  
  if (isToolCallPart(part)) {
    return (
      <div>
        <strong>Tool:</strong> {part.toolName}
        <pre>{JSON.stringify(part.toolArgs, null, 2)}</pre>
      </div>
    );
  }
  
  return null;
}`}
        </CodeBlock>
      </section>

      <section id="generic-constraints">
        <h2 className="text-3xl font-bold mb-4">Generic Constraints</h2>
        <p className="text-muted-foreground mb-6">
          When creating custom types, you can use generic constraints to ensure type safety:
        </p>

        <CodeBlock language="typescript">
          {`// Constraint to ensure part has required fields
type ValidPart = MelonyPart<string, {
  [K in string]: any;
}>;

// Constraint for specific part types
type TextOrImagePart = MelonyPart<"text" | "image", {
  text?: string;
  imageUrl?: string;
}>;

// Constraint for parts with specific role
type UserPart = MelonyPart<string, any> & {
  role: "user";
};

// Usage with constraints
function processPart<T extends ValidPart>(part: T): T {
  // Process the part
  return part;
}`}
        </CodeBlock>
      </section>

      <section id="migration-types">
        <h2 className="text-3xl font-bold mb-4">Migration Types</h2>
        <p className="text-muted-foreground mb-6">
          Types to help with migration from other chat libraries:
        </p>

        <CodeBlock language="typescript">
          {`// Migration from react-chatbot-kit
type ChatbotKitMessage = {
  id: string;
  message: string;
  type: "user" | "bot";
  timestamp: Date;
};

// Convert to melony format
function convertChatbotKitMessage(msg: ChatbotKitMessage): MelonyMessage {
  return {
    id: msg.id,
    role: msg.type === "bot" ? "assistant" : "user",
    parts: [{
      melonyId: \`\${msg.id}-part-0\`,
      type: "text",
      role: msg.type === "bot" ? "assistant" : "user",
      text: msg.message,
    }],
    createdAt: msg.timestamp,
  };
}

// Migration from react-chat-widget
type ChatWidgetMessage = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: number;
};

function convertChatWidgetMessage(msg: ChatWidgetMessage): MelonyMessage {
  return {
    id: msg.id,
    role: msg.sender === "bot" ? "assistant" : "user",
    parts: [{
      melonyId: \`\${msg.id}-part-0\`,
      type: "text",
      role: msg.sender === "bot" ? "assistant" : "user",
      text: msg.text,
    }],
    createdAt: new Date(msg.timestamp),
  };
}`}
        </CodeBlock>
      </section>

      <section id="best-practices">
        <h2 className="text-3xl font-bold mb-4">TypeScript Best Practices</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Use strict TypeScript</h3>
            <p className="text-muted-foreground text-sm">
              Enable strict mode in your tsconfig.json to catch type errors at compile time.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Define types early</h3>
            <p className="text-muted-foreground text-sm">
              Define your custom types before implementing components to ensure consistency.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Use type guards</h3>
            <p className="text-muted-foreground text-sm">
              Implement type guards for runtime type checking and better error handling.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Document complex types</h3>
            <p className="text-muted-foreground text-sm">
              Add JSDoc comments to complex types to improve maintainability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
