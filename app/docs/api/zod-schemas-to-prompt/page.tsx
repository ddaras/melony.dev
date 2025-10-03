import { CodeBlock } from "@/components/ui/code-block";

export default function ZodSchemasToPromptPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">zodSchemasToPrompt</h1>
        <p className="text-xl text-muted-foreground">
          Generate prompts for multiple component types at once.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { zodSchemasToPrompt } from "melony/zod";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <p className="text-muted-foreground mb-4">
          Pass an array of schema configurations to generate a comprehensive prompt:
        </p>
        <CodeBlock language="tsx">
          {`import { z } from "zod";
import { zodSchemasToPrompt } from "melony/zod";

const weatherSchema = z.object({
  type: z.literal("weather-card"),
  location: z.string(),
  temperature: z.number(),
  condition: z.string(),
});

const chartSchema = z.object({
  type: z.literal("chart"),
  title: z.string(),
  data: z.array(z.object({
    label: z.string(),
    value: z.number(),
  })),
});

const prompt = zodSchemasToPrompt([
  { 
    type: "weather-card", 
    schema: weatherSchema,
    description: "Display current weather information"
  },
  { 
    type: "chart", 
    schema: chartSchema,
    description: "Display data visualizations"
  },
]);`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Configuration Options</h2>
        <p className="text-muted-foreground mb-4">
          Each schema configuration accepts the same options as <code>zodSchemaToPrompt</code>:
        </p>
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
        <h2 className="text-2xl font-bold mb-4">Return Value</h2>
        <p className="text-muted-foreground">
          Returns a single formatted string containing instructions for all component types. The AI can then choose the appropriate component based on context.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Use Case</h2>
        <p className="text-muted-foreground mb-4">
          Perfect for applications where the AI needs to choose between different UI components based on the conversation context:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Dashboard builders with multiple chart types</li>
          <li>Chat interfaces with various card types</li>
          <li>Dynamic form generators</li>
          <li>Multi-modal data displays</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <a href="/docs/api/zod-schema-to-prompt" className="text-primary hover:underline">
              zodSchemaToPrompt
            </a> - Generate prompts for single components
          </li>
          <li>
            <a href="/docs/multiple-components" className="text-primary hover:underline">
              Multiple Components Guide
            </a> - Learn more about using multiple component types
          </li>
        </ul>
      </section>
    </div>
  );
}

