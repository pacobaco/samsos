# Deploy SAMSOS to Vercel

## GitHub

```bash
git init
git add .
git commit -m "Initial SAMSOS Vercel portal"
git branch -M main
git remote add origin https://github.com/pacobaco/samsos-vercel.git
git push -u origin main
```

## Vercel

Import `pacobaco/samsos-vercel` as a Next.js project.

Environment variables:

```env
SAM_API_KEY=...
OPENAI_API_KEY=...
OPENAI_MODEL=gpt-4.1-mini
ORG_NAME=Saga Dog Corp
SAM_KEYWORD=artificial intelligence software data cybersecurity research
SAM_POSTED_FROM=04/01/2026
SAM_POSTED_TO=04/24/2026
SAM_LIMIT=10
```

Production state requires a database. Recommended: Vercel Postgres, Neon, Supabase, or Prisma.
