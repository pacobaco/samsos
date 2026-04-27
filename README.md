# SAMSOS Vercel Portal

Vercel-hosted SAM.gov opportunity intelligence, proposal drafting, and submission tracking portal for Saga Dog Corp.

## Install

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy

```bash
npm install -g vercel
vercel
vercel --prod
```

## Environment

```env
SAM_API_KEY=your_sam_gov_api_key
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4.1-mini
ORG_NAME=Saga Dog Corp
SAM_KEYWORD=artificial intelligence software data cybersecurity research
SAM_POSTED_FROM=04/01/2026
SAM_POSTED_TO=04/24/2026
SAM_LIMIT=10
```

## Routes

- `/` dashboard
- `/opportunities` ranked opportunities
- `/opportunities/[noticeId]` detail, requirements, procedure
- `/submissions` tracker
- `/reports/monthly` monthly report
- `/api/opportunities/fetch`
- `/api/opportunities/rank`
- `/api/proposals/generate`
- `/api/submissions`
- `/api/reports/monthly`

## Production Note

This scaffold uses in-memory demo state so it deploys cleanly to Vercel. For persistence, replace `lib/store.ts` with Vercel Postgres, Neon, Supabase, or Prisma.
