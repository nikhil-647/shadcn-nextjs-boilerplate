'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Save, Copy, Share2, Clock } from 'lucide-react';
import { THEME_COLORS } from '@/components/theme-provider';

interface Solution {
    id: string;
    problemId: string;
    code: string;
    language: string;
    lastModified?: string;
    createdAt?: string;
}

interface Problem {
    problemId: string;
    title: string;
    description: string;
    difficulty: string;
    category?: string;
    lastOpened?: string;
}

export default function ProblemPage() {
    const params = useParams();
    const router = useRouter();
    const problemId = params.id as string;
    
    const [problem, setProblem] = useState<Problem | null>(null);
    const [solution, setSolution] = useState<Solution | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('python');
    const [isSaving, setIsSaving] = useState(false);

    // Mock problem data for demo
    const mockProblems: { [key: string]: Problem } = {
        '1': {
            problemId: '1',
            title: 'Two Sum',
            description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.',
            difficulty: 'Easy',
            category: 'Array',
            lastOpened: new Date().toISOString(),
        },
        '2': {
            problemId: '2',
            title: 'Longest Substring Without Repeating Characters',
            description: 'Given a string s, find the length of the longest substring without repeating characters.',
            difficulty: 'Medium',
            category: 'Sliding Window',
            lastOpened: new Date().toISOString(),
        },
        '3': {
            problemId: '3',
            title: 'Median of Two Sorted Arrays',
            description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
            difficulty: 'Hard',
            category: 'Array',
            lastOpened: new Date().toISOString(),
        },
    };

    useEffect(() => {
        const fetchProblem = async () => {
            try {
                setLoading(true);
                
                // Use mock data for now
                const mockProblem = mockProblems[problemId];
                if (mockProblem) {
                    setProblem(mockProblem);
                    setCode(`# Solution for ${mockProblem.title}\n\ndef solve():\n    pass\n`);
                } else {
                    setError('Problem not found');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (problemId) {
            fetchProblem();
        }
    }, [problemId]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            // TODO: Save to database
            console.log('Saving solution:', { problemId, code, language });
            // Mock save
            await new Promise(resolve => setTimeout(resolve, 500));
            alert('Solution saved successfully!');
        } catch (err) {
            console.error('Error saving solution:', err);
        } finally {
            setIsSaving(false);
        }
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy':
                return 'bg-green-600';
            case 'medium':
                return 'bg-amber-600';
            case 'hard':
                return 'bg-red-600';
            default:
                return 'bg-gray-600';
        }
    };

    if (loading) {
        return (
            <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen flex flex-col font-serif">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div style={{ color: 'var(--color-text-primary)' }}>Loading...</div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !problem) {
        return (
            <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen flex flex-col font-serif">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div style={{ color: 'var(--color-text-primary)', opacity: 0.5 }}>Error: {error || 'Problem not found'}</div>
                        <Button
                            onClick={() => router.back()}
                            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-primary)' }}
                            className="mt-4 font-serif hover:opacity-80"
                        >
                            Go Back
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen flex flex-col font-serif">
            <Navbar />
            
            <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
                    {/* Header with back button */}
                    <div className="mb-8 flex items-center justify-between">
                        <button
                            onClick={() => router.back()}
                            style={{ color: 'var(--color-primary-light)' }}
                            className="flex items-center gap-2 hover:opacity-80 transition-colors"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            Back to Problems
                        </button>
                        <div className="flex items-center gap-3">
                            <Badge className={getDifficultyColor(problem.difficulty)}>
                                {problem.difficulty}
                            </Badge>
                            {problem.category && (
                                <Badge variant="outline" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary-light)' }}>
                                    {problem.category}
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Problem Title and Description */}
                    <div style={{
                        borderColor: 'var(--color-primary)',
                        backgroundColor: `color-mix(in srgb, var(--color-primary) 15%, transparent)`
                    }} className="mb-8 rounded-lg border p-6">
                        <h1 style={{ color: 'var(--color-text-primary)' }} className="text-3xl font-bold mb-4">
                            {problem.title}
                        </h1>
                        <p style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-lg">
                            {problem.description}
                        </p>
                        <div className="mt-4 flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" style={{ color: 'var(--color-primary-light)' }} />
                                <span style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>
                                    Last visited: {problem.lastOpened ? new Date(problem.lastOpened).toLocaleDateString() : 'Never'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Code Editor Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Code Editor */}
                        <div className="lg:col-span-2">
                            <div style={{ borderColor: 'var(--color-primary)' }} className="rounded-lg border overflow-hidden">
                                {/* Language selector */}
                                <div style={{
                                    backgroundColor: `color-mix(in srgb, var(--color-primary) 15%, transparent)`,
                                    borderBottomColor: 'var(--color-primary)'
                                }} className="border-b px-4 py-3 flex items-center justify-between">
                                    <select
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        style={{
                                            backgroundColor: 'var(--color-bg)',
                                            color: 'var(--color-text-primary)',
                                            borderColor: 'var(--color-primary)'
                                        }}
                                        className="rounded px-3 py-2 text-sm font-serif border"
                                    >
                                        <option value="python">Python</option>
                                        <option value="javascript">JavaScript</option>
                                        <option value="java">Java</option>
                                        <option value="cpp">C++</option>
                                        <option value="csharp">C#</option>
                                        <option value="go">Go</option>
                                    </select>
                                </div>

                                {/* Code Area */}
                                <textarea
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    style={{
                                        backgroundColor: 'var(--color-bg)',
                                        color: 'var(--color-text-primary)',
                                        borderColor: 'var(--color-primary)'
                                    }}
                                    className="w-full h-96 p-4 font-mono text-sm border-none focus:outline-none focus:ring-2 resize-none"
                                    placeholder="// Write your solution here..."
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-4 flex gap-3">
                                <Button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    style={{
                                        backgroundColor: 'var(--color-primary)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                    className="flex items-center gap-2 font-serif hover:opacity-80"
                                >
                                    <Save className="h-4 w-4" />
                                    {isSaving ? 'Saving...' : 'Save Solution'}
                                </Button>
                                <Button
                                    onClick={handleCopyCode}
                                    variant="outline"
                                    style={{
                                        borderColor: 'var(--color-primary)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                    className="flex items-center gap-2 font-serif hover:opacity-80"
                                >
                                    <Copy className="h-4 w-4" />
                                    Copy Code
                                </Button>
                                <Button
                                    variant="outline"
                                    style={{
                                        borderColor: 'var(--color-primary)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                    className="flex items-center gap-2 font-serif hover:opacity-80"
                                >
                                    <Share2 className="h-4 w-4" />
                                    Share
                                </Button>
                            </div>
                        </div>

                        {/* Sidebar - Solution Info */}
                        <div>
                            <div style={{
                                borderColor: 'var(--color-primary)',
                                backgroundColor: `color-mix(in srgb, var(--color-primary) 15%, transparent)`
                            }} className="rounded-lg border p-6 space-y-6">
                                <div>
                                    <h3 style={{ color: 'var(--color-primary-light)' }} className="text-sm font-semibold mb-3 uppercase tracking-wide">
                                        Problem Stats
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>Difficulty:</span>
                                            <span style={{ color: 'var(--color-text-primary)' }}>{problem.difficulty}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: 'var(--color-text-primary)', opacity: 0.7 }}>Category:</span>
                                            <span style={{ color: 'var(--color-text-primary)' }}>{problem.category || 'N/A'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ borderTopColor: 'var(--color-primary)' }} className="border-t" />

                                <div>
                                    <h3 style={{ color: 'var(--color-primary-light)' }} className="text-sm font-semibold mb-3 uppercase tracking-wide">
                                        Hints
                                    </h3>
                                    <ul style={{ color: 'var(--color-text-primary)', opacity: 0.7 }} className="text-sm space-y-2 list-disc list-inside">
                                        <li>Try using a hash map to store values</li>
                                        <li>Consider the two-pointer approach</li>
                                        <li>Think about edge cases</li>
                                    </ul>
                                </div>

                                <div style={{ borderTopColor: 'var(--color-primary)' }} className="border-t" />

                                <div>
                                    <h3 style={{ color: 'var(--color-primary-light)' }} className="text-sm font-semibold mb-3 uppercase tracking-wide">
                                        Resources
                                    </h3>
                                    <div className="space-y-2">
                                        <a href="#" style={{ color: 'var(--color-primary-light)' }} className="block text-sm hover:opacity-80 transition-opacity">
                                            → LeetCode Discussion
                                        </a>
                                        <a href="#" style={{ color: 'var(--color-primary-light)' }} className="block text-sm hover:opacity-80 transition-opacity">
                                            → Video Solution
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}