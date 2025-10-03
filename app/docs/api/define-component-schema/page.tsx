import { CodeBlock } from "@/components/ui/code-block";

export default function DefineComponentSchemaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">defineComponentSchema</h1>
        <p className="text-xl text-muted-foreground">
          Create type-safe component definitions with built-in validation.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { defineComponentSchema } from "melony/zod";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <p className="text-muted-foreground mb-4">
          Define a component schema that includes validation methods:
        </p>
        <CodeBlock language="tsx">
          {`import { z } from "zod";
import { defineComponentSchema } from "melony/zod";

const weatherSchema = z.object({
  type: z.literal("weather-card"),
  location: z.string(),
  temperature: z.number(),
  condition: z.string(),
});

const WeatherComponent = defineComponentSchema({
  type: "weather-card",
  schema: weatherSchema,
});

// Validate data at runtime
const validData = WeatherComponent.validate(data);`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Configuration</h2>
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
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Return Value</h2>
        <p className="text-muted-foreground mb-4">
          Returns an object with:
        </p>
        <div className="bg-muted p-4 rounded-lg">
          <ul className="space-y-2 text-muted-foreground font-mono text-sm">
            <li><strong>type</strong>: string - The component type identifier</li>
            <li><strong>schema</strong>: ZodType - The Zod schema</li>
            <li><strong>validate(data)</strong>: function - Validates and returns typed data</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Validation</h2>
        <p className="text-muted-foreground mb-4">
          The <code>validate</code> method provides runtime type checking:
        </p>
        <CodeBlock language="tsx">
          {`try {
  const validData = WeatherComponent.validate(data);
  // validData is fully typed!
  console.log(validData.temperature); // TypeScript knows this exists
} catch (error) {
  // Handle validation errors
  console.error("Invalid data:", error);
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Benefits</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>Combines type definition and validation in one place</li>
          <li>Provides runtime safety for streamed data</li>
          <li>Enables better error handling</li>
          <li>Improves code organization and reusability</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Complete Example</h2>
        <CodeBlock language="tsx">
          {`import { z } from "zod";
import { defineComponentSchema } from "melony/zod";

// Define schema
const weatherSchema = z.object({
  type: z.literal("weather-card"),
  location: z.string(),
  temperature: z.number(),
  condition: z.string(),
});

// Create component schema
const WeatherComponent = defineComponentSchema({
  type: "weather-card",
  schema: weatherSchema,
});

// Use in your component
type WeatherCardProps = z.infer<typeof weatherSchema>;

export const WeatherCard: React.FC<WeatherCardProps> = (props) => {
  // Validate props at runtime
  const validProps = WeatherComponent.validate(props);
  
  return (
    <div>
      <h3>{validProps.location}</h3>
      <p>{validProps.temperature}°F - {validProps.condition}</p>
    </div>
  );
};`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Related</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <a href="/docs/api/zod-schema-to-prompt" className="text-primary hover:underline">
              zodSchemaToPrompt
            </a> - Generate AI prompts from schemas
          </li>
          <li>
            <a href="/docs/complete-example" className="text-primary hover:underline">
              Complete Example
            </a> - See full implementation
          </li>
        </ul>
      </section>
    </div>
  );
}

