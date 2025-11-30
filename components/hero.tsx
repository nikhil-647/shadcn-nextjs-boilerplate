"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Target, Zap } from "lucide-react";

export function Hero() {
  return (
    <section style={{ backgroundColor: 'var(--color-bg)' }} className="relative overflow-hidden pt-20 pb-24 sm:pt-32 sm:pb-32 font-serif">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 opacity-25">
        <div style={{ backgroundColor: 'var(--color-primary)' }} className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl" />
        <div style={{ backgroundColor: 'var(--color-primary-light)' }} className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div style={{
              borderColor: 'var(--color-primary)',
              backgroundColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`,
              color: 'var(--color-primary-light)'
            }} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 hover:opacity-80 transition-all">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Welcome to the future of learning</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 style={{ color: 'var(--color-text-primary)' }} className="text-5xl sm:text-6xl font-bold tracking-tight">
                Master <span style={{
                  backgroundImage: `linear-gradient(to right, var(--color-primary-light), var(--color-primary-lighter))`
                }} className="bg-clip-text text-transparent">DSA</span> Like Never Before
              </h1>
              <p style={{ color: 'var(--color-text-primary)', opacity: 0.8 }} className="text-xl max-w-md leading-relaxed">
                Practice data structures and algorithms with an intelligent learning platform. Build your skills, track your progress, and ace your interviews.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-text-primary)'
                }}
                className="font-semibold transition-all shadow-lg hover:shadow-xl font-serif hover:opacity-80"
              >
                Start Coding Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-text-primary)'
                }}
                className="font-semibold transition-all font-serif hover:opacity-80"
              >
                View Problems
              </Button>
            </div>

            {/* Stats */}
            <div style={{ borderTopColor: 'var(--color-primary)' }} className="grid grid-cols-3 gap-4 pt-8 border-t">
              <div className="space-y-1">
                <div style={{ color: 'var(--color-text-primary)' }} className="text-2xl font-bold">500+</div>
                <div style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm">Problems</div>
              </div>
              <div className="space-y-1">
                <div style={{ color: 'var(--color-text-primary)' }} className="text-2xl font-bold">100K+</div>
                <div style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm">Active Users</div>
              </div>
              <div className="space-y-1">
                <div style={{ color: 'var(--color-text-primary)' }} className="text-2xl font-bold">95%</div>
                <div style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm">Pass Rate</div>
              </div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-6 lg:pt-8">
            {/* Feature Card 1 */}
            <div style={{
              borderColor: 'var(--color-primary)',
              backgroundColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`
            }} className="group relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 hover:opacity-80 transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-all" />
              <div className="relative space-y-3">
                <div style={{ backgroundColor: `color-mix(in srgb, var(--color-primary) 30%, transparent)` }} className="inline-flex rounded-lg p-2">
                  <Target style={{ color: 'var(--color-primary-light)' }} className="h-5 w-5" />
                </div>
                <h3 style={{ color: 'var(--color-text-primary)' }} className="text-lg font-semibold">Curated Problems</h3>
                <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm">Hand-picked problems from top tech companies</p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div style={{
              borderColor: 'var(--color-primary)',
              backgroundColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`
            }} className="group relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 hover:opacity-80 transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-all" />
              <div className="relative space-y-3">
                <div style={{ backgroundColor: `color-mix(in srgb, var(--color-primary-light) 30%, transparent)` }} className="inline-flex rounded-lg p-2">
                  <Code2 style={{ color: 'var(--color-primary-light)' }} className="h-5 w-5" />
                </div>
                <h3 style={{ color: 'var(--color-text-primary)' }} className="text-lg font-semibold">Code Editor</h3>
                <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm">Built-in editor with syntax highlighting</p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div style={{
              borderColor: 'var(--color-primary)',
              backgroundColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`
            }} className="group relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 hover:opacity-80 transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-all" />
              <div className="relative space-y-3">
                <div style={{ backgroundColor: `color-mix(in srgb, var(--color-primary-light) 30%, transparent)` }} className="inline-flex rounded-lg p-2">
                  <Zap style={{ color: 'var(--color-primary-light)' }} className="h-5 w-5" />
                </div>
                <h3 style={{ color: 'var(--color-text-primary)' }} className="text-lg font-semibold">Instant Feedback</h3>
                <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm">Get real-time test results and hints</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}