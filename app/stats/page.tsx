"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { QuestionTypeChart, DifficultyChart } from "@/components/charts";
import { Footer } from "@/components/footer";

export default function StatsPage() {
  const router = useRouter();

  const handleProblemClick = (problemId: string) => {
    router.push(`/problem/${problemId}`);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen flex flex-col font-serif">
      <Navbar />

      <main className="flex-1 bg-[color:var(--color-bg)] text-[color:var(--color-text-primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-16">
          <div className="rounded-2xl border p-8 md:p-12" style={{ borderColor: 'var(--color-primary)' }}>
            <div className="mb-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-[color:var(--color-primary)]">Stats</h2>
              <p className="mt-2 text-[color:var(--color-text-secondary)]">Popular problems and analytics to help you focus your practice</p>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <QuestionTypeChart />
              <DifficultyChart />
            </div>

            {/* Charts-only analytics section */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
