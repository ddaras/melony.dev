import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Get up and running with Melony in minutes. Learn how to use MelonyProvider, MELONY_UI_GUIDE, and render HTML-like components progressively from AI responses.",
  openGraph: {
    title: "Melony Quick Start Guide - Build AI Chat Interfaces",
    description: "Get up and running with Melony in minutes. HTML-like components with progressive rendering.",
    url: "https://melony.dev/docs/quick-start",
  },
  twitter: {
    title: "Melony Quick Start Guide - Build AI Chat Interfaces",
    description: "Get up and running with Melony in minutes. HTML-like components with progressive rendering.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/quick-start",
  },
};

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Quick Start</h1>
        <p className="text-xl text-muted-foreground">
          Get up and running with Melony in minutes.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">1. Server-Side Setup</h2>
        <p className="text-muted-foreground mb-4">
          Import <code>MELONY_UI_GUIDE</code> and add it to your AI system prompt. This teaches the AI how to use Melony&apos;s HTML-like component syntax:
        </p>
        <CodeBlock language="tsx">
          {`// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { MELONY_UI_GUIDE } from "melony/server";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4"),
    system: MELONY_UI_GUIDE,
    messages,
  });

  return result.toDataStreamResponse();
}`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          That&apos;s it! The AI now knows how to use components like <code>&lt;card&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;chart&gt;</code>, and more.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">2. Client-Side Rendering</h2>
        <p className="text-muted-foreground mb-4">
          Wrap your app with <code>MelonyProvider</code> and use <code>MelonyMarkdown</code> to render AI messages:
        </p>
        <CodeBlock language="tsx">
          {`"use client";
import { MelonyProvider, MelonyMarkdown } from "melony";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <MelonyProvider>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            {message.role === "assistant" ? (
              <MelonyMarkdown>{message.content}</MelonyMarkdown>
            ) : (
              <p>{message.content}</p>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">3. What the AI Streams</h2>
        <p className="text-muted-foreground mb-4">
          The AI can now mix markdown text with HTML-like components naturally:
        </p>
        <CodeBlock language="markdown">
          {`Here's the current weather in San Francisco:

<card title="San Francisco Weather">
  <row gap="md" align="center">
    <text value="68°F" size="xl" weight="bold" />
    <badge label="Sunny" variant="primary" />
  </row>
  <text value="Perfect day for a walk!" color="muted" />
</card>

Would you like weather for another city?`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          As the AI streams the response, <code>MelonyMarkdown</code> progressively parses and renders both the markdown text and the component tags in real-time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">4. Adding Interactivity (Optional)</h2>
        <p className="text-muted-foreground mb-4">
          Handle button clicks and other actions with the <code>onAction</code> prop:
        </p>
        <CodeBlock language="tsx">
          {`const handleAction = (action: Action) => {
  if (action.type === "refresh-weather") {
    console.log("Refreshing weather for:", action.payload.location);
    // Trigger new API call, update state, etc.
  }
};

return (
  <MelonyProvider onAction={handleAction}>
    {/* ... your components ... */}
  </MelonyProvider>
);`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          The AI can add actions to buttons:
        </p>
        <CodeBlock language="markdown">
          {`<button 
  label="Refresh Weather" 
  variant="outline"
  action='{"type":"refresh-weather","location":"SF"}' 
/>`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
          <li>AI streams markdown text mixed with HTML-like component tags</li>
          <li>MelonyParser identifies complete component blocks as they arrive</li>
          <li>Components render instantly when their tags are complete</li>
          <li>Markdown text renders alongside components seamlessly</li>
        </ol>
        <p className="text-muted-foreground mt-4">
          No waiting. No tool calls. Just instant UI generation as the AI thinks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            <a href="/docs/complete-example" className="text-primary hover:underline">
              Complete Example
            </a>{" "}
            - See a full chat implementation with all features
          </p>
          <p>
            <a href="/docs/multiple-components" className="text-primary hover:underline">
              Available Components
            </a>{" "}
            - Explore all available component tags (card, button, chart, etc.)
          </p>
          <p>
            <a href="/docs/how-it-works" className="text-primary hover:underline">
              How It Works
            </a>{" "}
            - Understand the parser and rendering system
          </p>
        </div>
      </section>
    </div>
  );
}

