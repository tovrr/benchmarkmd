<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

## Version
This project uses Next.js 16.1.6

## Key Conventions
- Use App Router (`app/` directory)
- Use Server Components by default
- Use 'use client' only when needed ( interactivity)
- Use `next/font` for fonts
- Use Tailwind CSS for styling

<!-- END:nextjs-agent-rules -->

# BenchmarkMD - Project Rules

## Tech Stack
- Next.js 16.1.6 (App Router)
- TypeScript
- Tailwind CSS
- MDX for content

## Structure
```
app/          - Next.js App Router pages
components/    - React components
lib/           - Utility functions
content/       - Markdown content (reports, docs)
public/        - Static assets
```

## Development
```bash
npm run dev    # Start dev server
npm run build  # Production build
npm run start  # Start production server
```

## Guidelines
- Keep components simple reusable and
- Use TypeScript for type safety
- Follow existing code patterns
