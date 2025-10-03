import { CodeBlock } from "@/components/ui/code-block";

export default function MelonyCardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">MelonyCard</h1>
        <p className="text-xl text-muted-foreground">
          The main component for rendering streaming AI responses with embedded UI components.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Import</h2>
        <CodeBlock language="tsx">
          {`import { MelonyCard } from "melony";`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">Prop</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4"><code>text</code></td>
                <td className="py-3 px-4"><code>string</code></td>
                <td className="py-3 px-4">AI response (can contain streaming JSON)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4"><code>components</code></td>
                <td className="py-3 px-4"><code>Record&lt;string, React.FC&gt;</code></td>
                <td className="py-3 px-4">Map of type identifiers to components</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <CodeBlock language="tsx">
          {`import { MelonyCard } from "melony";

function Chat() {
  return (
    <MelonyCard
      text={streamingAIResponse}
      components={{
        "weather-card": WeatherCard,
        "user-profile": UserProfile,
      }}
    />
  );
}`}
        </CodeBlock>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ul className="space-y-3 text-muted-foreground list-disc list-inside">
          <li>Parses the <code>text</code> prop for JSON objects</li>
          <li>Matches JSON <code>type</code> field with component mappings</li>
          <li>Renders matching components with JSON data as props</li>
          <li>Renders remaining text as markdown</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <h3 className="text-xl font-semibold mb-3">Single Component</h3>
        <CodeBlock language="tsx">
          {`<MelonyCard
  text={message}
  components={{ "weather-card": WeatherCard }}
/>`}
        </CodeBlock>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Multiple Components</h3>
        <CodeBlock language="tsx">
          {`<MelonyCard
  text={message}
  components={{
    "weather-card": WeatherCard,
    chart: Chart,
    "user-profile": UserProfile,
  }}
/>`}
        </CodeBlock>
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
            <a href="/docs/api/zod-schemas-to-prompt" className="text-primary hover:underline">
              zodSchemasToPrompt
            </a> - Generate prompts for multiple components
          </li>
        </ul>
      </section>
    </div>
  );
}

