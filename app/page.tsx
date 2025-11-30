"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { QuestionTypeChart, DifficultyChart } from "@/components/charts";
import { ProblemsList } from "@/components/problems-list";
import { Footer } from "@/components/footer";

export default function Home() {
  const router = useRouter();
  const [streak] = useState(2);

  const handleProblemClick = (problemId: string) => {
    router.push(`/problem/${problemId}`);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen flex flex-col font-serif dark">
      {/* Navbar */}
      <Navbar streak={streak} />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Main Content (lightweight CTA — full analytics moved to /dashboard) */}
      <main className="flex-1 bg-[color:var(--color-bg)] text-[color:var(--color-text-primary)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 py-20 sm:py-24">
          <div className="rounded-2xl border p-8 md:p-12" style={{ borderColor: 'var(--color-primary)' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-primary)]">Personalized Dashboard</h2>
            <p className="mt-4 text-[color:var(--color-text-secondary)]">Sign in and visit your dashboard to see Popular Problems, analytics, and recommended practice.</p>
            <div className="mt-8 flex gap-4">
              <button onClick={() => router.push('/dashboard')} className="inline-flex items-center rounded-md bg-[color:var(--color-primary)] px-4 py-2 text-sm font-medium text-[color:var(--color-primary-foreground)] hover:opacity-90">Go to Dashboard</button>
              <a href="#features" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-text-primary)' }}>Learn More</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}