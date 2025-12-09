import type { Metadata } from "next";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
    title: "@melony/agents - Documentation",
    description: "High-level agent abstractions and HTTP handlers for Melony.",
};

export default function AgentsDocsPage() {
    return (
        <article className="space-y-8">
            <header>
                <h1 className="text-4xl mb-4 font-bold">@melony/agents</h1>
                <p className="text-xl text-muted-foreground">
                    Build intelligent agents with high-level abstractions.
                </p>
            </header>

            <section>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                    The <code>@melony/agents</code> package provides the "Brain" pattern for defining agent behavior and includes standard HTTP handlers for easy integration with frameworks like Next.js.
                </p>
                <div className="my-6">
                    <CodeBlock language="bash">npm install @melony/agents</CodeBlock>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Agent Definition</strong>: Combine actions and a "brain" into a cohesive agent.</li>
                    <li><strong>Brain Pattern</strong>: Pluggable logic for deciding which actions to take (e.g., using LLMs).</li>
                    <li><strong>HTTP Handlers</strong>: <code>createAgentHandler</code> for automatic route handling.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Creating an Agent</h2>
                <CodeBlock language="typescript">
                    {`import { defineAgent } from "@melony/agents";
import { myAction } from "./actions";
import { agentBrain } from "./brain";

export const agent = defineAgent({
  name: "MyAgent",
  actions: { myAction },
  brain: agentBrain,
});`}
                </CodeBlock>
            </section>
        </article>
    );
}
