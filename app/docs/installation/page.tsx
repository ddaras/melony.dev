import { CodeBlock } from "@/components/ui/code-block";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-xl text-muted-foreground">
          Get started with melony in your React project.
        </p>
      </div>

      <section id="install">
        <h2 className="text-3xl font-bold mb-4">Install</h2>
        <p className="text-muted-foreground mb-6">
          Install melony using your preferred package manager:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Using pnpm (recommended)</h3>
            <CodeBlock language="bash">pnpm add melony</CodeBlock>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Using npm</h3>
            <CodeBlock language="bash">npm install melony</CodeBlock>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Using yarn</h3>
            <CodeBlock language="bash">yarn add melony</CodeBlock>
          </div>
        </div>
      </section>

      <section id="requirements">
        <h2 className="text-3xl font-bold mb-4">Requirements</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">React &gt;= 18</h3>
            <p className="text-muted-foreground">
              melony requires React 18 or higher for optimal performance and features.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Server Route</h3>
            <p className="text-muted-foreground">
              A server route that returns <code className="bg-muted px-1 py-0.5 rounded text-sm">text/event-stream</code> for streaming responses.
            </p>
          </div>
        </div>
      </section>

      <section id="typescript">
        <h2 className="text-3xl font-bold mb-4">TypeScript Support</h2>
        <p className="text-muted-foreground mb-6">
          melony is built with TypeScript and provides full type safety out of the box. 
          No additional type definitions needed.
        </p>
        
        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> While melony works with JavaScript, we highly recommend using TypeScript 
            to get the full benefits of type safety and better developer experience.
          </p>
        </div>
      </section>

      <section id="next-steps">
        <h2 className="text-3xl font-bold mb-4">Next Steps</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">1. Quickstart</h3>
            <p className="text-muted-foreground mb-3">
              Follow our quickstart guide to build your first chat interface.
            </p>
            <a 
              href="/docs/quickstart" 
              className="text-primary hover:underline"
            >
              Go to Quickstart →
            </a>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">2. Server Setup</h3>
            <p className="text-muted-foreground mb-3">
              Learn how to set up your server endpoint for streaming responses.
            </p>
            <a 
              href="/docs/server-integration" 
              className="text-primary hover:underline"
            >
              Go to Server Integration →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
