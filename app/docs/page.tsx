import Link from "next/link";
import type { Metadata } from "next";
import { Layers, Cpu, Bot, Globe, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Introduction",
  description: "Melony is a complete TypeScript framework for building production-grade AI applications.",
};

export default function DocsPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-4xl mb-4 font-bold">Introduction</h1>
        <p className="text-2xl text-muted-foreground mb-4">
          The TypeScript Framework for AI Applications
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Melony is a comprehensive toolkit for building production-grade AI applications.
          It provides a runtime engine, agent abstractions, and a server-driven UI system
          that works seamlessly with React.
        </p>
      </header>

      <section id="architecture">
        <h2 className="text-3xl font-bold mb-6">Architecture</h2>
        <p className="text-muted-foreground mb-6">
          Melony is designed as a modular framework composed of 5 core packages that can be used together or independently.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/docs/packages/core" className="block group">
            <div className="p-6 border rounded-xl hover:border-primary/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">@melony/core</h3>
              </div>
              <p className="text-muted-foreground">
                The foundation of the framework. Contains shared types, event definitions, and the protocol specification.
              </p>
            </div>
          </Link>

          <Link href="/docs/packages/runtime" className="block group">
            <div className="p-6 border rounded-xl hover:border-primary/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">@melony/runtime</h3>
              </div>
              <p className="text-muted-foreground">
                The execution engine. Handles action definitions, async generators, and human-in-the-loop approval flows.
              </p>
            </div>
          </Link>

          <Link href="/docs/packages/agents" className="block group">
            <div className="p-6 border rounded-xl hover:border-primary/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">@melony/agents</h3>
              </div>
              <p className="text-muted-foreground">
                High-level abstractions. Implements the "Brain" pattern and provides standard HTTP handlers for your API routes.
              </p>
            </div>
          </Link>

          <Link href="/docs/packages/client" className="block group">
            <div className="p-6 border rounded-xl hover:border-primary/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">@melony/client</h3>
              </div>
              <p className="text-muted-foreground">
                Framework-agnostic client. Connects to your Melony runtime from any JavaScript environment.
              </p>
            </div>
          </Link>

          <Link href="/docs/packages/react" className="block group md:col-span-2">
            <div className="p-6 border rounded-xl hover:border-primary/50 transition-colors h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">@melony/react</h3>
              </div>
              <p className="text-muted-foreground">
                React integration. Provides the `MelonyProvider`, hooks, and the Server-Driven UI renderer for instant interfaces.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section id="getting-started">
        <h2 className="text-3xl font-bold mb-4">Getting Started</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/docs/quick-start"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">Quick Start</h3>
            <p className="text-sm text-muted-foreground">
              Build your first AI application in minutes
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
