"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import {
  ArrowRight,
  Zap,
  Cloud,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroGraphicProps {
  className?: string;
}

export function HeroGraphic({ className }: HeroGraphicProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [streamingStep, setStreamingStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Simulate streaming animation
    const streamingInterval = setInterval(() => {
      setStreamingStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(streamingInterval);
  }, []);

  const streamingJson = [
    '{"type": "weather-card"',
    '{"type": "weather-card", "location": "San Francisco"',
    '{"type": "weather-card", "location": "San Francisco", "temperature": 72',
    '{"type": "weather-card", "location": "San Francisco", "temperature": 72, "condition": "Sunny"}',
  ];

  const WeatherCard = ({
    location,
    temperature,
    condition,
  }: {
    location: string;
    temperature: number;
    condition: string;
  }) => (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border border-blue-200 dark:border-blue-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
            {location}
          </h3>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            Current weather
          </p>
        </div>
        <Cloud className="w-8 h-8 text-blue-500" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Thermometer className="w-5 h-5 text-orange-500" />
          <span className="text-3xl font-bold text-blue-900 dark:text-blue-100">
            {temperature}°F
          </span>
        </div>
        <div className="text-right">
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
          >
            {condition}
          </Badge>
          <div className="flex items-center space-x-4 mt-2 text-sm text-blue-600 dark:text-blue-400">
            <div className="flex items-center space-x-1">
              <Droplets className="w-4 h-4" />
              <span>65%</span>
            </div>
            <div className="flex items-center space-x-1">
              <Wind className="w-4 h-4" />
              <span>8 mph</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn("w-full max-w-6xl mx-auto", className)}>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Step 1: Code Snippet */}
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="text-center mb-4">
            <Badge variant="outline" className="mb-2">
              1. Define Schema
            </Badge>
            <h3 className="text-lg font-semibold">Zod Schema</h3>
          </div>

          <Card className="relative overflow-hidden border-2 border-dashed border-primary/30 bg-primary/5">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CodeBlock language="tsx" className="text-sm">
                {`const weatherSchema = z.object({
  type: z.literal("weather-card"),
  location: z.string(),
  temperature: z.number(),
  condition: z.string(),
});`}
              </CodeBlock>
            </CardContent>
          </Card>
        </div>

        {/* Step 2: MelonyCard */}
        <div
          className={cn(
            "transition-all duration-1000 transform delay-300",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="text-center mb-4">
            <Badge variant="outline" className="mb-2">
              2. MelonyCard
            </Badge>
            <h3 className="text-lg font-semibold">Progressive Rendering</h3>
          </div>

          <Card className="relative overflow-hidden border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">MelonyCard</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors duration-500",
                      streamingStep > 0
                        ? "bg-green-500 animate-pulse"
                        : "bg-gray-300"
                    )}
                  ></div>
                  <span className="text-xs text-muted-foreground">
                    Streaming
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-background/80 rounded-lg p-4 border">
                <div className="font-mono text-sm text-muted-foreground mb-2">
                  AI Response:
                </div>
                <div className="bg-muted/50 rounded p-3 font-mono text-sm overflow-hidden">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-600">JSON:</span>
                    <span className="text-foreground break-all">
                      {streamingJson[streamingStep]}
                      <span className="animate-pulse text-primary">|</span>
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  ✨ Renders instantly as JSON completes
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Step 3: Rich UI */}
        <div
          className={cn(
            "transition-all duration-1000 transform delay-600",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="text-center mb-4">
            <Badge variant="outline" className="mb-2">
              3. Rich UI
            </Badge>
            <h3 className="text-lg font-semibold">Beautiful Component</h3>
          </div>

          <Card className="relative overflow-hidden border-2 border-green-500/30 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    Rendered
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                >
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="transform transition-all duration-700 delay-1000">
                <WeatherCard
                  location="San Francisco"
                  temperature={72}
                  condition="Sunny"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Connection Arrows */}
      <div className="hidden md:flex items-center justify-center space-x-4 mt-8">
        <div className="flex items-center space-x-2">
          <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Streams</span>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowRight className="w-5 h-5 text-green-500 animate-pulse" />
          <span className="text-sm text-muted-foreground">Renders</span>
        </div>
      </div>

      {/* Mobile Connection Lines */}
      <div className="md:hidden flex flex-col items-center space-y-4 mt-8">
        <div className="flex items-center space-x-2">
          <ArrowRight className="w-4 h-4 text-primary rotate-90" />
          <span className="text-xs text-muted-foreground">Streams</span>
        </div>
        <div className="flex items-center space-x-2">
          <ArrowRight className="w-4 h-4 text-green-500 rotate-90" />
          <span className="text-xs text-muted-foreground">Renders</span>
        </div>
      </div>
    </div>
  );
}
