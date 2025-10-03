import { CodeBlock } from "@/components/ui/code-block";

export default function CompleteExamplePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Complete Example</h1>
        <p className="text-xl text-muted-foreground">
          A full end-to-end implementation guide for building streaming UIs with Melony.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">1. Define Schema & Generate Prompt</h2>
        <p className="text-muted-foreground mb-4">
          First, create a Zod schema for your component and generate the AI prompt:
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
  examples: [
    {
      type: "weather-card",
      location: "New York, NY",
      temperature: 72,
      condition: "Partly Cloudy",
    },
  ],
});`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">2. Create Component</h2>
        <p className="text-muted-foreground mb-4">
          Build your React component using the inferred TypeScript types:
        </p>
        <CodeBlock language="tsx">
          {`type WeatherCardProps = z.infer<typeof weatherSchema>;

export const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  temperature,
  condition,
}) => (
  <Card>
    <h3>{location}</h3>
    <p>
      {temperature}°F - {condition}
    </p>
  </Card>
);`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">3. Server-Side Prompt Injection</h2>
        <p className="text-muted-foreground mb-4">
          Inject the generated prompt into your AI system message:
        </p>
        <CodeBlock language="tsx">
          {`// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { weatherUIPrompt } from "@components/weather"

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4"),
    system: \`You are a helpful assistant. \${weatherUIPrompt}\`, // Inject generated prompt here
    messages,
  });

  return result.toDataStreamResponse();
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">4. Client-Side Rendering</h2>
        <p className="text-muted-foreground mb-4">
          Use <code>MelonyCard</code> to render streaming components:
        </p>
        <CodeBlock language="tsx">
          {`import { useChat } from "ai/react";

function Chat() {
  const { messages } = useChat({
    api: "/api/chat",
  });

  return messages.map((message) =>
    message.parts.map((part) =>
      part.type === "text" ? (
        <MelonyCard
          key={part.id}
          text={part.content}
          components={{ "weather-card": WeatherCard }}
        />
      ) : null
    )
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">That&apos;s It!</h2>
        <p className="text-muted-foreground">
          Your weather card will now render progressively as the AI streams its response. No tool calls, no waiting—just instant UI generation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn how to work with{" "}
          <a href="/docs/multiple-components" className="text-primary hover:underline">
            Multiple Components
          </a>{" "}
          or explore the{" "}
          <a href="/docs/api/melony-card" className="text-primary hover:underline">
            API Reference
          </a>.
        </p>
      </section>
    </div>
  );
}

