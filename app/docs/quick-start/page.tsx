import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Get up and running with Melony in minutes. Learn how to create Zod schemas, setup server-side streaming, and render React components progressively from AI responses.",
  openGraph: {
    title: "Melony Quick Start Guide - Build AI Chat Interfaces",
    description: "Get up and running with Melony in minutes. Progressive rendering with TypeScript support.",
    url: "https://melony.dev/docs/quick-start",
  },
  twitter: {
    title: "Melony Quick Start Guide - Build AI Chat Interfaces",
    description: "Get up and running with Melony in minutes. Progressive rendering with TypeScript support.",
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
        <h2 className="text-2xl font-bold mb-4">1. Define Your Schema</h2>
        <p className="text-muted-foreground mb-4">
          Start by creating a Zod schema for your component and generating the AI prompt:
        </p>
        <CodeBlock language="tsx">
          {`import { z } from "zod";
import { zodSchemaToPrompt } from "melony/zod";

const weatherSchema = z.object({
  type: z.literal("weather-card"),
  location: z.string(),
  temperature: z.number(),
  condition: z.string(),
});

const weatherUIPrompt = zodSchemaToPrompt({
  type: "weather-card",
  schema: weatherSchema,
  description: "Display current weather information",
});

// Create your component with type safety
type WeatherCardProps = z.infer<typeof weatherSchema>;

export const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  temperature,
  condition,
}) => (
  <div className="p-4 border rounded-lg">
    <h3 className="font-bold">{location}</h3>
    <p>{temperature}°F - {condition}</p>
  </div>
);`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">2. Server-Side Setup</h2>
        <p className="text-muted-foreground mb-4">
          Inject the generated prompt into your AI system message:
        </p>
        <CodeBlock language="tsx">
          {`// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { weatherUIPrompt } from "@/components/weather";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4"),
    system: \`You are a helpful assistant. \${weatherUIPrompt}\`,
    messages,
  });

  return result.toDataStreamResponse();
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">3. Client-Side Rendering</h2>
        <p className="text-muted-foreground mb-4">
          Use <code>MelonyCard</code> to render streaming components:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyCard } from "melony";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages } = useChat({ api: "/api/chat" });

  return messages.map((message) => (
    <MelonyCard
      key={message.id}
      text={message.content}
      components={{ "weather-card": WeatherCard }}
    />
  ));
}`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          As the AI streams <code>{'{"type": "weather-card", "temperature": 72...'}</code>, your component renders immediately—even before the JSON is complete.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
          <li>AI streams response containing JSON</li>
          <li>MelonyCard parses partial JSON in real-time</li>
          <li>Components render progressively as JSON becomes valid</li>
          <li>Remaining text renders as markdown</li>
        </ol>
        <p className="text-muted-foreground mt-4">
          No waiting. No tool calls. Just instant UI generation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p className="text-muted-foreground">
          Ready for a complete implementation? Check out the{" "}
          <a href="/docs/complete-example" className="text-primary hover:underline">
            Complete Example
          </a>{" "}
          guide.
        </p>
      </section>
    </div>
  );
}

