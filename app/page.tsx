import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Code,
  Zap,
  Github,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CodeBlock } from "@/components/ui/code-block";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Melony
              </span>
            </div>
            <div className="flex items-center space-x-8">
              <Link
                href="/docs"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 font-medium hover:scale-105"
              >
                Documentation
              </Link>
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-all duration-300 flex items-center space-x-2 font-medium hover:scale-105"
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
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
            ✨ Open Source React Toolkit
          </div>
          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            TypeScript‑first, headless React toolkit for building AI chat UIs
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground/90 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
            Build beautiful, streaming AI chat interfaces with fine-grained
            control. MelonyProvider manages state, hooks give you access to
            messages and status, and flexible parts system supports any message
            structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-muted/40 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              The Core Idea
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Everything you need to build modern streaming AI chat experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">
                  MelonyProvider
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
                  Manages streaming chat state and handles server communication.
                  The foundation that powers all melony functionality.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Hooks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
                  Fine-grained access to messages, parts, status, and sending.
                  Build custom UIs with complete control over the chat
                  experience.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">
                  Flexible Parts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground/90">
                  Supports any message structure with custom mappers.
                  TypeScript-first with full type safety and extensibility.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Key Features
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Everything you need for modern AI chat interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Streaming Support</h3>
              <p className="text-sm text-muted-foreground">
                Built-in support for streaming responses with automatic text
                delta handling
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">TypeScript First</h3>
              <p className="text-sm text-muted-foreground">
                Full type safety with custom message types and extensible part
                system
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Headless Design</h3>
              <p className="text-sm text-muted-foreground">
                Complete control over UI with flexible hooks and components
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ExternalLink className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Integration</h3>
              <p className="text-sm text-muted-foreground">
                Works seamlessly with AI SDK and other streaming libraries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              30‑second Quickstart
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground/90 max-w-3xl mx-auto font-medium leading-relaxed">
              Basic chat component with streaming support
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-3xl border border-border/50 p-8 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  App.tsx
                </div>
              </div>
              <CodeBlock language="tsx">
                {`"use client";
import {
  MelonyProvider,
  useMelonyMessages,
  useMelonySend,
  useMelonyStatus,
} from "melony";

function ChatMessages() {
  const messages = useMelonyMessages();
  const send = useMelonySend();
  const status = useMelonyStatus();

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.role}:</strong>
          {message.parts.map((part, i) => (
            <div key={i}>{part.type === "text" && part.text}</div>
          ))}
        </div>
      ))}
      <button onClick={() => send("Hello!")} disabled={status === "streaming"}>
        {status === "streaming" ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

export default function Chat() {
  return (
    <MelonyProvider endpoint="/api/chat">
      <ChatMessages />
    </MelonyProvider>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">
              Ready to Build Streaming
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                AI Chat Interfaces?
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Join developers using melony to create beautiful, streaming AI
              chat experiences with full TypeScript support and complete
              control.
            </p>
            <Button
              asChild
              size="lg"
              className="px-10 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/docs">
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-muted/30 to-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center shadow-md">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              Melony
            </span>
          </div>
          <p className="text-sm text-muted-foreground/80 font-medium">
            © 2025 Melony • Built with ❤️ for developers
          </p>
        </div>
      </footer>
    </div>
  );
}
