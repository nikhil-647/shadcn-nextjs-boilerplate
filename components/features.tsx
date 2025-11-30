"use client";
import React from "react";
import { BarChart3, TrendingUp, Users, BookOpen, Award, Zap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Learning",
    description: "Start from basics to advanced concepts with structured learning paths",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visualize your improvement with detailed analytics and insights",
  },
  {
    icon: TrendingUp,
    title: "Smart Recommendations",
    description: "AI-powered suggestions based on your performance and weak areas",
  },
  {
    icon: Users,
    title: "Community Discussions",
    description: "Learn from others and share solutions with a vibrant community",
  },
  {
    icon: Award,
    title: "Certification Ready",
    description: "Get interview-ready with curated problem sets from top companies",
  },
  {
    icon: Zap,
    title: "Daily Challenges",
    description: "Stay motivated with daily contests and coding challenges",
  },
];

export function Features() {
  return (
    <section style={{ backgroundColor: 'var(--color-bg)' }} className="py-20 sm:py-32 font-serif">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 style={{ color: 'var(--color-text-primary)' }} className="text-4xl sm:text-5xl font-bold">
            Why Choose <span style={{
              backgroundImage: `linear-gradient(to right, var(--color-primary-light), var(--color-primary-lighter))`
            }} className="bg-clip-text text-transparent">Shinobu</span>?
          </h2>
          <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-lg max-w-2xl mx-auto">
            Everything you need to master data structures, algorithms, and ace your technical interviews
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                style={{
                  borderColor: 'var(--color-primary)',
                  backgroundColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`
                }}
                className="group relative overflow-hidden rounded-xl border bg-gradient-to-br p-8 hover:opacity-80 transition-all hover:shadow-xl"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div style={{ backgroundColor: `color-mix(in srgb, var(--color-primary-light) 30%, transparent)` }} className="inline-flex rounded-lg p-3">
                    <Icon style={{ color: 'var(--color-primary-light)' }} className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{ color: 'var(--color-text-primary)' }} className="text-lg font-semibold group-hover:opacity-80 transition-opacity">
                      {feature.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="mt-2 text-sm group-hover:opacity-90 transition-opacity">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="pt-2">
                    <div style={{ backgroundColor: `color-mix(in srgb, var(--color-primary) 30%, transparent)` }} className="inline-flex rounded-lg p-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                      <svg style={{ color: 'var(--color-primary-light)' }} className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}