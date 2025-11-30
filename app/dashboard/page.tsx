"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ProblemsList } from "@/components/problems-list";
import { Footer } from "@/components/footer";

export default function Dashboard() {
  const router = useRouter();
  const [streak] = useState(2);

  const handleProblemClick = (problemId: string) => {
    router.push(`/problem/${problemId}`);
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen flex flex-col font-serif">
      {/* Navbar */}
      <Navbar streak={streak} />

      {/* Main Content */}
      <main className="flex-1 bg-[color:var(--color-bg)] text-[color:var(--color-text-primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-12 sm:py-16">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-[color:var(--color-primary)]">Dashboard</h2>
          </div>

          {/* Problems Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[color:var(--color-primary)]">Explore Problems</h3>
            </div>
            <ProblemsList onProblemClick={handleProblemClick} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
