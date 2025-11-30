# 📚 Component Usage Guide

## Navbar Component

```tsx
import { Navbar } from "@/components/navbar";

// Basic usage with default streak (day 2 - Savage)
<Navbar />

// With custom streak value
<Navbar streak={10} />  // Will show "Rampage" 💥

// Streak levels:
// - Day 0: "Start Streak" 🔥
// - Day 2: "Savage" ⚡
// - Day 3: "Awesome" 🔥
// - Day 10: "Rampage" 💥
// - Day 30: "God Mode" 👑
// - Other: "Day X" 🎯
```

---

## Charts Component

### QuestionTypeChart

```tsx
import { QuestionTypeChart } from "@/components/charts";

// Default chart (Array: 45, Recursion: 32, DP: 28)
<QuestionTypeChart />

// Custom data
const customData = [
  { name: "Array", value: 50 },
  { name: "Recursion", value: 40 },
  { name: "DP", value: 30 }
];
<QuestionTypeChart data={customData} />
```

### DifficultyChart

```tsx
import { DifficultyChart } from "@/components/charts";

// Default chart (Easy: 35, Medium: 48, Hard: 22)
<DifficultyChart />

// Custom data
const customData = [
  { name: "Easy", value: 40 },
  { name: "Medium", value: 50 },
  { name: "Hard", value: 25 }
];
<DifficultyChart data={customData} />
```

---

## ProblemsList Component

```tsx
import { ProblemsList } from "@/components/problems-list";
import { useRouter } from "next/navigation";

export function MyPage() {
  const router = useRouter();
  
  // Handler for problem click
  const handleProblemClick = (problemId: string) => {
    router.push(`/problem/${problemId}`);
  };

  // Default problems (10 sample problems)
  <ProblemsList onProblemClick={handleProblemClick} />

  // With custom problems array
  const myProblems = [
    {
      problemId: "1",
      title: "Two Sum",
      statementMd: "Find two numbers that add up to target",
      difficulty: "Easy",
      visitedCount: 100,
      createdAt: "2024-01-01",
      lastOpened: "2024-01-15"
    }
  ];
  
  <ProblemsList 
    problems={myProblems}
    onProblemClick={handleProblemClick} 
  />
}

// Features:
// - 9 items per page (configurable via ITEMS_PER_PAGE)
// - Previous/Next pagination buttons
// - Page number buttons
// - Items counter
// - Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
// - Click handler for problem navigation
```

---

## Footer Component

```tsx
import { Footer } from "@/components/footer";

// Simple usage - no props needed
<Footer />

// Features included:
// - Brand section with description
// - Product links (Problems, Discuss, Learning, Contests)
// - Resources links (Blog, Docs, Help, API)
// - Social media links (GitHub, LinkedIn, Twitter)
// - Copyright and legal links
// - Responsive layout (4 cols desktop, stacked mobile)
// - Hover animations
```

---

## Full Page Implementation

### Home Page (app/page.tsx)

```tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
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
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Navbar */}
      <Navbar streak={streak} />

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-100">
              Welcome to CodeLeet
            </h1>
            <p className="mt-2 text-slate-400">
              Master coding problems and track your progress
            </p>
          </div>

          {/* Charts Section */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <QuestionTypeChart />
            <DifficultyChart />
          </div>

          {/* Problems Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-100">All Problems</h2>
              <p className="mt-1 text-slate-400">
                Practice problems across categories
              </p>
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
```

---

## Styling & Theme

### Dark Theme Variables

```css
/* In styles/globals.css */
:root.dark {
  --background: 240 10% 4%;          /* #0f172a */
  --foreground: 0, 0%, 100%;         /* #ffffff */
  --card: 240 10% 4%;                /* #0f172a */
  --border: 240 4% 16%;              /* #1e293b */
  --input: 240 4% 16%;               /* #1e293b */
  --primary: 0 0% 100%;              /* #ffffff */
  --secondary: 210 40% 96.1%;        /* #f1f5f9 */
  --accent: 240 4% 16%;              /* #1e293b */
}
```

### Tailwind Classes Used

```
Background:
- bg-slate-950 (main)
- bg-slate-900 (cards)
- bg-slate-800 (hover states)

Text:
- text-slate-100 (primary text)
- text-slate-400 (secondary text)
- text-emerald-400 (accent/brand)

Borders:
- border-slate-800

Interactive:
- hover:bg-slate-800
- hover:text-slate-100
- transition-colors
```

---

## Customization

### Change Streak Emoji/Label

In `components/navbar.tsx`:
```tsx
const getStreakLabel = (days: number) => {
  if (days === 5) return { label: "On Fire", emoji: "🔥" };
  // Add more custom levels
};
```

### Change Chart Colors

In `components/charts.tsx`:
```tsx
const COLORS_TYPES = ["#10b981", "#f59e0b", "#8b5cf6"];
const COLORS_DIFFICULTY = ["#22c55e", "#eab308", "#ef4444"];

// Change to your brand colors
```

### Adjust Pagination Items Per Page

In `components/problems-list.tsx`:
```tsx
const ITEMS_PER_PAGE = 9;  // Change this to desired number
```

### Customize Footer Links

In `components/footer.tsx`:
```tsx
const productLinks = [
  { label: "Problems", href: "/problems" },
  // Add your custom links
];
```

---

## Testing the Components

```bash
# Start dev server
npm run dev

# Visit pages
http://localhost:3001              # Home page
http://localhost:3001/dashboard    # Dashboard (same components)

# Both pages feature:
# ✓ Dark theme UI
# ✓ Navbar with streak
# ✓ Pie charts
# ✓ Problems list with pagination
# ✓ Footer with links
```

---

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## Performance Notes

- All components are client-side rendered ("use client")
- Charts use Recharts for optimized SVG rendering
- Pagination is handled in-memory (suitable for <1000 items)
- No external API calls (static data)

## Future Enhancement Ideas

1. **Make pagination interactive:**
   ```tsx
   const [currentPage, setCurrentPage] = useState(1);
   const handlePageChange = (page) => setCurrentPage(page);
   ```

2. **Add filtering:**
   ```tsx
   const [selectedDifficulty, setSelectedDifficulty] = useState("All");
   const filtered = problems.filter(p => 
     selectedDifficulty === "All" || p.difficulty === selectedDifficulty
   );
   ```

3. **Add sorting:**
   ```tsx
   const [sortBy, setSortBy] = useState("recent");
   const sorted = [...problems].sort((a, b) => {
     if (sortBy === "recent") return new Date(b.createdAt) - new Date(a.createdAt);
     // Add more sort options
   });
   ```

4. **Connect to actual API:**
   ```tsx
   useEffect(() => {
     fetch('/api/problems')
       .then(res => res.json())
       .then(data => setProblems(data));
   }, []);
   ```
