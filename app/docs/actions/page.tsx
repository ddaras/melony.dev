import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actions & Events",
  description: "Learn how to handle user interactions with Melony's action system. Handle button clicks, form submissions, and custom events in your AI-generated UIs.",
  openGraph: {
    title: "Actions & Events - Melony Documentation",
    description: "Handle user interactions with Melony's action system. Button clicks, forms, and custom events.",
    url: "https://melony.dev/docs/actions",
  },
  twitter: {
    title: "Actions & Events - Melony Documentation",
    description: "Handle user interactions with Melony's action system. Button clicks, forms, and custom events.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/actions",
  },
};

export default function ActionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Actions & Events</h1>
        <p className="text-xl text-muted-foreground">
          Handle user interactions in AI-generated components with Melony&apos;s built-in action system.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          Melony provides a simple action system that lets you handle button clicks, form submissions, 
          and other user interactions from AI-generated components. Actions are passed as JSON strings 
          and dispatched through the <code>onAction</code> prop.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Setting Up Action Handler</h2>
        <p className="text-muted-foreground mb-4">
          Define an action handler function and pass it to <code>MelonyProvider</code>:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyProvider, type Action } from "melony";

function Chat() {
  const handleAction = (action: Action) => {
    console.log("Action received:", action);

    // Handle different action types
    switch (action.type) {
      case "refresh-weather":
        handleWeatherRefresh(action.payload);
        break;
      case "submit-form":
        handleFormSubmit(action.payload);
        break;
      default:
        console.log("Unknown action type:", action.type);
    }
  };

  return (
    <MelonyProvider onAction={handleAction}>
      {/* Your components */}
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Button Actions</h2>
        <p className="text-muted-foreground mb-4">
          The AI can attach actions to buttons using the <code>action</code> prop:
        </p>
        <CodeBlock language="markdown">
          {`<button 
  label="Refresh Weather" 
  variant="primary"
  action='{"type":"refresh-weather","location":"SF"}' 
/>

<button 
  label="Delete Item" 
  variant="destructive"
  action='{"type":"delete-item","id":"123"}' 
/>`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          When clicked, these buttons will trigger your <code>onAction</code> handler with the specified payload.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Action Type</h2>
        <p className="text-muted-foreground mb-4">
          Actions follow this TypeScript interface:
        </p>
        <CodeBlock language="tsx">
          {`interface Action {
  type: string;           // Action identifier
  payload?: any;          // Optional action data
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Real-World Example</h2>
        <p className="text-muted-foreground mb-4">
          Here&apos;s a complete example with multiple action types:
        </p>
        <CodeBlock language="tsx">
          {`"use client";
import { MelonyProvider, MelonyMarkdown } from "melony";
import { useChat } from "ai/react";
import { useState } from "react";

export default function Chat() {
  const { messages, append } = useChat({ api: "/api/chat" });
  const [loading, setLoading] = useState(false);

  const handleAction = async (action) => {
    switch (action.type) {
      case "refresh-weather":
        setLoading(true);
        await append({
          role: "user",
          content: \`Get weather for \${action.payload.location}\`,
        });
        setLoading(false);
        break;

      case "send-email":
        // Handle email sending
        console.log("Sending email to:", action.payload.to);
        break;

      case "navigate":
        // Handle navigation
        window.location.href = action.payload.url;
        break;

      default:
        console.log("Unknown action:", action);
    }
  };

  return (
    <MelonyProvider onAction={handleAction}>
      <div className="space-y-4">
        {messages.map((m) => (
          <MelonyMarkdown key={m.id}>{m.content}</MelonyMarkdown>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </MelonyProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>
            <strong>Type Safety:</strong> Use TypeScript unions for action types to ensure type safety
          </li>
          <li>
            <strong>Validation:</strong> Always validate action payloads before processing
          </li>
          <li>
            <strong>Error Handling:</strong> Wrap action handlers in try-catch blocks
          </li>
          <li>
            <strong>Loading States:</strong> Show loading indicators during async operations
          </li>
          <li>
            <strong>Feedback:</strong> Provide user feedback after action completion
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">TypeScript Example</h2>
        <p className="text-muted-foreground mb-4">
          Define action types for better type safety:
        </p>
        <CodeBlock language="tsx">
          {`type WeatherAction = {
  type: "refresh-weather";
  payload: { location: string };
};

type EmailAction = {
  type: "send-email";
  payload: { to: string; subject: string };
};

type AppAction = WeatherAction | EmailAction;

const handleAction = (action: AppAction) => {
  switch (action.type) {
    case "refresh-weather":
      // TypeScript knows payload has { location: string }
      console.log(action.payload.location);
      break;
    case "send-email":
      // TypeScript knows payload has { to: string; subject: string }
      console.log(action.payload.to);
      break;
  }
};`}
        </CodeBlock>
      </section>
    </div>
  );
}

