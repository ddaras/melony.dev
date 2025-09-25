import { CodeBlock } from "@/components/ui/code-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StarterTemplate } from "@/components/starter-template";
import { Github, ExternalLink, Terminal, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function StarterTemplatePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Starter Template</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Jumpstart your AI chat application with our Next.js starter template that includes everything you need to get started.
        </p>
        <div className="flex items-center gap-2 mb-8">
          <Badge variant="secondary">Next.js 15</Badge>
          <Badge variant="secondary">AI SDK</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
        </div>
      </div>

      <StarterTemplate variant="docs" />

      <section id="whats-included">
        <h2 className="text-3xl font-bold mb-6">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span>Project Setup</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Next.js 15 with App Router</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">TypeScript configuration</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Tailwind CSS for styling</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">ESLint and Prettier setup</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-primary" />
                <span>AI Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">AI SDK with streaming support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Melony provider and hooks</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Example chat interface</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm">Environment configuration</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="getting-started">
        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">1. Clone the repository</h3>
            <p className="text-muted-foreground mb-4">
              Clone the starter template repository to get a new project with all the necessary dependencies and configuration.
            </p>
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6 shadow-xl">
              <CodeBlock language="bash">
                {`git clone https://github.com/ddaras/melony-next-ai-sdk-starter.git my-chat-app`}
              </CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">2. Navigate to your project</h3>
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6 shadow-xl">
              <CodeBlock language="bash">
                {`cd my-chat-app`}
              </CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">3. Install dependencies</h3>
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6 shadow-xl">
              <CodeBlock language="bash">
                {`npm install
# or
yarn install
# or
pnpm install`}
              </CodeBlock>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">4. Set up environment variables</h3>
            <p className="text-muted-foreground mb-4">
              Copy the example environment file and add your API keys.
            </p>
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6 shadow-xl">
              <CodeBlock language="bash">
                {`cp .env.example .env.local`}
              </CodeBlock>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Then edit <code className="bg-muted px-1 py-0.5 rounded">.env.local</code> and add your API keys.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">5. Start the development server</h3>
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6 shadow-xl">
              <CodeBlock language="bash">
                {`npm run dev
# or
yarn dev
# or
pnpm dev`}
              </CodeBlock>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Open <a href="http://localhost:3000" className="text-primary hover:underline">http://localhost:3000</a> to see your application.
            </p>
          </div>
        </div>
      </section>

      <section id="project-structure">
        <h2 className="text-3xl font-bold mb-6">Project Structure</h2>
        <div className="bg-gradient-to-br from-background to-muted/30 rounded-2xl border border-border/50 p-6 shadow-xl">
          <CodeBlock language="text">
            {`my-chat-app/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # AI API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── chat/
│   │   ├── chat-messages.tsx     # Message display component
│   │   ├── chat-input.tsx        # Input component
│   │   └── chat-interface.tsx    # Main chat interface
│   └── ui/                       # Reusable UI components
├── lib/
│   └── utils.ts                  # Utility functions
├── .env.example                  # Environment variables template
├── .env.local                    # Your environment variables
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration`}
          </CodeBlock>
        </div>
      </section>

      <section id="customization">
        <h2 className="text-3xl font-bold mb-6">Customization</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Styling</h3>
            <p className="text-muted-foreground mb-4">
              The template uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in the components or updating the Tailwind configuration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">AI Provider</h3>
            <p className="text-muted-foreground mb-4">
              The template is configured to work with the AI SDK. You can easily switch between different AI providers by updating the API route and configuration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Message Types</h3>
            <p className="text-muted-foreground mb-4">
              The template includes basic text message support. You can extend it to support images, files, or other content types by modifying the message structure and components.
            </p>
          </div>
        </div>
      </section>

      <section id="next-steps">
        <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link 
            href="/docs/quickstart" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Quickstart Guide</h3>
            <p className="text-sm text-muted-foreground">Learn the basics of using melony in your project</p>
          </Link>
          <Link 
            href="/docs/server-integration" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Server Integration</h3>
            <p className="text-sm text-muted-foreground">Connect to your AI backend</p>
          </Link>
          <Link 
            href="/docs/text-deltas" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Text Delta Handling</h3>
            <p className="text-sm text-muted-foreground">Learn about streaming text updates</p>
          </Link>
          <Link 
            href="/docs/advanced-usage" 
            className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold mb-2">Advanced Usage</h3>
            <p className="text-sm text-muted-foreground">Explore advanced features and patterns</p>
          </Link>
        </div>
      </section>

      <section id="support">
        <h2 className="text-3xl font-bold mb-6">Support</h2>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6">
          <h3 className="text-xl font-semibold mb-3">Need Help?</h3>
          <p className="text-muted-foreground mb-4">
            If you run into any issues with the starter template or need help getting started, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <a
                href="https://github.com/ddaras/melony-next-ai-sdk-starter/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                Report an Issue
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/ddaras/melony"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
