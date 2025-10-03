import { CodeBlock } from "@/components/ui/code-block";

export default function MultipleComponentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Multiple Components</h1>
        <p className="text-xl text-muted-foreground">
          Register and use multiple component types in a single MelonyCard.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <p className="text-muted-foreground mb-4">
          You can pass multiple component mappings to <code>MelonyCard</code>:
        </p>
        <CodeBlock language="tsx">
          {`<MelonyCard
  text={message}
  components={{
    "weather-card": WeatherCard,
    "user-profile": UserProfile,
    chart: Chart,
  }}
/>`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          The AI can now use any of these component types in its streaming response.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Generating Prompts for Multiple Components</h2>
        <p className="text-muted-foreground mb-4">
          Use <code>zodSchemasToPrompt</code> to generate a single prompt for multiple component types:
        </p>
        <CodeBlock language="tsx">
          {`import { zodSchemasToPrompt } from "melony/zod";

const prompt = zodSchemasToPrompt([
  { type: "weather-card", schema: weatherSchema },
  { type: "chart", schema: chartSchema },
  { type: "user-profile", schema: userProfileSchema },
]);`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          This generates comprehensive instructions for the AI about all available component types.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Component Selection</h2>
        <p className="text-muted-foreground mb-4">
          The AI automatically selects the appropriate component type based on:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>The <code>type</code> field in the JSON</li>
          <li>The context of the conversation</li>
          <li>The descriptions you provided in the schema prompts</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p className="text-muted-foreground">
          Learn more about{" "}
          <a href="/docs/how-it-works" className="text-primary hover:underline">
            How It Works
          </a>{" "}
          or explore the{" "}
          <a href="/docs/api/zod-schemas-to-prompt" className="text-primary hover:underline">
            zodSchemasToPrompt API
          </a>.
        </p>
      </section>
    </div>
  );
}

