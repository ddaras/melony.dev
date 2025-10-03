import { CodeBlock } from "@/components/ui/code-block";

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Quick Start</h1>
        <p className="text-xl text-muted-foreground">
          Get up and running with Melony in minutes.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
        <p className="text-muted-foreground mb-4">
          Import <code>MelonyCard</code> and pass your streaming AI response along with your component mappings:
        </p>
        <CodeBlock language="tsx">
          {`import { MelonyCard } from "melony";

<MelonyCard
  text={streamingAIResponse}
  components={{
    "weather-card": WeatherCard,
  }}
/>;`}
        </CodeBlock>
        <p className="text-muted-foreground mt-4">
          As the AI streams <code>{'{"type": "weather-card", "temperature": 72...'}</code>, your component renders immediately—even before the JSON is complete.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
          <li>AI streams response containing JSON</li>
          <li>MelonyCard parses partial JSON in real-time</li>
          <li>Components render progressively as JSON becomes valid</li>
          <li>Remaining text renders as markdown</li>
        </ol>
        <p className="text-muted-foreground mt-4">
          No waiting. No tool calls. Just instant UI generation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
        <p className="text-muted-foreground">
          Ready for a complete implementation? Check out the{" "}
          <a href="/docs/complete-example" className="text-primary hover:underline">
            Complete Example
          </a>{" "}
          guide.
        </p>
      </section>
    </div>
  );
}

