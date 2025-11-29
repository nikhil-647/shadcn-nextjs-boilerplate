┌────────────────────────┐
│        Users           │
├────────────────────────┤
│ PK: userId             │
│ name                   │
│ email                  │
│ authProvider           │
│ createdAt              │
└───────────┬────────────┘
            │ 1 : Many (User → Problems)
            │
            ▼
┌────────────────────────┐
│       Problems         │
├────────────────────────┤
│ PK:  problemId         │
│ userId   (FK → Users)  │
│ title                  │
│ statementMd            │
│ difficulty             │
│ tags[]                 │
│ visitedCount           │
│ lastOpened             │
│ createdAt              │
└───────────┬────────────┘
            │ 1 : Many (Problem → Solutions)
            │
            ▼
┌────────────────────────┐
│       Solutions        │
├────────────────────────┤
│ PK:  solutionId        │
│ problemId (FK)         │
│ userId   (optional FK) │
│ language               │
│ code                   │
│ lastUpdated            │
└────────────────────────┘
