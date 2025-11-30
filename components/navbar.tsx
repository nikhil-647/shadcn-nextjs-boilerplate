"use client";
import React, { useState } from "react";
import { Flame, Menu, X, LogIn, UserPlus } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  streak?: number;
}

export function Navbar({ streak = 2 }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const getStreakLabel = (days: number) => {
    if (days === 0) return { label: "Start Streak", emoji: "🔥" };
    if (days === 2) return { label: "Savage", emoji: "⚡" };
    if (days === 3) return { label: "Awesome", emoji: "🔥" };
    if (days === 10) return { label: "Rampage", emoji: "💥" };
    if (days === 30) return { label: "God Mode", emoji: "👑" };
    return { label: `Day ${days}`, emoji: "🎯" };
  };

  const streakInfo = getStreakLabel(streak);

  return (
    <nav style={{
      borderBottomColor: 'var(--color-primary)',
      backgroundColor: `color-mix(in srgb, var(--color-bg) 95%, transparent)`
    }} className="sticky top-0 z-50 border-b backdrop-blur-sm font-serif">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="text-3xl">🦋</div>
            <div style={{
              backgroundImage: `linear-gradient(to right, var(--color-primary-light), var(--color-primary-lighter))`
            }} className="text-2xl font-bold tracking-wide bg-clip-text text-transparent">Shinobu</div>
          </a>

          {/* Desktop Navigation with compact Stats preview */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <a href="/stats" className="text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: 'var(--color-text-primary)' }}>
                Stats
              </a>

              
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Streak Section */}
            <div style={{
              backgroundColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary-light)'
            }} className="flex items-center gap-3 rounded-lg border px-4 py-2 hover:opacity-80 transition-opacity">
              <span className="text-xl">{streakInfo.emoji}</span>
              <div>
                <div className="text-xs font-serif" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>Streak</div>
                <div className="text-sm font-semibold font-serif" style={{ color: 'var(--color-primary-light)' }}>
                  {streakInfo.label}
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <Button
              variant="ghost"
              size="sm"
              style={{ color: 'var(--color-text-primary)' }}
              className="hover:opacity-80 transition-all font-serif"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
            <Button
              size="sm"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-text-primary)'
              }}
              className="font-medium transition-all font-serif hover:opacity-80"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--color-text-primary)' }}
            className="md:hidden hover:opacity-80 transition-opacity"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ borderTopColor: 'var(--color-primary)' }} className="md:hidden mt-4 pt-4 border-t space-y-3 animate-in fade-in slide-in-from-top-2 font-serif">
            <div className="space-y-2">
              <a href="/stats" className="block w-full rounded-md px-4 py-2 text-sm font-medium text-[color:var(--color-text-primary)]" style={{ borderColor: 'var(--color-primary)' }}>
                Stats
              </a>
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-text-primary)' }} className="flex-1 hover:opacity-80 font-serif">
                <LogIn className="mr-1 h-4 w-4" />
                Sign In
              </Button>
              <Button size="sm" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-primary)' }} className="flex-1 font-serif hover:opacity-80">
                <UserPlus className="mr-1 h-4 w-4" />
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
