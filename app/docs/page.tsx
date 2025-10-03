import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl mb-4">Melony</h1>
        <p className="text-2xl text-muted-foreground mb-4">
          Generate React UIs from AI responses in real-time.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          No tool calling latency. No completion waiting. Just smooth,
          progressive rendering as the AI thinks.
        </p>
      </div>

      <section id="why-melony">
        <h2 className="text-3xl font-bold mb-4">Why Melony?</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>
            ⚡ <strong>Zero Latency</strong> - Components render progressively
            during streaming
          </li>
          <li>
            🎯 <strong>Smart Parsing</strong> - Handles incomplete JSON with
            partial-json
          </li>
          <li>
            🛡️ <strong>Type Safe</strong> - Full Zod schema integration
          </li>
          <li>
            📝 <strong>Markdown Support</strong> - Built-in GFM rendering
          </li>
          <li>
            🪶 <strong>Lightweight</strong> - Minimal dependencies
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
              Build your first streaming UI in minutes
            </p>
          </Link>
          <Link
            href="/docs/complete-example"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">Complete Example</h3>
            <p className="text-sm text-muted-foreground">
              End-to-end implementation guide
            </p>
          </Link>
          <Link
            href="/docs/api/melony-card"
            className="p-6 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2 text-lg">API Reference</h3>
            <p className="text-sm text-muted-foreground">
              Explore the complete API
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
    </div>
  );
}
