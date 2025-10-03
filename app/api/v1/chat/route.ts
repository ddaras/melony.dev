import { openai } from "@ai-sdk/openai";
import {
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
  UIMessage,
} from "ai";

export async function POST(req: Request) {
  const { message } = await req.json();

  const stream = createUIMessageStream<UIMessage>({
    execute: async ({ writer }) => {
      const result = streamText({
        model: openai("gpt-4o-mini"),
        messages: [{ role: "user", content: message }],
      });

      writer.merge(result.toUIMessageStream());
    },
  });

  return createUIMessageStreamResponse({ stream });
}
