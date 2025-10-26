import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Complete guide to building AI chat interfaces with Melony. Learn HTML-like syntax, progressive rendering, action handling, and advanced patterns with MelonyMarkdown.",
  openGraph: {
    title: "Melony Documentation - Build AI Chat Interfaces",
    description: "Complete guide to building AI chat interfaces with Melony. HTML-like components with zero-latency progressive rendering.",
    url: "https://melony.dev/docs",
  },
  twitter: {
    title: "Melony Documentation - Build AI Chat Interfaces",
    description: "Complete guide to building AI chat interfaces with Melony. HTML-like components with zero-latency progressive rendering.",
  },
  alternates: {
    canonical: "https://melony.dev/docs",
  },
};

export default function DocsPage() {
  return (
    <article className="space-y-8">
      <header>
        <h1 className="text-4xl mb-4 font-bold">Melony</h1>
        <p className="text-2xl text-muted-foreground mb-4">
          Generate React components from AI responses in real-time.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          AI streams HTML-like components alongside markdown. No tool calling. No waiting. 
          Just instant, progressive UIs as the AI thinks.
        </p>
      </header>

      <section id="why-melony">
        <h2 className="text-3xl font-bold mb-4">Why Melony?</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>
            ⚡ <strong>Zero Latency</strong> - Components render progressively
            as AI streams HTML-like tags
          </li>
          <li>
            📝 <strong>Mixed Content</strong> - Seamlessly combine markdown text
            with interactive components
          </li>
          <li>
            🎯 <strong>HTML-Like Syntax</strong> - Familiar &lt;card&gt;, &lt;button&gt;, &lt;chart&gt; tags
            that AI understands naturally
          </li>
          <li>
            🎨 <strong>Theme System</strong> - Customize colors, spacing, typography,
            and more across all components
          </li>
          <li>
            🔄 <strong>Action Handling</strong> - Built-in system for button clicks,
            form submissions, and interactions
          </li>
          <li>
            🔁 <strong>Control Flow</strong> - Dynamic lists with &lt;for&gt; component,
            context variables, and templates
          </li>
          <li>
            🧩 <strong>Widget Templates</strong> - Create reusable component templates
            for complex UIs
          </li>
        </ul>
      </section>

      <section id="next-steps">
        <h2 className="text-3xl font-bold mb-4">Get Started</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            href="/docs/installation"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">Installation</h3>
            <p className="text-sm text-muted-foreground">
              Install Melony and get started
            </p>
          </Link>
          <Link
            href="/docs/quick-start"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">Quick Start</h3>
            <p className="text-sm text-muted-foreground">
              Build your first chat UI with HTML-like components
            </p>
          </Link>
          <Link
            href="/docs/complete-example"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">Complete Example</h3>
            <p className="text-sm text-muted-foreground">
              Full chat app with MelonyProvider and actions
            </p>
          </Link>
          <Link
            href="/docs/how-it-works"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">How It Works</h3>
            <p className="text-sm text-muted-foreground">
              Understand the parsing and rendering system
            </p>
          </Link>
          <Link
            href="/docs/multiple-components"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">Multiple Components</h3>
            <p className="text-sm text-muted-foreground">
              Learn about all available component tags
            </p>
          </Link>
          <Link
            href="/docs/api/melony-card"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">API Reference</h3>
            <p className="text-sm text-muted-foreground">
              MelonyProvider, MelonyMarkdown, and more
            </p>
          </Link>
        </div>
      </section>

      <section id="links">
        <h2 className="text-3xl font-bold mb-4">Links</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/ddaras/melony"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/melony"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            NPM
          </a>
          <a
            href="https://github.com/ddaras/melony/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Report Issues
          </a>
        </div>
      </section>
    </article>
  );
}
