import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Get up and running with Melony in minutes. Build a full-stack AI application with actions, agents, and React components.",
};

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Quick Start</h1>
        <p className="text-xl text-muted-foreground">
          Build your first AI application with Melony in 5 minutes.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">1. Create a New Project</h2>
        <p className="text-muted-foreground mb-4">
          Get started quickly with the official Melony starter template:
        </p>
        <CodeBlock language="bash">
          npx create-melony-app@latest
        </CodeBlock>
        <p className="text-muted-foreground mt-4 text-sm">
          This will create a new Next.js project with Melony configured and ready to use. Follow the prompts to set up your project.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Alternative: Manual Installation</h2>
        <p className="text-muted-foreground mb-4">
          If you prefer to set up manually, install the core Melony packages along with the React integration:
        </p>
        <CodeBlock language="bash">
          npm install @melony/react @melony/runtime @melony/agents @melony/client
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">2. Define an Action</h2>
        <p className="text-muted-foreground mb-4">
          Actions are the building blocks of your agent. They define what your agent can do.
          Create a file at <code>lib/actions.ts</code>:
        </p>
        <CodeBlock language="typescript">
          {`// lib/actions.ts
import { defineAction } from "@melony/runtime";
import z from "zod";

export const getWeather = defineAction({
  name: "getWeather",
  description: "Get the current weather for a location",
  paramsSchema: z.object({
    city: z.string().describe("The city to get weather for"),
  }),
  execute: async function* (params) {
    yield { type: "text", data: { content: \`Checking weather for \${params.city}...\` } };
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    yield {
      type: "text",
      data: { content: \`The weather in \${params.city} is Sunny and 72°F\` },
    };
  },
});`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">3. Create the Agent</h2>
        <p className="text-muted-foreground mb-4">
          Define your agent and connect it to a "brain" (LLM logic).
          Create a file at <code>app/api/chat/route.ts</code>:
        </p>
        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
import { defineAgent, createAgentHandler } from "@melony/agents";
import { agentBrain } from "@/lib/agent-brain"; // Your LLM logic
import { getWeather } from "@/lib/actions";

const agent = defineAgent({
  name: "Assistant",
  actions: { getWeather },
  brain: agentBrain,
});

export const POST = createAgentHandler(agent);`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4 text-sm">
          Note: <code>agentBrain</code> is a function that connects to your LLM provider (like OpenAI or Anthropic). See the <a href="/docs/packages/agents" className="text-primary hover:underline">Agents documentation</a> for details.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">4. Build the UI</h2>
        <p className="text-muted-foreground mb-4">
          Use the <code>MelonyStoreProvider</code> and <code>Chat</code> component to build your interface.
          Update <code>app/page.tsx</code>:
        </p>
        <CodeBlock language="tsx">
          {`// app/page.tsx
"use client";
import { MelonyStoreProvider, Chat } from "@melony/react";

export default function Home() {
  return (
    <MelonyStoreProvider api="/api/chat">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full max-w-2xl border rounded-xl h-[600px] bg-background">
          <Chat />
        </div>
      </main>
    </MelonyStoreProvider>
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            <a href="/docs/packages/runtime" className="text-primary hover:underline">
              Runtime Engine
            </a>{" "}
            - Learn about async generators and approval flows
          </p>
        </div>
      </section>
    </div>
  );
}
