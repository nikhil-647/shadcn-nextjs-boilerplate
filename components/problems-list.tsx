"use client";
import React, { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Search, Filter } from "lucide-react";

interface Problem {
  problemId: string;
  title: string;
  statementMd?: string;
  difficulty: string;
  visitedCount?: number;
  createdAt?: string;
  lastOpened?: string;
}

interface ProblemsListProps {
  problems?: Problem[];
  onProblemClick?: (problemId: string) => void;
}

const ITEMS_PER_PAGE = 9;

export function ProblemsList({ problems = [], onProblemClick }: ProblemsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const defaultProblems: Problem[] = [
    {
      problemId: "1",
      title: "Two Sum",
      statementMd: "Given an array of integers nums and an integer target, return the indices of the two numbers",
      difficulty: "Easy",
      visitedCount: 1250,
      createdAt: "2024-11-01",
      lastOpened: "2024-11-30",
    },
    {
      problemId: "2",
      title: "Longest Substring Without Repeating Characters",
      statementMd: "Given a string s, find the length of the longest substring without repeating characters",
      difficulty: "Medium",
      visitedCount: 980,
      createdAt: "2024-11-02",
      lastOpened: "2024-11-29",
    },
    {
      problemId: "3",
      title: "Median of Two Sorted Arrays",
      statementMd: "Given two sorted arrays nums1 and nums2 of size m and n respectively",
      difficulty: "Hard",
      visitedCount: 450,
      createdAt: "2024-11-03",
      lastOpened: "2024-11-28",
    },
    {
      problemId: "4",
      title: "Add Two Numbers",
      statementMd: "You are given two non-empty linked lists representing two non-negative integers",
      difficulty: "Medium",
      visitedCount: 820,
      createdAt: "2024-11-04",
      lastOpened: "2024-11-27",
    },
    {
      problemId: "5",
      title: "Reverse Integer",
      statementMd: "Given a signed 32-bit integer x, return x with its digits reversed",
      difficulty: "Easy",
      visitedCount: 1100,
      createdAt: "2024-11-05",
      lastOpened: "2024-11-26",
    },
    {
      problemId: "6",
      title: "Regular Expression Matching",
      statementMd: "Given an input string s and a pattern p, implement regular expression matching",
      difficulty: "Hard",
      visitedCount: 320,
      createdAt: "2024-11-06",
      lastOpened: "2024-11-25",
    },
    {
      problemId: "7",
      title: "Container With Most Water",
      statementMd: "You are given an integer array height of length n. There are n vertical lines drawn",
      difficulty: "Medium",
      visitedCount: 760,
      createdAt: "2024-11-07",
      lastOpened: "2024-11-24",
    },
    {
      problemId: "8",
      title: "Merge Intervals",
      statementMd: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping",
      difficulty: "Medium",
      visitedCount: 650,
      createdAt: "2024-11-08",
      lastOpened: "2024-11-23",
    },
    {
      problemId: "9",
      title: "Climbing Stairs",
      statementMd: "You are climbing a staircase. It takes n steps to reach the top",
      difficulty: "Easy",
      visitedCount: 1350,
      createdAt: "2024-11-09",
      lastOpened: "2024-11-22",
    },
    {
      problemId: "10",
      title: "Edit Distance",
      statementMd: "Given two strings word1 and word2, return the minimum number of operations required",
      difficulty: "Hard",
      visitedCount: 380,
      createdAt: "2024-11-10",
      lastOpened: "2024-11-21",
    },
  ];

  const data = problems.length > 0 ? problems : defaultProblems;

  // Filter and search
  const filteredData = useMemo(() => {
    return data.filter((problem) => {
      const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.statementMd?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = !selectedDifficulty || problem.difficulty === selectedDifficulty;
      return matchesSearch && matchesDifficulty;
    });
  }, [data, searchQuery, selectedDifficulty]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProblems = filteredData.slice(startIndex, endIndex);

  const difficultyVariant = (d: string) => {
    switch ((d || "").toLowerCase()) {
      case "easy":
        return "secondary";
      case "medium":
        return "warning";
      case "hard":
        return "destructive";
      default:
        return "outline";
    }
  };

  const shortText = (md?: string, max = 140) => {
    if (!md) return "";
    const cleaned = md.replace(/^#+\s*/gm, "").replace(/`/g, "");
    return cleaned.length > max ? cleaned.slice(0, max).trim() + "…" : cleaned;
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Reset to page 1 when search or filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedDifficulty]);

  return (
    <div className="space-y-6 font-serif">
      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search style={{ color: 'var(--color-primary-light)', opacity: 0.6 }} className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
          <Input
            placeholder="Search problems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              backgroundColor: `color-mix(in srgb, var(--color-primary) 20%, transparent)`,
              borderColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
              color: 'var(--color-text-primary)'
            }}
            className="pl-10 focus:border-opacity-80 transition-colors font-serif placeholder-opacity-40"
          />
        </div>

        {/* Difficulty Filters */}
        <div className="flex flex-wrap gap-2">
          <span style={{ color: 'var(--color-primary-light)' }} className="text-sm font-medium self-center">Filter:</span>
          <Button
            variant={selectedDifficulty === null ? "default" : "outline"}
            size="sm"
            style={{
              backgroundColor: selectedDifficulty === null ? 'var(--color-primary)' : 'transparent',
              borderColor: 'var(--color-primary)',
              color: selectedDifficulty === null ? 'var(--color-text-primary)' : 'var(--color-primary-light)'
            }}
            onClick={() => setSelectedDifficulty(null)}
            className="font-serif hover:opacity-80"
          >
            All
          </Button>
          <Button
            variant={selectedDifficulty === "Easy" ? "default" : "outline"}
            size="sm"
            style={{
              backgroundColor: selectedDifficulty === "Easy" ? '#22c55e' : 'transparent',
              borderColor: selectedDifficulty === "Easy" ? '#22c55e' : 'var(--color-primary)',
              color: selectedDifficulty === "Easy" ? 'white' : 'var(--color-primary-light)'
            }}
            onClick={() => setSelectedDifficulty("Easy")}
            className="font-serif hover:opacity-80"
          >
            Easy
          </Button>
          <Button
            variant={selectedDifficulty === "Medium" ? "default" : "outline"}
            size="sm"
            style={{
              backgroundColor: selectedDifficulty === "Medium" ? 'var(--color-primary)' : 'transparent',
              borderColor: 'var(--color-primary)',
              color: selectedDifficulty === "Medium" ? 'var(--color-text-primary)' : 'var(--color-primary-light)'
            }}
            onClick={() => setSelectedDifficulty("Medium")}
            className="font-serif hover:opacity-80"
          >
            Medium
          </Button>
          <Button
            variant={selectedDifficulty === "Hard" ? "default" : "outline"}
            size="sm"
            style={{
              backgroundColor: selectedDifficulty === "Hard" ? '#ef4444' : 'transparent',
              borderColor: selectedDifficulty === "Hard" ? '#ef4444' : 'var(--color-primary)',
              color: selectedDifficulty === "Hard" ? 'white' : 'var(--color-primary-light)'
            }}
            onClick={() => setSelectedDifficulty("Hard")}
            className="font-serif hover:opacity-80"
          >
            Hard
          </Button>
        </div>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {currentProblems.length > 0 ? (
          currentProblems.map((problem) => (
            <Card
              key={problem.problemId}
              style={{
                borderColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
                backgroundColor: `color-mix(in srgb, var(--color-primary) 15%, transparent)`
              }}
              className="overflow-hidden hover:opacity-80 transition-all hover:shadow-lg cursor-pointer group font-serif"
              onClick={() => onProblemClick?.(problem.problemId)}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <CardTitle style={{ color: 'var(--color-text-primary)' }} className="group-hover:opacity-80 transition-opacity font-serif">{problem.title}</CardTitle>
                    <CardDescription style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="group-hover:opacity-90 transition-opacity font-serif">
                      {shortText(problem.statementMd, 120)}
                    </CardDescription>
                  </div>
                  <div className="shrink-0">
                    <Badge variant={difficultyVariant(problem.difficulty)} className="uppercase font-semibold font-serif">
                      {problem.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm" style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>
                  <div>
                    Solved: <span style={{ color: 'var(--color-text-primary)', opacity: 1 }} className="font-semibold">{problem.visitedCount ?? 0}</span>
                  </div>
                  <div className="text-xs">{problem.createdAt ? new Date(problem.createdAt).toLocaleDateString() : ""}</div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>No problems found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {currentProblems.length > 0 && (
        <div style={{
          borderColor: `color-mix(in srgb, var(--color-primary) 40%, transparent)`,
          backgroundColor: `color-mix(in srgb, var(--color-primary) 15%, transparent)`
        }} className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg border px-4 sm:px-6 py-4 font-serif">
          <div style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm text-center sm:text-left">
            Showing <span style={{ color: 'var(--color-text-primary)', opacity: 1 }} className="font-semibold">{startIndex + 1}</span> to{" "}
            <span style={{ color: 'var(--color-text-primary)', opacity: 1 }} className="font-semibold">{Math.min(endIndex, filteredData.length)}</span> of{" "}
            <span style={{ color: 'var(--color-text-primary)', opacity: 1 }} className="font-semibold">{filteredData.length}</span> problems
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              style={{
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary-light)'
              }}
              className="hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed font-serif"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                if (totalPages <= 5) return i + 1;
                if (currentPage <= 3) return i + 1;
                if (currentPage >= totalPages - 2) return totalPages - 4 + i;
                return currentPage - 2 + i;
              }).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  style={{
                    backgroundColor: currentPage === page ? 'var(--color-primary)' : 'transparent',
                    borderColor: 'var(--color-primary)',
                    color: currentPage === page ? 'var(--color-text-primary)' : 'var(--color-primary-light)'
                  }}
                  onClick={() => setCurrentPage(page)}
                  className="font-serif hover:opacity-80"
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              style={{
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary-light)'
              }}
              className="hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed font-serif"
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
