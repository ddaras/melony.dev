import { CodeBlock } from "@/components/ui/code-block";

export default function ServerIntegrationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Server Integration</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to integrate melony with your server and AI backend.
        </p>
      </div>

      <section id="overview">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-6">
          melony requires a server endpoint that returns streaming responses in the 
          <code className="bg-muted px-1 py-0.5 rounded text-sm">text/event-stream</code> format. 
          This guide shows you how to set up various server integrations.
        </p>
      </section>

      <section id="ai-sdk-integration">
        <h2 className="text-3xl font-bold mb-4">AI SDK Integration</h2>
        <p className="text-muted-foreground mb-6">
          The easiest way to integrate with melony is using the AI SDK, which provides 
          built-in support for streaming responses:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Install AI SDK</h3>
            <CodeBlock language="bash">
              {`npm install ai @ai-sdk/openai`}
            </CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">API Route (app/api/chat/route.ts)</h3>
            <CodeBlock language="typescript">
              {`import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { message } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  return result.toUIMessageStream();
}`}
            </CodeBlock>
          </div>
        </div>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> The <code className="bg-muted px-1 py-0.5 rounded text-sm">toUIMessageStream()</code> method 
            automatically formats the streaming response in the format that melony expects by default.
          </p>
        </div>
      </section>

      <section id="custom-server-format">
        <h2 className="text-3xl font-bold mb-4">Custom Server Format</h2>
        <p className="text-muted-foreground mb-6">
          If you&apos;re not using AI SDK, you can create your own server endpoint that returns 
          the correct streaming format:
        </p>

        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
export async function POST(req: Request) {
  const { message } = await req.json();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      // Send initial message
      const data = JSON.stringify({
        type: "text-delta",
        id: "response",
        delta: "Hello! I received your message: "
      });
      controller.enqueue(encoder.encode(\`data: \${data}\\n\\n\`));

      // Simulate streaming response
      const words = message.split(' ');
      let currentText = "";
      
      words.forEach((word, index) => {
        setTimeout(() => {
          currentText += word + " ";
          const delta = JSON.stringify({
            type: "text-delta",
            id: "response", 
            delta: word + " "
          });
          controller.enqueue(encoder.encode(\`data: \${delta}\\n\\n\`));
          
          if (index === words.length - 1) {
            // Send final message
            const final = JSON.stringify({
              type: "text",
              id: "response",
              text: currentText.trim()
            });
            controller.enqueue(encoder.encode(\`data: \${final}\\n\\n\`));
            controller.close();
          }
        }, index * 100);
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
    },
  });
}`}
        </CodeBlock>
      </section>

      <section id="openai-direct-integration">
        <h2 className="text-3xl font-bold mb-4">OpenAI Direct Integration</h2>
        <p className="text-muted-foreground mb-6">
          Integrate directly with OpenAI&apos;s streaming API:
        </p>

        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const stream = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: message }],
    stream: true,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      const processStream = async () => {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            const data = JSON.stringify({
              type: "text-delta",
              id: "response",
              delta: content
            });
            controller.enqueue(encoder.encode(\`data: \${data}\\n\\n\`));
          }
        }
        
        // Send final message
        const final = JSON.stringify({
          type: "text",
          id: "response",
          text: "Streaming complete"
        });
        controller.enqueue(encoder.encode(\`data: \${final}\\n\\n\`));
        controller.close();
      };
      
      processStream().catch(console.error);
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
    },
  });
}`}
        </CodeBlock>
      </section>

      <section id="anthropic-integration">
        <h2 className="text-3xl font-bold mb-4">Anthropic Integration</h2>
        <p className="text-muted-foreground mb-6">
          Integrate with Anthropic&apos;s Claude API:
        </p>

        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const stream = await anthropic.messages.create({
    model: "claude-3-sonnet-20240229",
    max_tokens: 1024,
    messages: [{ role: "user", content: message }],
    stream: true,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      const processStream = async () => {
        for await (const chunk of stream) {
          if (chunk.type === "content_block_delta") {
            const content = chunk.delta.text;
            const data = JSON.stringify({
              type: "text-delta",
              id: "response",
              delta: content
            });
            controller.enqueue(encoder.encode(\`data: \${data}\\n\\n\`));
          }
        }
        
        const final = JSON.stringify({
          type: "text",
          id: "response",
          text: "Response complete"
        });
        controller.enqueue(encoder.encode(\`data: \${final}\\n\\n\`));
        controller.close();
      };
      
      processStream().catch(console.error);
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
    },
  });
}`}
        </CodeBlock>
      </section>

      <section id="custom-ai-provider">
        <h2 className="text-3xl font-bold mb-4">Custom AI Provider</h2>
        <p className="text-muted-foreground mb-6">
          Create your own AI provider integration:
        </p>

        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
export async function POST(req: Request) {
  const { message } = await req.json();

  // Your custom AI provider logic
  const response = await fetch("https://your-ai-provider.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": \`Bearer \${process.env.AI_PROVIDER_API_KEY}\`,
    },
    body: JSON.stringify({
      message,
      stream: true,
    }),
  });

  if (!response.ok) {
    throw new Error(\`AI provider error: \${response.status}\`);
  }

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      const reader = response.body?.getReader();
      
      const processChunk = async () => {
        if (!reader) return;
        
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = new TextDecoder().decode(value);
            const lines = chunk.split('\\n');
            
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data.trim() === '[DONE]') {
                  controller.close();
                  return;
                }
                
                try {
                  const parsed = JSON.parse(data);
                  // Transform your provider's format to melony format
                  const melonyData = {
                    type: "text-delta",
                    id: "response",
                    delta: parsed.content || parsed.text || ""
                  };
                  
                  controller.enqueue(
                    encoder.encode(\`data: \${JSON.stringify(melonyData)}\\n\\n\`)
                  );
                } catch (e) {
                  console.error("Error parsing chunk:", e);
                }
              }
            }
          }
        } catch (error) {
          console.error("Stream processing error:", error);
          controller.error(error);
        }
      };
      
      processChunk();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
    },
  });
}`}
        </CodeBlock>
      </section>

      <section id="error-handling">
        <h2 className="text-3xl font-bold mb-4">Error Handling</h2>
        <p className="text-muted-foreground mb-6">
          Implement proper error handling in your server endpoints:
        </p>

        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Your AI integration logic here
    const stream = await createAIStream(message);
    
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });

  } catch (error) {
    console.error("Chat API error:", error);
    
    const errorResponse = JSON.stringify({
      type: "error",
      id: "error",
      error: "An error occurred while processing your request"
    });

    return new Response(
      \`data: \${errorResponse}\\n\\n\`,
      {
        status: 500,
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
        },
      }
    );
  }
}`}
        </CodeBlock>
      </section>

      <section id="authentication">
        <h2 className="text-3xl font-bold mb-4">Authentication</h2>
        <p className="text-muted-foreground mb-6">
          Add authentication to your chat endpoints:
        </p>

        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
import { verifyAuth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    // Verify authentication
    const user = await verifyAuth(req);
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const { message } = await req.json();
    
    // Add user context to the AI request
    const stream = await createAIStream(message, {
      userId: user.id,
      userContext: user.preferences,
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });

  } catch (error) {
    console.error("Authentication error:", error);
    return new Response(
      JSON.stringify({ error: "Authentication failed" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }
}`}
        </CodeBlock>
      </section>

      <section id="rate-limiting">
        <h2 className="text-3xl font-bold mb-4">Rate Limiting</h2>
        <p className="text-muted-foreground mb-6">
          Implement rate limiting to prevent abuse:
        </p>

        <CodeBlock language="typescript">
          {`// app/api/chat/route.ts
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    // Check rate limit
    const rateLimitResult = await rateLimit(req);
    if (!rateLimitResult.success) {
      return new Response(
        JSON.stringify({ 
          error: "Rate limit exceeded",
          retryAfter: rateLimitResult.retryAfter 
        }),
        { 
          status: 429, 
          headers: { 
            "Content-Type": "application/json",
            "Retry-After": rateLimitResult.retryAfter.toString()
          } 
        }
      );
    }

    const { message } = await req.json();
    const stream = await createAIStream(message);
    
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });

  } catch (error) {
    console.error("Rate limiting error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}`}
        </CodeBlock>
      </section>

      <section id="testing">
        <h2 className="text-3xl font-bold mb-4">Testing Your Integration</h2>
        <p className="text-muted-foreground mb-6">
          Test your server integration to ensure it works correctly with melony:
        </p>

        <CodeBlock language="typescript">
          {`// test-chat-api.ts
async function testChatAPI() {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Hello, world!"
    }),
  });

  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("No response body");
  }

  console.log("Testing chat API...");
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    
    const chunk = new TextDecoder().decode(value);
    const lines = chunk.split('\\n');
    
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        try {
          const parsed = JSON.parse(data);
          console.log("Received:", parsed);
        } catch (e) {
          console.log("Raw data:", data);
        }
      }
    }
  }
  
  console.log("Test completed!");
}

// Run the test
testChatAPI().catch(console.error);`}
        </CodeBlock>
      </section>

      <section id="troubleshooting">
        <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Stream not working</h3>
            <p className="text-muted-foreground text-sm">
              Check that your server returns the correct headers and that the response format 
              matches what melony expects.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">CORS issues</h3>
            <p className="text-muted-foreground text-sm">
              Make sure your server includes proper CORS headers if you&apos;re making cross-origin requests.
            </p>
          </div>
          
          <div className="p-4 border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Authentication errors</h3>
            <p className="text-muted-foreground text-sm">
              Verify that your authentication headers are being sent correctly and that your 
              server is properly validating them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
