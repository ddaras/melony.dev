import { CodeBlock } from "@/components/ui/code-block";

export default function TextDeltasPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Text Delta Handling</h1>
        <p className="text-xl text-muted-foreground">
          Learn how melony automatically handles streaming text updates for smooth user experience.
        </p>
      </div>

      <section id="overview">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-6">
          melony automatically handles text deltas for smooth streaming. When your server sends 
          incremental text updates, melony joins them together to create a seamless typing effect.
        </p>
      </section>

      <section id="how-it-works">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground mb-6">
          Your server streams individual text deltas, and melony automatically combines them:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Server streams deltas</h3>
            <CodeBlock language="json">
              {`data: {"type": "text-delta", "id": "block1", "delta": "Hello"}
data: {"type": "text-delta", "id": "block1", "delta": " world"}
data: {"type": "text-delta", "id": "block1", "delta": "!"}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Client receives joined text</h3>
            <CodeBlock language="json">
              {`{type: "text", text: "Hello world!"}`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="configuration">
        <h2 className="text-3xl font-bold mb-4">Configuration</h2>
        <p className="text-muted-foreground mb-6">
          Configure delta handling with <code className="bg-muted px-1 py-0.5 rounded text-sm">useMelonyMessages</code>:
        </p>

        <CodeBlock language="tsx">
          {`const messages = useMelonyMessages({
  joinTextDeltas: {
    deltaType: "text-delta",
    idField: "id", 
    deltaField: "delta",
    outputType: "text",
    outputField: "text",
  },
});`}
        </CodeBlock>

        <div className="mt-6 space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Configuration Options</h3>
            <div className="space-y-2 text-sm">
              <div><code className="bg-muted px-1 py-0.5 rounded">deltaType</code> - The type field that identifies delta messages</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">idField</code> - Field containing the unique identifier for grouping deltas</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">deltaField</code> - Field containing the text delta content</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">outputType</code> - The type of the final joined part</div>
              <div><code className="bg-muted px-1 py-0.5 rounded">outputField</code> - Field name for the joined text in the output</div>
            </div>
          </div>
        </div>
      </section>

      <section id="default-behavior">
        <h2 className="text-3xl font-bold mb-4">Default Behavior</h2>
        <p className="text-muted-foreground mb-6">
          If you don&apos;t specify configuration, melony uses these defaults:
        </p>

        <CodeBlock language="tsx">
          {`// These are the default values
const messages = useMelonyMessages({
  joinTextDeltas: {
    deltaType: "text-delta",
    idField: "id",
    deltaField: "delta", 
    outputType: "text",
    outputField: "text",
  },
});`}
        </CodeBlock>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The default configuration works with AI SDK&apos;s <code className="bg-muted px-1 py-0.5 rounded text-sm">toUIMessageStream()</code> output format.
          </p>
        </div>
      </section>

      <section id="custom-delta-types">
        <h2 className="text-3xl font-bold mb-4">Custom Delta Types</h2>
        <p className="text-muted-foreground mb-6">
          You can configure melony to work with different delta formats from your server:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Example: Custom server format</h3>
            <p className="text-muted-foreground mb-3">
              If your server sends deltas in this format:
            </p>
            <CodeBlock language="json">
              {`data: {"type": "chunk", "blockId": "msg-123", "content": "Hello"}
data: {"type": "chunk", "blockId": "msg-123", "content": " world"}
data: {"type": "chunk", "blockId": "msg-123", "content": "!"}`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Configure melony accordingly</h3>
            <CodeBlock language="tsx">
              {`const messages = useMelonyMessages({
  joinTextDeltas: {
    deltaType: "chunk",
    idField: "blockId",
    deltaField: "content",
    outputType: "text",
    outputField: "text",
  },
});`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section id="disabling-deltas">
        <h2 className="text-3xl font-bold mb-4">Disabling Delta Handling</h2>
        <p className="text-muted-foreground mb-6">
          If you don&apos;t want automatic delta joining, you can disable it:
        </p>

        <CodeBlock language="tsx">
          {`const messages = useMelonyMessages({
  joinTextDeltas: false, // Disable delta handling
});`}
        </CodeBlock>

        <div className="mt-6 p-4 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> When disabled, you&apos;ll receive individual delta parts as they arrive, 
            and you&apos;ll need to handle joining them manually in your UI.
          </p>
        </div>
      </section>

      <section id="real-world-example">
        <h2 className="text-3xl font-bold mb-4">Real-World Example</h2>
        <p className="text-muted-foreground mb-6">
          Here&apos;s a complete example showing how text deltas work in practice:
        </p>

        <CodeBlock language="tsx">
          {`"use client";
import { MelonyProvider, useMelonyMessages } from "melony";

function StreamingChat() {
  const messages = useMelonyMessages({
    joinTextDeltas: true, // Enable automatic delta joining
  });

  return (
    <div className="chat-container">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <div className="message-role">{message.role}</div>
          <div className="message-content">
            {message.parts.map((part, i) => (
              <div key={i}>
                {part.type === "text" && (
                  <p className="streaming-text">{part.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Chat() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <StreamingChat />
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section id="troubleshooting">
        <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Deltas not joining</h3>
            <p className="text-muted-foreground text-sm">
              Check that your server is sending the correct format and that the configuration 
              matches your server&apos;s delta structure.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Multiple text parts</h3>
            <p className="text-muted-foreground text-sm">
              If you see multiple text parts instead of joined text, verify that the 
              <code className="bg-muted px-1 py-0.5 rounded text-sm">idField</code> values match for deltas that should be joined.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
