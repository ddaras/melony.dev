export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">How It Works</h1>
        <p className="text-xl text-muted-foreground">
          Understanding Melony&apos;s progressive rendering architecture.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-4">The Magic Behind Progressive Rendering</h2>
        <p className="text-muted-foreground mb-4">
          Melony uses a smart parsing system to render components as the AI generates its response:
        </p>
        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
          <li><strong>AI streams response containing JSON</strong> - The AI model generates text that includes JSON objects</li>
          <li><strong>MelonyCard parses partial JSON in real-time</strong> - Using partial-json, we can parse incomplete JSON as it arrives</li>
          <li><strong>Components render progressively as JSON becomes valid</strong> - Once enough data is available, your React components render immediately</li>
          <li><strong>Remaining text renders as markdown</strong> - Any non-JSON text is rendered as formatted markdown</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Why This Matters</h2>
        <p className="text-muted-foreground mb-4">
          Traditional AI tool calling has significant latency:
        </p>
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-muted-foreground font-mono text-sm">
            AI generates → Finishes → Sends tool call → Waits for execution → Continues
          </p>
        </div>
        <p className="text-muted-foreground mb-4">
          With Melony, there&apos;s zero waiting:
        </p>
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-muted-foreground font-mono text-sm">
            AI generates → Component renders (simultaneously!)
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Smart Parsing</h2>
        <p className="text-muted-foreground mb-4">
          Melony handles incomplete JSON gracefully. Even if the AI is mid-way through generating:
        </p>
        <div className="bg-muted p-4 rounded-lg">
          <code className="text-sm">
            {'{"type": "weather-card", "temperature": 7...'}
          </code>
        </div>
        <p className="text-muted-foreground mt-4">
          The parser can extract valid partial data and render what&apos;s available, updating as more data streams in.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Type Safety</h2>
        <p className="text-muted-foreground mb-4">
          With Zod schema integration, you get:
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Full TypeScript type inference</li>
          <li>Runtime validation of streamed data</li>
          <li>Automatic prompt generation for the AI</li>
          <li>Compile-time safety for your components</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">No Waiting. No Tool Calls. Just Instant UI.</h2>
        <p className="text-muted-foreground">
          This is the core philosophy of Melony—eliminate latency and provide the smoothest possible user experience.
        </p>
      </section>
    </div>
  );
}

