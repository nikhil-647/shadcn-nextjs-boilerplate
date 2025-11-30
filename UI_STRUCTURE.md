# 🎨 Dark Theme UI - Visual Structure

## Page Layout

```
┌─────────────────────────────────────────────────────────┐
│                    NAVBAR                               │
│  CodeLeet        [⚡ Savage - Day 2]        [☰ Menu]    │
└─────────────────────────────────────────────────────────┘
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                  Welcome to CodeLeet                │ │
│  │     Master coding problems and track progress      │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
│  ┌────────────────────┐  ┌────────────────────┐          │
│  │  Question Types    │  │  Difficulty Level  │          │
│  │    (Pie Chart)     │  │    (Pie Chart)     │          │
│  │ Array: 45          │  │ Easy: 35           │          │
│  │ Recursion: 32      │  │ Medium: 48         │          │
│  │ DP: 28             │  │ Hard: 22           │          │
│  └────────────────────┘  └────────────────────┘          │
│                                                           │
│  ┌─────────────────────────────────────────────────────┐ │
│  │               All Problems                          │ │
│  │  Practice problems across different categories     │ │
│  │                                                     │ │
│  │  ┌──────────────┐ ┌──────────────┐ ┌─────────────┐ │ │
│  │  │ Two Sum      │ │ Longest      │ │ Median of  │ │ │
│  │  │ Easy [EASY]  │ │ Substring    │ │ Two Sorted │ │ │
│  │  │ V: 1250      │ │ Medium [MED] │ │ Hard [HARD]│ │ │
│  │  └──────────────┘ └──────────────┘ └─────────────┘ │ │
│  │                  ... (9 items per page)            │ │
│  │  ┌──────────────────────────────────────────────┐  │ │
│  │  │ Showing 1 to 9 of 10 problems                │  │ │
│  │  │ [< Prev] [1] [2] [Next >]                    │  │ │
│  │  └──────────────────────────────────────────────┘  │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                           │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                    FOOTER                               │
│                                                           │
│  CodeLeet           Product          Resources    Follow │
│  Master coding      • Problems       • Blog       • GH   │
│  problems & level   • Discuss        • Docs       • IN   │
│  up your skills     • Learning       • Help       • TW   │
│                     • Contests       • API              │
│                                                           │
│  © 2024 CodeLeet | Privacy | Terms | Contact            │
└─────────────────────────────────────────────────────────┘
```

## Color Palette

### Dark Theme Colors
```
Primary Background:    #0f172a (slate-950)
Secondary Background:  #1e293b (slate-900)
Tertiary Background:   #334155 (slate-800)
Border:               #1e293b (slate-800)

Primary Text:         #f1f5f9 (slate-100)
Secondary Text:       #94a3b8 (slate-400)
Accent (Brand):       #10b981 (emerald-400)

Chart Colors:
  - Question Types: #10b981 (green), #f59e0b (amber), #8b5cf6 (purple)
  - Difficulty: #22c55e (lime), #eab308 (yellow), #ef4444 (red)
```

## Component Tree

```
app/
├── page.tsx (Home - with all components)
├── dashboard/
│   └── page.tsx (Dashboard - with all components)
└── layout.tsx (Root layout with dark theme)

components/
├── navbar.tsx
│   └── Features:
│       - Brand logo
│       - Dynamic streak tracker
│       - Menu button
│
├── charts.tsx
│   ├── QuestionTypeChart (Pie chart)
│   └── DifficultyChart (Pie chart)
│
├── problems-list.tsx
│   └── Features:
│       - 3-column grid (responsive)
│       - Problem cards with metadata
│       - Pagination UI (Previous/Next, page numbers)
│       - Items counter
│
├── footer.tsx
│   └── Features:
│       - 4-column layout
│       - Brand section
│       - Product/Resources links
│       - Social media icons
│       - Copyright & legal links
│
└── ui/
    ├── card.tsx
    ├── badge.tsx
    ├── button.tsx
    └── ... (shadcn components)
```

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Full-width cards
- Stacked navigation
- Stacked footer sections
- Charts full width

### Tablet (768px - 1024px)
- 2 column problems grid
- Sidebar-friendly layout
- Charts side by side

### Desktop (> 1024px)
- 3 column problems grid
- Full navigation bar
- All features accessible
- Optimal spacing

## Interactive Elements

### Navbar
- Streak indicator changes based on day count
- Menu button hover state: bg-slate-800 → text-slate-100
- Logo in accent green (emerald-400)

### Problem Cards
- Hover effect: border changes, shadow appears
- Clickable: opens problem detail page
- Difficulty badges with color coding

### Pagination
- Previous/Next buttons:
  - Active: clickable with hover
  - Disabled: reduced opacity when at boundary
- Page numbers: current page highlighted in emerald-600
- Counter shows current range

### Footer
- Links: hover → text-emerald-400 transition
- Social icons: hover → bg-slate-700, text-emerald-400
- Smooth transitions (150ms)

## Accessibility

- ✅ High contrast ratios (WCAG AA compliant)
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Disabled state indicators
- ✅ Proper alt text ready for images
- ✅ Focus states on interactive elements

## Dark Theme Benefits

1. **Eye Comfort** - Reduced eye strain in low-light environments
2. **Battery Efficiency** - Lower power consumption on OLED screens
3. **Modern Aesthetic** - Current design trend favored by developers
4. **Professional Look** - Suitable for coding/learning platforms
5. **Branding** - Emerald accent stands out on dark background
