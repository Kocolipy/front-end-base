# Graph Report - front-end  (2026-09-07)

## Corpus Check
- 34 files · ~10,371 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 333 nodes · 338 edges · 51 communities (25 shown, 26 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `39c98d93`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- stryker.config.json
- home.tsx
- compilerOptions
- compilerOptions
- scripts
- components.json
- include
- package.json
- sources.ts
- Testing Guide
- devDependencies
- ignorePatterns
- Architecture
- @eslint/js
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- fallow
- globals
- happy-dom
- AGENTS.md
- @playwright/test
- prettier
- @stryker-mutator/core
- @stryker-mutator/vitest-runner
- tailwindcss
- @tailwindcss/vite
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @types/node
- @types/react
- @types/react-dom
- typescript
- typescript-eslint
- @vitejs/plugin-react-swc
- vitest
- @vitest/ui
- prettier.config.mjs
- front-end
- Graphify Runner
- CLAUDE.md
- eslint

## God Nodes (most connected - your core abstractions)
1. `scripts` - 19 edges
2. `compilerOptions` - 19 edges
3. `compilerOptions` - 15 edges
4. `cn()` - 11 edges
5. `mutate` - 11 edges
6. `ignorePatterns` - 9 edges
7. `front-end` - 9 edges
8. `Testing Guide` - 8 edges
9. `Architecture` - 7 edges
10. `tailwind` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Button()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/button.tsx → src/lib/utils.ts
- `Card()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardTitle()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardDescription()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (51 total, 26 thin omitted)

### Community 0 - "stryker.config.json"
Cohesion: 0.05
Nodes (41): clear-text, html, json, progress, !src/components/ui/**, src/components/ui/** is vendored placeholder code, due to be deleted when the in-house shadcn package is published. Its mutants are edits to Tailwind class strings, and killing them means pinning assertions to markup that is about to be replaced., !src/**/*.d.ts, !src/main.tsx (+33 more)

### Community 1 - "home.tsx"
Cohesion: 0.16
Nodes (13): App(), Button(), ButtonProps, buttonVariants, Card(), CardContent(), CardDescription(), CardFooter() (+5 more)

### Community 2 - "compilerOptions"
Cohesion: 0.07
Nodes (29): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, baseUrl, isolatedModules (+21 more)

### Community 3 - "compilerOptions"
Cohesion: 0.09
Nodes (21): ES2023, playwright.config.ts, vite.config.ts, vitest.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib (+13 more)

### Community 4 - "scripts"
Cohesion: 0.11
Nodes (19): scripts, analyze, build, dev, format, format:check, lint, preview (+11 more)

### Community 5 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 6 - "include"
Cohesion: 0.11
Nodes (16): test/e2e/**, @testing-library/jest-dom, ./tsconfig.json, vite/client, vitest/globals, compilerOptions, types, exclude (+8 more)

### Community 7 - "package.json"
Cohesion: 0.12
Nodes (15): class-variance-authority, clsx, dependencies, class-variance-authority, clsx, react, react-dom, tailwind-merge (+7 more)

### Community 8 - "sources.ts"
Cohesion: 0.20
Nodes (11): blankComments(), files, sources, configSource, routes, testFiles, readSource(), readSources() (+3 more)

### Community 9 - "Testing Guide"
Cohesion: 0.13
Nodes (14): Architecture tests, Assert exactly, not loosely, Coverage excludes — why the list is explicit, E2E, Fallow, Flakiness — the rules that keep these tests green, Mutation testing, Prove a new rule fails (+6 more)

### Community 10 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, dependency-cruiser, vite, vite-plugin-compression2, @vitest/coverage-v8, dependency-cruiser, vite, vite-plugin-compression2 (+1 more)

### Community 11 - "ignorePatterns"
Cohesion: 0.22
Nodes (9): .agents, artifacts, .claude, coverage, dist, graphify-out, playwright-report, test-results (+1 more)

### Community 12 - "Architecture"
Cohesion: 0.18
Nodes (10): Architecture, Build, Dev-server reloads, Styling and the token pipeline, The `@/` alias, The four layers, What is deliberately absent, Why `components/ui/` is fenced off (+2 more)

### Community 19 - "AGENTS.md"
Cohesion: 0.20
Nodes (8): Architecture, Commands, Component library, Fallow, graphify, Semgrep, Testing, TypeScript

### Community 47 - "front-end"
Cohesion: 0.20
Nodes (9): Agent tooling, Component library, front-end, Project structure, Scripts, Setup, Styling, Technology stack (+1 more)

### Community 48 - "Graphify Runner"
Cohesion: 0.50
Nodes (3): Graphify Runner, Reporting, Steps

## Knowledge Gaps
- **210 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+205 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **26 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `fallow`, `globals`, `happy-dom`, `@playwright/test`, `prettier`, `@stryker-mutator/core`, `@stryker-mutator/vitest-runner`, `tailwindcss`, `@tailwindcss/vite`, `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`, `typescript-eslint`, `@vitejs/plugin-react-swc`, `vitest`, `@vitest/ui`, `eslint`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _210 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `stryker.config.json` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._