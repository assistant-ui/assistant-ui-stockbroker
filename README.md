# Stockbroker Human in the Loop

A monorepo-style project with `frontend` and `backend` directories. The frontend is a Next.js app providing a chat interface to interact with a LangGraph-powered stockbroker agent.

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4, assistant-ui
- **Backend**: LangGraph.js, LangChain, OpenAI GPT-4o
- **Tooling**: pnpm, Turborepo, Biome (lint + format)

## Setup

Install dependencies from the root:

```bash
pnpm install
```

## Environment Variables

### Backend

Create a `.env` file in `./backend`:

```bash
# Required
OPENAI_API_KEY=
FINANCIAL_DATASETS_API_KEY=
TAVILY_API_KEY=

# Optional - LangSmith tracing
LANGCHAIN_API_KEY=
LANGCHAIN_TRACING_V2=true
LANGCHAIN_CALLBACKS_BACKGROUND=true
```

Get your API keys:

- [OpenAI](https://platform.openai.com/signup)
- [Financial Datasets AI](https://financialdatasets.ai/)
- [Tavily](https://tavily.com/)

### Frontend

Create a `.env.local` file in `./frontend`:

```bash
# Required - LangGraph API proxy (server-side)
LANGGRAPH_API_URL=http://localhost:2024

# Required - Graph ID to run (client-side)
NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID=stockbroker

# Optional - LangSmith API key for authenticated proxy requests
LANGCHAIN_API_KEY=
```

## Development

Start both frontend and backend simultaneously:

```bash
pnpm dev
```

Or start them separately:

```bash
# Backend (LangGraph Dev Server on http://localhost:2024)
cd backend && pnpm dev

# Frontend (Next.js on http://localhost:3000)
cd frontend && pnpm dev
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start frontend + backend in parallel |
| `pnpm build` | Build all packages |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |
| `pnpm check` | Lint + format with Biome |
| `pnpm deps:check` | Check for outdated root deps |
| `pnpm deps:check:repo` | Check for outdated deps in all packages |
| `pnpm deps:update` | Update root deps |
| `pnpm deps:update:repo` | Update all deps across the monorepo |

## LangGraph Config

The LangGraph configuration is at [`./backend/langgraph.json`](./backend/langgraph.json), defining the `stockbroker` graph.
