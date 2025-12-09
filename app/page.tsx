import Link from "next/link";
import { ArrowRight, Github, Layers, Cpu, Bot, Globe, Code2, Zap, Shield, UserCheck, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Melony - TypeScript Framework for AI Apps",
  description:
    "The complete TypeScript framework for building production-grade AI applications. Features a runtime engine, agent patterns, server-driven UI, and full React integration.",
  openGraph: {
    title: "Melony - TypeScript Framework for AI Apps",
    description:
      "The complete TypeScript framework for building production-grade AI applications. Runtime engine, agents, and UI.",
    url: "https://melony.dev",
  },
  twitter: {
    title: "Melony - TypeScript Framework for AI Apps",
    description:
      "The complete TypeScript framework for building production-grade AI applications. Runtime engine, agents, and UI.",
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
              className="text-2xl font-bold flex items-center gap-2"
              aria-label="Melony - Home"
            >
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Melony</span>
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
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              v0.0.2-alpha.2 is now available
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              The TypeScript Framework
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                for AI Applications
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Build production-grade AI apps with a complete toolkit: Runtime Engine, Agent Patterns, Server-Driven UI, and full React integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-12 px-8 text-base">
                <a
                  href="https://github.com/ddaras/melony"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </div>

            {/* Architecture Visual */}
            <div className="relative max-w-7xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl -z-10" />
              <div className="border border-border/50 bg-background/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-center text-sm font-medium">
                  <div className="p-4 rounded-xl bg-card border shadow-sm flex flex-col items-center gap-2">
                    <Layers className="w-6 h-6 text-primary" />
                    <span>Core</span>
                  </div>

                  <div className="p-4 rounded-xl bg-card border shadow-sm flex flex-col items-center gap-2">
                    <Cpu className="w-6 h-6 text-primary" />
                    <span>Runtime</span>
                  </div>

                  <div className="p-4 rounded-xl bg-card border shadow-sm flex flex-col items-center gap-2">
                    <Bot className="w-6 h-6 text-primary" />
                    <span>Agents</span>
                  </div>

                  <div className="p-4 rounded-xl bg-card border shadow-sm flex flex-col items-center gap-2">
                    <Globe className="w-6 h-6 text-primary" />
                    <span>Client</span>
                  </div>
                  <div className="p-4 rounded-xl bg-card border shadow-sm flex flex-col items-center gap-2">
                    <Code2 className="w-6 h-6 text-primary" />
                    <span>React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Modular Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Melony is organized as a monorepo with focused packages that work together seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-2xl border hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">@melony/core</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Core types, utilities, event definitions, and protocol specifications.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">npm install @melony/core</code>
            </div>

            <div className="bg-background p-6 rounded-2xl border hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">@melony/runtime</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Action execution engine, async generators, and approval flow management.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">npm install @melony/runtime</code>
            </div>

            <div className="bg-background p-6 rounded-2xl border hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">@melony/agents</h3>
              <p className="text-sm text-muted-foreground mb-4">
                High-level agent abstractions, brain patterns, and HTTP handlers.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">npm install @melony/agents</code>
            </div>

            <div className="bg-background p-6 rounded-2xl border hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">@melony/client</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Framework-agnostic client for connecting to Melony runtimes.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">npm install @melony/client</code>
            </div>

            <div className="bg-background p-6 rounded-2xl border hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">@melony/react</h3>
              <p className="text-sm text-muted-foreground mb-4">
                React components, hooks, and Server-Driven UI renderer.
              </p>
              <code className="text-xs bg-muted px-2 py-1 rounded">npm install @melony/react</code>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A complete toolkit for building the next generation of AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold">Runtime Engine</h3>
              <p className="text-sm text-muted-foreground">Execute actions as async generators with automatic chaining.</p>
            </div>
            <div className="space-y-2">
              <Bot className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold">Agent Pattern</h3>
              <p className="text-sm text-muted-foreground">High-level agent abstraction with brain pattern and HTTP handlers.</p>
            </div>
            <div className="space-y-2">
              <LayoutTemplate className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold">Server-Driven UI</h3>
              <p className="text-sm text-muted-foreground">Render UI components directly from server events.</p>
            </div>
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold">Type Safe</h3>
              <p className="text-sm text-muted-foreground">Full TypeScript support with Zod validation for all actions.</p>
            </div>
            <div className="space-y-2">
              <Globe className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold">Framework Agnostic</h3>
              <p className="text-sm text-muted-foreground">Core packages work with any JavaScript framework.</p>
            </div>
            <div className="space-y-2">
              <UserCheck className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold">Human-in-the-Loop</h3>
              <p className="text-sm text-muted-foreground">Built-in approval flows for actions requiring confirmation.</p>
            </div>
            <div className="space-y-2">
              <Code2 className="w-8 h-8 text-primary mb-2" />
              <h3 className="font-bold">React Integration</h3>
              <p className="text-sm text-muted-foreground">Ready-to-use React components and hooks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Quick Start</h2>

          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">1</span>
                Install Packages
              </h3>
              <CodeBlock language="bash">
                npm install @melony/react @melony/runtime @melony/agents @melony/client
              </CodeBlock>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">2</span>
                Define Actions
              </h3>
              <CodeBlock language="typescript">
                {`// lib/actions.ts
import { defineAction } from "@melony/runtime";
import z from "zod";

export const getWeather = defineAction({
  name: "getWeather",
  paramsSchema: z.object({ city: z.string() }),
  execute: async function* (params) {
    const weather = await fetch(\`/api/weather?city=\${params.city}\`);
    const data = await weather.json();
    yield {
      type: "text",
      data: { content: \`Weather in \${params.city}: \${data.temp}°F\` },
    };
  },
});`}
              </CodeBlock>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">3</span>
                Create Agent
              </h3>
              <CodeBlock language="typescript">
                {`// app/api/chat/route.ts
import { defineAgent, createAgentHandler } from "@melony/agents";
import { getWeather } from "@/lib/actions";
import { agentBrain } from "@/lib/agent-brain";

const agent = defineAgent({
  name: "Assistant",
  actions: { getWeather },
  brain: agentBrain,
});

export const POST = createAgentHandler(agent);`}
              </CodeBlock>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">4</span>
                Use in React
              </h3>
              <CodeBlock language="tsx">
                {`// app/page.tsx
"use client";
import { MelonyStoreProvider, Chat } from "@melony/react";

export default function Home() {
  return (
    <MelonyStoreProvider api="/api/chat">
      <Chat />
    </MelonyStoreProvider>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build intelligent apps?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the community of developers building the next generation of AI applications with Melony.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/docs">
                Read the Documentation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 w-4 h-4" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-foreground">Melony</span>
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">v0.0.2-alpha.2</span>
          </div>
          <div className="flex items-center gap-8">
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
