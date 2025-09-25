import { CodeBlock } from "@/components/ui/code-block";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">melony</h1>
        <p className="text-xl text-muted-foreground mb-6">
          TypeScript‑first, headless React toolkit for building AI chat UIs with streaming support.
        </p>
        <div className="flex items-center gap-2 mb-8">
          <Badge variant="secondary">npm version</Badge>
          <Badge variant="secondary">License</Badge>
          <Badge variant="secondary">TypeScript</Badge>
        </div>
      </div>

      <section id="core-idea">
        <h2 className="text-3xl font-bold mb-4">The core idea</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>• <strong>MelonyProvider</strong> manages streaming chat state and handles server communication.</li>
          <li>• <strong>Hooks</strong> give you fine-grained access to messages, parts, status, and sending.</li>
          <li>• <strong>Flexible parts system</strong> supports any message structure with custom mappers.</li>
          <li>• <strong>TypeScript-first</strong> with full type safety and extensibility.</li>
        </ul>
      </section>

      <section id="quickstart">
        <h2 className="text-3xl font-bold mb-4">30‑second quickstart</h2>
        <p className="text-muted-foreground mb-6">
          Basic chat component with streaming support:
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

      <section id="features">
        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Streaming Support</h3>
            <p className="text-muted-foreground">
              Built-in support for streaming responses with automatic text delta handling for smooth user experience.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">TypeScript First</h3>
            <p className="text-muted-foreground">
              Full type safety with custom message types and extensible part system for any use case.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Headless Design</h3>
            <p className="text-muted-foreground">
              Complete control over UI with flexible hooks and components that work with any design system.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Easy Integration</h3>
            <p className="text-muted-foreground">
              Works seamlessly with AI SDK and other streaming libraries. Simple server setup required.
            </p>
          </div>
        </div>
      </section>

      <section id="next-steps">
        <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/docs/installation" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Installation</h3>
            <p className="text-sm text-muted-foreground">Get started with melony in your project</p>
          </Link>
          <Link 
            href="/docs/quickstart" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Quickstart Guide</h3>
            <p className="text-sm text-muted-foreground">Build your first chat interface</p>
          </Link>
          <Link 
            href="/docs/text-deltas" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Text Delta Handling</h3>
            <p className="text-sm text-muted-foreground">Learn about streaming text updates</p>
          </Link>
          <Link 
            href="/docs/server-integration" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Server Integration</h3>
            <p className="text-sm text-muted-foreground">Connect to your AI backend</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
