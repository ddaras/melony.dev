import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
  description: "Install Melony and its peer dependencies to get started building AI chat interfaces. Available via npm, yarn, and pnpm with TypeScript support.",
  openGraph: {
    title: "Melony Installation Guide - React AI Chat Toolkit",
    description: "Install Melony and its peer dependencies to get started building AI chat interfaces with progressive rendering.",
    url: "https://melony.dev/docs/installation",
  },
  twitter: {
    title: "Melony Installation Guide - React AI Chat Toolkit",
    description: "Install Melony and its peer dependencies to get started building AI chat interfaces with progressive rendering.",
  },
  alternates: {
    canonical: "https://melony.dev/docs/installation",
  },
};

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-xl text-muted-foreground">
          Install Melony and its peer dependencies to get started.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Install via npm</h2>
        <CodeBlock language="bash">
          {`npm install melony zod`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Install via yarn</h2>
        <CodeBlock language="bash">
          {`yarn add melony zod`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Install via pnpm</h2>
        <CodeBlock language="bash">
          {`pnpm add melony zod`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Dependencies</h2>
        <p className="text-muted-foreground mb-4">
          Melony requires <code>zod</code> as a peer dependency for schema validation and type safety.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p className="text-muted-foreground">
          After installation, check out the{" "}
          <a href="/docs/quick-start" className="text-primary hover:underline">
            Quick Start guide
          </a>{" "}
          to build your first streaming UI.
        </p>
      </section>
    </div>
  );
}

