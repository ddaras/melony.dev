import Link from "next/link";
import { Github, Terminal, MessageSquare } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { Metadata } from "next";
import { QuickStartCommand } from "@/components/quick-start-command";

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
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex flex-col">
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
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Melony
              </span>
            </Link>
            <div className="flex items-center space-x-6">
              <a
                href="https://discord.gg/j2uF5n8vJK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-foreground transition-colors flex items-center space-x-1"
                aria-label="Join Melony on Discord (opens in new tab)"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Discord</span>
              </a>
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
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Melony
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The Event-Streaming AI Agent Runtime with Built-in SDUI.
          </p>

          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
              <Terminal className="w-4 h-4 mr-2" />
              Quick Start
            </div>
            <QuickStartCommand />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Link
              href="/docs/quick-start"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Documentation
            </Link> */}
            <a
              href="https://github.com/ddaras/melony"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
