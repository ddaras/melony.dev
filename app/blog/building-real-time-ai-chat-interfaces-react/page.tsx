import Link from "next/link";
import { Calendar, Clock, Share2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Real-time AI Chat Interfaces with React: A Complete Guide",
  description:
    "Learn how to create responsive, type-safe AI chat interfaces that render components progressively as the AI thinks. Master zero-latency streaming with React and TypeScript.",
  keywords: [
    "react ai chat interface",
    "real-time ai ui",
    "progressive rendering react",
    "ai streaming components",
    "typescript ai interface",
    "melony react toolkit",
    "ai chat ui components",
    "streaming ai responses",
    "react ai development",
    "ai ui best practices",
  ],
  authors: [{ name: "Melony Team" }],
  creator: "Melony Team",
  publisher: "Melony",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://melony.dev/blog/building-real-time-ai-chat-interfaces-react",
    title: "Building Real-time AI Chat Interfaces with React: A Complete Guide",
    description:
      "Learn how to create responsive, type-safe AI chat interfaces that render components progressively as the AI thinks. Master zero-latency streaming with React and TypeScript.",
    siteName: "Melony",
    images: [
      {
        url: "https://melony.dev/screen-weather.png",
        width: 1200,
        height: 630,
        alt: "Real-time AI Chat Interface with React",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Real-time AI Chat Interfaces with React: A Complete Guide",
    description:
      "Learn how to create responsive, type-safe AI chat interfaces that render components progressively as the AI thinks.",
  },
  alternates: {
    canonical:
      "https://melony.dev/blog/building-real-time-ai-chat-interfaces-react",
  },
};

export default function BlogPostPage() {
  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2025-01-27">January 27, 2025</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>8 min read</span>
          </div>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Building Real-Time Generative UI: How to Stream AI Components with
          Zero Latency
        </h1>

        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Learn how to create responsive, type-safe AI chat interfaces that
          render components progressively as the AI thinks. Master zero-latency
          streaming with React and TypeScript.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["React", "AI", "TypeScript", "Streaming"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            The Problem with Traditional AI UIs
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Traditional AI chat interfaces suffer from a fundamental UX problem:
            users wait for complete responses before seeing any content. This
            creates a jarring experience where users stare at loading spinners
            while AI models process their requests.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Consider a weather app that uses AI to generate dynamic weather
            cards. With traditional approaches, users wait 2-3 seconds for the
            AI to complete its entire response before seeing anything. This
            feels slow and unresponsive.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">
              Traditional Flow Problems:
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                • <strong>High perceived latency</strong> - Users wait for
                complete responses
              </li>
              <li>
                • <strong>Poor engagement</strong> - Loading states create
                abandonment
              </li>
              <li>
                • <strong>Type safety issues</strong> - Runtime errors from
                malformed AI responses
              </li>
              <li>
                • <strong>Complex state management</strong> - Manual parsing and
                validation
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            The Progressive Rendering Solution
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Progressive rendering solves these problems by displaying components
            as soon as the AI starts generating valid JSON. Instead of waiting
            for complete responses, users see content appearing in real-time.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            This approach reduces perceived latency by up to 70% and creates a
            more engaging, responsive experience that feels native to modern web
            applications.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Building a Type-Safe AI Chat Interface
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Let&apos;s build a complete AI chat interface using React, TypeScript,
            and progressive rendering. We&apos;ll create a weather assistant that
            generates interactive weather cards in real-time.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Step 1: Define Your Schema
          </h3>
          <p className="text-muted-foreground mb-4">
            Start by defining TypeScript schemas for your AI-generated
            components using Zod:
          </p>

          <CodeBlock language="tsx">
            {`import { z } from "zod";
import { zodSchemaToPrompt } from "melony/zod";

// Define the weather card schema
const weatherSchema = z.object({
  type: z.literal("weather-card"),
  location: z.string().describe("City and country name"),
  temperature: z.number().describe("Temperature in Celsius"),
  condition: z.string().describe("Weather condition like 'sunny', 'rainy'"),
  humidity: z.number().min(0).max(100).describe("Humidity percentage"),
  windSpeed: z.number().describe("Wind speed in km/h"),
  timestamp: z.string().describe("ISO timestamp of the weather data")
});

// Generate the AI prompt
export const weatherUIPrompt = zodSchemaToPrompt({
  type: "weather-card",
  schema: weatherSchema,
  description: "Display comprehensive weather information in a card format"
});`}
          </CodeBlock>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Step 2: Create Your React Component
          </h3>
          <p className="text-muted-foreground mb-4">
            Build the actual weather card component that will render the
            AI-generated data:
          </p>

          <CodeBlock language="tsx">
            {`import React from 'react';
import { z } from 'zod';

interface WeatherCardProps {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  timestamp: string;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  temperature,
  condition,
  humidity,
  windSpeed,
  timestamp
}) => {
  const getConditionIcon = (condition: string) => {
    const icons = {
      sunny: '☀️',
      rainy: '🌧️',
      cloudy: '☁️',
      snowy: '❄️',
      stormy: '⛈️'
    };
    return icons[condition.toLowerCase() as keyof typeof icons] || '🌤️';
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
          {location}
        </h3>
        <span className="text-2xl">{getConditionIcon(condition)}</span>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-1">
          {temperature}°C
        </div>
        <div className="text-blue-600 dark:text-blue-300 capitalize">
          {condition}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="text-center">
          <div className="text-blue-600 dark:text-blue-300">Humidity</div>
          <div className="font-semibold text-blue-800 dark:text-blue-200">
            {humidity}%
          </div>
        </div>
        <div className="text-center">
          <div className="text-blue-600 dark:text-blue-300">Wind</div>
          <div className="font-semibold text-blue-800 dark:text-blue-200">
            {windSpeed} km/h
          </div>
        </div>
      </div>
      
      <div className="text-xs text-blue-500 dark:text-blue-400 mt-4 text-center">
        Updated: {new Date(timestamp).toLocaleString()}
      </div>
    </div>
  );
};`}
          </CodeBlock>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Step 3: Set Up Server-Side Streaming
          </h3>
          <p className="text-muted-foreground mb-4">
            Create an API route that streams AI responses with your schema:
          </p>

          <CodeBlock language="tsx">
            {`// app/api/chat/route.ts
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { weatherUIPrompt } from "@/components/weather";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4"),
    system: \`You are a helpful weather assistant. When users ask about weather, respond with a weather card using this format:

\${weatherUIPrompt}

Always provide accurate, up-to-date weather information. If you cannot access real weather data, clearly state this limitation.\`,
    messages,
    temperature: 0.7,
    maxTokens: 1000,
  });

  return result.toDataStreamResponse();
}`}
          </CodeBlock>

          <h3 className="text-2xl font-semibold mb-4 mt-8">
            Step 4: Implement Client-Side Rendering
          </h3>
          <p className="text-muted-foreground mb-4">
            Use Melony to render components progressively as they stream:
          </p>

          <CodeBlock language="tsx">
            {`import React, { useState } from 'react';
import { useChat } from 'ai/react';
import { MelonyCard } from 'melony';
import { WeatherCard } from '@/components/weather';

function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-4 mb-6">
        {messages.map((message) => (
          <div key={message.id} className="space-y-2">
            <div className="text-sm font-medium text-muted-foreground">
              {message.role === 'user' ? 'You' : 'AI'}
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              {message.role === 'assistant' ? (
                <MelonyCard
                  text={message.content}
                  components={{
                    'weather-card': WeatherCard
                  }}
                />
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="text-sm text-muted-foreground">
            AI is thinking...
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about the weather in any city..."
          className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInterface;`}
          </CodeBlock>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Performance Benefits</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Progressive rendering provides significant performance improvements:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">
                ⚡ Reduced Perceived Latency
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Users see content within 200-500ms instead of waiting 2-3
                seconds for complete responses.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                🛡️ Type Safety
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                Zod schemas ensure AI responses are validated and type-safe at
                compile time.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">
                🎯 Better UX
              </h3>
              <p className="text-purple-700 dark:text-purple-300">
                Progressive rendering creates a more engaging, responsive user
                experience.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-3">
                🪶 Lightweight
              </h3>
              <p className="text-orange-700 dark:text-orange-300">
                Minimal bundle size with zero dependencies beyond React and your
                UI library.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Advanced Patterns</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Here are some advanced patterns for building sophisticated AI
            interfaces:
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Multiple Component Types
          </h3>
          <p className="text-muted-foreground mb-4">
            Define multiple schemas for different types of content:
          </p>

          <CodeBlock language="tsx">
            {`// Multiple component schemas
const chartSchema = z.object({
  type: z.literal("chart"),
  title: z.string(),
  data: z.array(z.object({
    label: z.string(),
    value: z.number()
  })),
  chartType: z.enum(["bar", "line", "pie"])
});

const tableSchema = z.object({
  type: z.literal("table"),
  headers: z.array(z.string()),
  rows: z.array(z.array(z.string()))
});

// Register multiple components
<MelonyCard
  text={message.content}
  components={{
    'weather-card': WeatherCard,
    'chart': ChartComponent,
    'table': TableComponent
  }}
/>`}
          </CodeBlock>

          <h3 className="text-2xl font-semibold mb-4 mt-8">Error Handling</h3>
          <p className="text-muted-foreground mb-4">
            Handle malformed AI responses gracefully:
          </p>

          <CodeBlock language="tsx">
            {`import { MelonyCard } from 'melony';

function SafeMelonyCard({ text, components }) {
  return (
    <ErrorBoundary fallback={<div>Failed to render component</div>}>
      <MelonyCard
        text={text}
        components={components}
        onError={(error) => {
          console.error('Component rendering error:', error);
          // Log to analytics, show fallback UI, etc.
        }}
      />
    </ErrorBoundary>
  );
}`}
          </CodeBlock>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Follow these best practices for optimal AI interface development:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                1. Design for Progressive Enhancement
              </h3>
              <p className="text-muted-foreground">
                Start with basic text responses and progressively enhance with
                rich components. This ensures your interface works even when AI
                responses are malformed.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                2. Use Descriptive Schema Fields
              </h3>
              <p className="text-muted-foreground">
                Provide clear descriptions in your Zod schemas. This helps AI
                models generate more accurate responses and improves the quality
                of your components.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                3. Implement Proper Loading States
              </h3>
              <p className="text-muted-foreground">
                Show skeleton loaders or progressive loading indicators to
                maintain user engagement during AI processing.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2">
                4. Test with Real AI Responses
              </h3>
              <p className="text-muted-foreground">
                Always test your components with actual AI-generated content.
                Mock data often doesn&apos;t reflect the variability of real AI
                responses.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Building real-time AI chat interfaces with progressive rendering
            transforms the user experience from static, waiting-based
            interactions to dynamic, engaging conversations. By combining
            React&apos;s component model with AI streaming, you can create interfaces
            that feel instant and responsive.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            The key is to think of AI responses as streams of structured data
            rather than complete documents. This paradigm shift opens up new
            possibilities for creating truly interactive AI experiences.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Start building your own AI interfaces today with Melony, and
            experience the difference that progressive rendering makes.
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Build AI Interfaces?
        </h2>
        <p className="text-muted-foreground mb-6">
          Start building your own progressive AI chat interfaces with Melony
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/docs">Get Started with Melony</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/ddaras/melony"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t pt-12">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">
              <Link
                href="/blog/progressive-rendering-vs-traditional-ai-uis"
                className="hover:text-primary transition-colors"
              >
                Progressive Rendering vs Traditional AI UIs: Performance
                Comparison
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4">
              Compare the performance benefits of progressive rendering versus
              traditional AI interfaces.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>6 min read</span>
              <span>•</span>
              <span>Jan 20, 2025</span>
            </div>
          </article>

          <article className="bg-background border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">
              <Link
                href="/blog/typescript-schemas-ai-responses-zod"
                className="hover:text-primary transition-colors"
              >
                Type-Safe AI Responses with Zod Schemas: Best Practices
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4">
              Ensure your AI-generated content is always type-safe with Zod
              schemas.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>5 min read</span>
              <span>•</span>
              <span>Jan 15, 2025</span>
            </div>
          </article>
        </div>
      </section>
    </article>
  );
}
