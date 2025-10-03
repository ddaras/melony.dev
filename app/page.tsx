import Link from "next/link";
import { ArrowRight, Zap, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CodeBlock } from "@/components/ui/code-block";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-semibold">
              Melony
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/docs"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Zero Latency • Progressive Rendering
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Stream React Components
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              from AI Responses
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Render UIs progressively as AI generates JSON—no waiting, no tool
            calling latency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg">
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </div>
          <code className="px-4 py-2 bg-muted rounded-lg text-sm font-mono inline-block">
            pnpm add melony zod
          </code>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Simple & Powerful</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Define schemas with Zod, stream from the server, and render
              instantly on the client.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1: Define Schema */}
            <div className="bg-background border rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">1. Define Schema</h3>
                <p className="text-sm text-muted-foreground">
                  Type-safe components with Zod
                </p>
              </div>
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
  description: "Display weather info",
});
 

export const WeatherCard: React.FC<z.infer<typeof weatherSchema>> = ({
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
            </div>

            {/* Step 2: Server-Side */}
            <div className="bg-background border rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  2. Stream from Server
                </h3>
                <p className="text-sm text-muted-foreground">
                  Inject schema into AI system prompt
                </p>
              </div>
              <CodeBlock language="tsx">
                {`// app/api/chat/route.ts
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { weatherUIPrompt } from "@/components/weather";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4"),
    system: \`Assistant. \${weatherUIPrompt}\`,
    messages,
  });

  return result.toDataStreamResponse();
}`}
              </CodeBlock>
            </div>

            {/* Step 3: Client-Side */}
            <div className="bg-background border rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  3. Render Instantly
                </h3>
                <p className="text-sm text-muted-foreground">
                  Progressive rendering as JSON streams
                </p>
              </div>
              <CodeBlock language="tsx">
                {`import { MelonyCard } from "melony";
import { useChat } from "ai/react";

function Chat() {
  const { messages } = useChat();

  return messages.map(m => (
    <MelonyCard
      text={m.content}
      components={{
        "weather-card": WeatherCard
      }}
    />
  ));
}`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build real-time AI UIs?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Type-safe, progressive, and instant. Start building AI interfaces
            that feel native.
          </p>
          <Button asChild size="lg">
            <Link href="/docs">
              Read the Documentation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Melony</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ddaras/melony"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/melony"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              NPM
            </a>
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
          </div>
          <span>MIT License © 2025</span>
        </div>
      </footer>
    </div>
  );
}
