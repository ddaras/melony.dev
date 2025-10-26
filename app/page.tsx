import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melony - Generate React Components from AI Responses in Real-Time",
  description:
    "Build beautiful AI chat interfaces with HTML-like components that render progressively. Melony lets AI stream markdown and interactive components with zero tool-calling latency.",
  openGraph: {
    title: "Melony - Generate React Components from AI Responses",
    description:
      "Build beautiful AI chat interfaces with HTML-like components that render progressively. Zero tool-calling latency, instant UIs.",
    url: "https://melony.dev",
  },
  twitter: {
    title: "Melony - Generate React Components from AI Responses",
    description:
      "Build beautiful AI chat interfaces with HTML-like components that render progressively. Zero tool-calling latency, instant UIs.",
  },
  alternates: {
    canonical: "https://melony.dev",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Navigation */}
      <nav
        className="border-b border-border/20 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold"
              aria-label="Melony - Home"
            >
              Melony
            </Link>
            <div className="flex items-center space-x-6">
              <Link
                href="/docs"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Docs
              </Link>
              <Link
                href="/blog"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="https://generative-ui-playground.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                Playground
              </Link>
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors flex items-center space-x-1"
                aria-label="View Melony on GitHub (opens in new tab)"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mx-auto text-center">
            <Zap className="w-4 h-4 mr-2" />
            Zero Latency • Progressive Rendering
          </div> */}

            {/* Horizontal Layout: Taglines | Screen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Taglines */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                  Generate React Components
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    from AI Responses
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10">
                  AI streams HTML-like components alongside markdown—no waiting, no tool calling, instant UIs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                  <Button asChild size="lg">
                    <Link href="/docs">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://generative-ui-playground.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Playground
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side: Demo Screenshot */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group max-w-2xl w-full">
                  <div className="absolute bg-gradient-to-r from-primary/20 to-primary/40 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-background border border-border/50 rounded-2xl">
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        melony.dev
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-b-lg">
                      <video
                        src="/weather-card-720p.mov"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto transition-transform duration-300"
                        aria-label="Melony chart component demo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="features-heading"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2
              id="features-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose Melony?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build AI interfaces that feel instant and native with HTML-like syntax, progressive rendering, and mixed markdown content.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Latency</h3>
              <p className="text-muted-foreground">
                Render components progressively as AI streams HTML-like tags—no tool calling, no waiting.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mixed Content</h3>
              <p className="text-muted-foreground">
                Seamlessly combine markdown text with interactive components in a single stream.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">HTML-Like Syntax</h3>
              <p className="text-muted-foreground">
                AI uses familiar HTML-like tags like &lt;card&gt;, &lt;button&gt;, &lt;chart&gt; to build UIs naturally.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Action Handling</h3>
              <p className="text-muted-foreground">
                Built-in action system for buttons and forms—handle user interactions effortlessly.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Themeable</h3>
              <p className="text-muted-foreground">
                Customize colors, spacing, typography, and more with the built-in theme system.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Control Flow</h3>
              <p className="text-muted-foreground">
                Dynamic lists with &lt;for&gt; component, context variables, and template rendering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        aria-labelledby="code-example-heading"
      >
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-10">
            <h2 id="code-example-heading" className="text-3xl font-bold mb-4">
              Simple & Powerful
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Add the UI guide to your system prompt, stream from the server, and render instantly with MelonyMarkdown.
            </p>
          </header>

          <div className="space-y-8">
            {/* Step 1: What AI Streams */}
            <div className="bg-background border rounded-2xl p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">1. What AI Streams</h3>
                <p className="text-sm text-muted-foreground">
                  AI streams markdown with HTML-like component tags
                </p>
              </div>
              <CodeBlock language="markdown">
                {`Here's the weather in San Francisco:

<card title="San Francisco Weather">
  <row gap="md" align="center">
    <text value="68°F" size="xl" weight="bold" />
    <badge label="Sunny" variant="primary" />
  </row>
  <button 
    label="Refresh" 
    variant="outline" 
    action='{"type":"refresh-weather","location":"SF"}' 
  />
</card>

It's a beautiful day!`}
              </CodeBlock>
            </div>

            {/* Step 2: Server-Side */}
            <div className="bg-background border rounded-2xl p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  2. Stream from Server
                </h3>
                <p className="text-sm text-muted-foreground">
                  Add MELONY_UI_GUIDE to your system prompt
                </p>
              </div>
              <CodeBlock language="tsx">
                {`// app/api/chat/route.ts
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
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
            </div>

            {/* Step 3: Client-Side */}
            <div className="bg-background border rounded-2xl p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">
                  3. Render Instantly
                </h3>
                <p className="text-sm text-muted-foreground">
                  Use MelonyProvider and MelonyMarkdown
                </p>
              </div>
              <CodeBlock language="tsx">
                {`"use client";
import { MelonyProvider, MelonyMarkdown } from "melony";
import { useChat } from "ai/react";

export default function Chat() {
  const { messages } = useChat({ api: "/api/chat" });

  const handleAction = (action) => {
    if (action.type === "refresh-weather") {
      // Handle the refresh action
      console.log("Refreshing weather for:", action.payload.location);
    }
  };

  return (
    <MelonyProvider onAction={handleAction}>
      {messages.map(m => (
        <MelonyMarkdown key={m.id}>{m.content}</MelonyMarkdown>
      ))}
    </MelonyProvider>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build real-time AI UIs?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            HTML-like syntax, progressive rendering, and instant UIs. Start building AI interfaces that feel native.
          </p>
          <Button asChild size="lg">
            <Link href="/docs" aria-label="Read the Melony documentation">
              Read the Documentation
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span className="font-bold text-lg text-foreground">Melony</span>
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
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </div>
          <span>MIT License © 2025</span>
        </div>
      </footer>
    </div>
  );
}
