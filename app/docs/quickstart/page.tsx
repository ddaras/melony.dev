import { CodeBlock } from "@/components/ui/code-block";

export default function QuickstartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Quickstart</h1>
        <p className="text-xl text-muted-foreground">
          Build your first AI chat interface in 30 seconds.
        </p>
      </div>

      <section id="basic-example">
        <h2 className="text-3xl font-bold mb-4">Basic Chat Component</h2>
        <p className="text-muted-foreground mb-6">
          Here&apos;s a complete example of a chat component with streaming support:
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
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.role}:</strong>
          {message.parts.map((part, i) => (
            <div key={i}>{part.type === "text" && part.text}</div>
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
    <MelonyProvider endpoint="/api/chat">
      <ChatMessages />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="step-by-step">
        <h2 className="text-3xl font-bold mb-4">Step by Step</h2>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">1. Wrap your app with MelonyProvider</h3>
            <p className="text-muted-foreground">
              The <code className="bg-muted px-1 py-0.5 rounded text-sm">MelonyProvider</code> manages the chat state and handles server communication.
            </p>
            <CodeBlock language="tsx">
              {`<MelonyProvider endpoint="/api/chat">
  <YourChatComponent />
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">2. Use hooks to access chat data</h3>
            <p className="text-muted-foreground">
              Use the provided hooks to get messages, send new messages, and check status.
            </p>
            <CodeBlock language="tsx">
              {`const messages = useMelonyMessages(); // Get all messages
const send = useMelonySend(); // Function to send messages
const status = useMelonyStatus(); // Current status: idle, streaming, error`}
            </CodeBlock>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">3. Render messages and handle user input</h3>
            <p className="text-muted-foreground">
              Map over messages and their parts to display the conversation.
            </p>
            <CodeBlock language="tsx">
              {`{messages.map((message) => (
  <div key={message.id}>
    <strong>{message.role}:</strong>
    {message.parts.map((part, i) => (
      <div key={i}>{part.type === "text" && part.text}</div>
    ))}
  </div>
))}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="server-setup">
        <h2 className="text-3xl font-bold mb-4">Server Setup</h2>
        <p className="text-muted-foreground mb-6">
          You&apos;ll need a server endpoint that returns streaming responses. Here&apos;s a complete example using AI SDK:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">API Route (app/api/chat/route.ts)</h3>
            <CodeBlock language="typescript">
              {`import { openai } from "@ai-sdk/openai";
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

      <section id="customization">
        <h2 className="text-3xl font-bold mb-4">Customization</h2>
        <p className="text-muted-foreground mb-6">
          The example above is minimal. You can customize the UI, add styling, and use additional features:
        </p>

        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Add custom headers</h3>
            <CodeBlock language="tsx">
              {`<MelonyProvider 
  endpoint="/api/chat"
  headers={{ "Authorization": "Bearer your-token" }}
>
  <YourChatComponent />
</MelonyProvider>`}
            </CodeBlock>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Handle different message types</h3>
            <CodeBlock language="tsx">
              {`{message.parts.map((part, i) => (
  <div key={i}>
    {part.type === "text" && <p>{part.text}</p>}
    {part.type === "image" && <img src={part.imageUrl} />}
    {part.type === "tool_call" && (
      <div>Tool: {part.toolName}</div>
    )}
  </div>
))}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="next-steps">
        <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Text Delta Handling</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Learn how melony automatically handles streaming text updates for smooth UX.
            </p>
            <a href="/docs/text-deltas" className="text-primary hover:underline text-sm">
              Learn more →
            </a>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Custom Message Types</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Extend melony with your own message structures and types.
            </p>
            <a href="/docs/custom-types" className="text-primary hover:underline text-sm">
              Learn more →
            </a>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Advanced Usage</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Explore advanced features and hook combinations.
            </p>
            <a href="/docs/advanced-usage" className="text-primary hover:underline text-sm">
              Learn more →
            </a>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold mb-2">API Reference</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Complete reference for all components and hooks.
            </p>
            <a href="/docs/melony-provider" className="text-primary hover:underline text-sm">
              View API →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
