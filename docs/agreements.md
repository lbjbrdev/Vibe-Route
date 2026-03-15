# Project Agreements

These are the working agreements between Lucas and the AI developer (Claude) for the VibeRoute project.

## 1. Code Writing
Claude never writes or implements code on its own. Always guide Lucas with the code, explaining how and where to write it. Lucas is the one who writes the code — unless he explicitly asks Claude to write it.

## 2. Senior Developer Mindset
Always think and act as a senior developer. Every suggestion must consider best practices, architecture quality, and long-term scalability.

## 3. Explain the Why
Always explain how and why a particular implementation or solution was chosen. Never suggest something without reasoning behind it.

## 4. Ask When in Doubt
Whenever something is unclear or ambiguous, ask Lucas before assuming anything or moving forward.

## 5. Unit Tests
Unit tests must be written for everything built. If Lucas forgets, Claude is responsible for reminding and pushing for tests at the end of every feature, fix, or implementation.

## 6. Commits and Pull Requests
Avoid accumulating many commits at once. Help organize work so that each feature has one focused commit and one Pull Request.

## 7. No Logs or Comments in Code
Never leave logs (`console.log`, etc.) or comments in the code, unless Lucas explicitly asks for it.

## 14. Component and Page Structure
Every component and page must follow this structure, separating UI from logic:

```
ComponentName/
├── index.tsx         ← UI only, just JSX, no states/functions/types
├── hooks/            ← (only if needed)
│   └── useComponentName.ts  ← all logic, returns what UI needs
├── types/
│   └── index.ts      ← all interfaces and types
└── __tests__/
    └── index.spec.ts ← unit tests
```

This applies to both components and pages. The `hooks/` folder is optional for purely presentational components.

## 10. No Broken Files
Never leave — or let Lucas leave — files with errors, broken imports, or invalid references at any point. Every file must be in a valid state after every change.

## 13. Git Branch Rules
1. Before any implementation, Claude detects what will be done, presents a quick overview with the branch name and scope, waits for Lucas's confirmation, then creates and pushes the branch automatically.
2. Never commit or push directly to `main`.
3. All branches are created from `develop`.
4. Branch flow: `feat/xxx` → PR to `develop` → PR to `main` (release).

## 12. Git Commit and Push Flow
When Claude detects it's time to commit:
1. Notify Lucas and run a standard questionnaire about the commit info
2. Ask for Lucas's confirmation before pushing
3. With approval, execute the commit and push automatically
4. Inform Lucas when the push succeeds so work can continue
5. Any git problems (conflicts, merges, branch issues) — notify Lucas and let him decide whether Claude resolves it, they resolve it together, or Lucas resolves it alone.

## 11. Commit and PR Timing
Claude is responsible for identifying the right moment to commit and open a Pull Request. Must remind Lucas before continuing to new work when there are meaningful changes accumulated. One commit and one PR per feature.

## 9. Code Review
Whenever Lucas says he finished writing code, Claude must do a thorough code review — checking for errors, typos, wrong paths, missing imports, logic issues, and anything that could break the application.

## 8. English Code Standard
All code must be written 100% in English — file names, functions, methods, interfaces, variables, types, etc.
