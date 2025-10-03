import { CodeBlock } from "@/components/ui/code-block";

export default function ZodSchemaToPromptPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">zodSchemaToPrompt</h1>
        <p className="text-xl text-muted-foreground">
          Generate AI prompts from Zod schemas for single component types.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { zodSchemaToPrompt } from "melony/zod";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Options</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Option</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Required</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4"><code>type</code></td>
                <td className="py-3 px-4"><code>string</code></td>
                <td className="py-3 px-4">✅</td>
                <td className="py-3 px-4">Component type identifier</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><code>schema</code></td>
                <td className="py-3 px-4"><code>z.ZodType</code></td>
                <td className="py-3 px-4">✅</td>
                <td className="py-3 px-4">Zod schema for validation</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><code>description</code></td>
                <td className="py-3 px-4"><code>string</code></td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">When to use this component</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><code>examples</code></td>
                <td className="py-3 px-4"><code>any[]</code></td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">Example JSON objects</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><code>customInstructions</code></td>
                <td className="py-3 px-4"><code>string</code></td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">Additional instructions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <CodeBlock language="tsx">
          {`import { z } from "zod";
import { zodSchemaToPrompt } from "melony/zod";

const weatherSchema = z.object({
  type: z.literal("weather-card"),
  location: z.string(),
  temperature: z.number(),
  condition: z.string(),
});

const weatherUIPrompt = zodSchemaToPrompt({
  type: "weather-card",
  schema: weatherSchema,
  description: "Display current weather information",
  examples: [
    {
      type: "weather-card",
      location: "New York, NY",
      temperature: 72,
      condition: "Partly Cloudy",
    },
  ],
});`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Injecting Into System Prompt</h2>
        <p className="text-muted-foreground mb-4">
          Use the generated prompt in your AI system message:
        </p>
        <CodeBlock language="tsx">
          {`import { streamText } from "ai";

const result = streamText({
  model: openai("gpt-4"),
  system: \`You are a helpful assistant. \${weatherUIPrompt}\`,
  messages,
});`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Return Value</h2>
        <p className="text-muted-foreground">
          Returns a formatted string containing instructions for the AI about:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>The component type identifier</li>
          <li>The expected JSON schema structure</li>
          <li>When to use this component (if description provided)</li>
          <li>Example usage (if examples provided)</li>
          <li>Any custom instructions</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <a href="/docs/api/zod-schemas-to-prompt" className="text-primary hover:underline">
              zodSchemasToPrompt
            </a> - Generate prompts for multiple components
          </li>
          <li>
            <a href="/docs/api/define-component-schema" className="text-primary hover:underline">
              defineComponentSchema
            </a> - Create type-safe component definitions
          </li>
        </ul>
      </section>
    </div>
  );
}

