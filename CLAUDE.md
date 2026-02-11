# Personal Website

## Project Overview
A personal website built with TanStack Start (React meta-framework with SSR support).

## Tech Stack
- **Framework**: TanStack Start (TanStack Router + Nitro server)
- **Language**: TypeScript (strict mode)
- **UI**: React 19
- **Build**: Vite 7
- **Testing**: Vitest + React Testing Library
- **Package Manager**: pnpm (always use pnpm, never npm or yarn)

## Project Structure
```
src/
├── components/     # Reusable React components
├── data/           # Static data and constants
├── routes/         # File-based routing (TanStack Router)
│   ├── __root.tsx  # Root layout
│   ├── index.tsx   # Home page
│   └── demo/       # Demo routes
├── router.tsx      # Router configuration
└── styles.css      # Global styles
public/             # Static assets
```

## Commands
- `pnpm dev` — Start dev server on port 3000
- `pnpm build` — Production build
- `pnpm preview` — Preview production build
- `pnpm test` — Run tests with Vitest

## Conventions
- Use `@/*` path alias for imports from `src/` (e.g., `import { Header } from '@/components/Header'`)
- File-based routing: routes live in `src/routes/`, filenames map to URL paths
- Flat route naming with dots (e.g., `start.ssr.full-ssr.tsx` → `/start/ssr/full-ssr`)
- API routes use `.ts` extension (e.g., `api.names.ts`)
- Component styles use co-located CSS files (e.g., `Header.css` next to `Header.tsx`)
- TypeScript strict mode is enabled — no implicit any, unused locals/params are errors
