# BenchmarkMD Roadmap - 2027

> "We measure. You decide."

## Vision

**North Star:** Make BenchmarkMD the trusted operational hub for AI agent performance by 2027.

> Verified telemetry over hype. Reproducible methodology. Actionable intelligence.

---

## Current Status (Feb 2026)

### ✅ Completed
| Feature | Status |
|---------|--------|
| Next.js 16 site on Vercel | ✅ Deployed |
| Mobile-responsive (hamburger menu) | ✅ |
| Atlas AI 2.5 chat widget | ✅ Enhanced with MLCommons/NIST/HELM |
| Benchmark tool | ✅ UI ready (simulated) |
| Reports section | ✅ 4 reports |
| Privacy/Terms pages | ✅ |
| SEO (metadata, JSON-LD, llm.txt) | ✅ |
| Vercel Analytics + Speed Insights | ✅ |
| llm.txt for AI discoverability | ✅ |

### 🚧 In Progress
- Legacy content migration from Jekyll site

---

## Phase P0 — Stabilize Foundations (0-30 days)

**Goal:** Eliminate rendering issues, establish workflow, migrate content.

### P0-A: Platform Integrity
- [ ] Smoke test for top 20 URLs
- [ ] Verify all internal links
- [ ] Add 404 page with helpful navigation
- [ ] Performance audit (Lighthouse)

### P0-B: Legacy Migration
- [ ] Import reports from Jekyll site (12+ reports)
- [ ] Import key docs: ATLAS.md, ARCHITECTURE.md
- [ ] Convert RULES.md → content/guidelines
- [ ] Import relevant scripts to `/scripts`

### P0-C: Data Provenance
- [ ] Add "SIMULATED" badge to benchmark tool (until real data)
- [ ] Add provenance markers in reports (source, date, confidence)
- [ ] Display data quality indicators

### P0-D: Content Enhancement
- [ ] Add more agents to benchmark tool (add OpenAI, Gemini, Llama)
- [ ] Add benchmark result history (localStorage for now)
- [ ] Add export functionality (JSON/CSV)

---

## Phase P1 — Build Trust Engine (30-90 days)

**Goal:** Real telemetry, test coverage, Atlas calibration.

### P1-A: Real Benchmark Execution
- [ ] Connect to LLM APIs (Anthropic, OpenAI)
- [ ] Remove simulation dependency
- [ ] Add confidence intervals (n≥5 iterations)
- [ ] Implement 4 pillars: Performance, Quality, Cost, Safety

### P1-B: Atlas AI Enhancement
- [ ] Connect to real benchmark data
- [ ] Implement 5-core skills:
  - Cost-Benefit Analysis
  - Anomaly Detection
  - Trend Forecasting
  - Risk Scoring (0-100)
  - Narrative Writing
- [ ] Add Memory Systems:
  - Decision Log
  - Prediction Log
  - Skill Audit
  - Agent Profiles

### P1-C: Testing & Quality
- [ ] Add unit tests (Vitest/Jest)
- [ ] Add integration tests for benchmark pipeline
- [ ] CI/CD smoke tests in GitHub Actions
- [ ] Weekly calibration reports

### P1-D: Documentation
- [ ] API documentation page
- [ ] Atlas methodology docs
- [ ] User guide for benchmark tool

---

## Phase P2 — Productize Intelligence (90-180 days)

**Goal:** Public API, agent profiles, monetization prep.

### P2-A: API Platform
- [ ] Public REST API (Vercel Serverless)
  - GET /api/benchmarks
  - GET /api/agents
  - GET /api/reports
- [ ] API authentication (API keys)
- [ ] API documentation with examples
- [ ] Rate limiting

### P2-B: Webhooks
- [ ] Webhook subscriptions for:
  - New reports published
  - Benchmark completed
  - Anomaly detected
- [ ] Webhook management UI

### P2-C: Agent Profiles
- [ ] Individual agent pages (Claude Code, Cursor, etc.)
- Trust scorecards
- Historical performance charts
- Comparison tools

### P2-D: Monetization Setup
- [ ] Stripe integration
- [ ] Tiered access:
  - **Free**: 5 benchmarks/month, basic reports
  - **Pro** ($29/mo): Unlimited benchmarks, exports, priority
  - **Enterprise**: API access, webhooks, SLA, support
- [ ] Waitlist for Pro (Formspree ready)

---

## Phase P3 — Controlled Autonomy (180+ days)

**Goal:** Safe autonomous actions, ecosystem growth.

### P3-A: Autonomous Features
- [ ] Policy-driven action engine
- [ ] Human-in-the-loop for critical recommendations
- [ ] Automated alert system

### P3-B: Ecosystem
- [ ] Partner API program
- [ ] External integrations (Slack, Discord webhooks)
- [ ] Verified contributor program
- [ ] GitHub integration (benchmarks from repos)

### P3-C: Community
- [ ] User accounts (auth)
- [ ] Saved benchmarks
- [ ] Public benchmark gallery
- [ ] Community reports

---

## 2027 Revenue Targets

| Scenario | ARR by Q4 2027 |
|----------|---------------|
| Conservative | $84,000 |
| Moderate | $252,000 |
| Aggressive | $720,000 |

### Revenue Model
```
Free Tier          → Acquisition (funnel top)
Pro ($29/mo)       → $20K-100K ARR target
Enterprise ($299+) → $50K-500K ARR target
```

---

## Key Milestones

| Month | Milestone | Success Metric |
|-------|-----------|----------------|
| Mar 2026 | Legacy migration complete | All reports imported |
| Apr 2026 | Real benchmark API | n≥5 iterations |
| May 2026 | Atlas 5-core skills live | Chat responds with real data |
| Jun 2026 | Public API launch | 100+ API requests/day |
| Jul 2026 | Agent profiles | 10+ agent pages |
| Sep 2026 | Stripe + Pro launch | First paying users |
| Nov 2026 | Webhooks for Enterprise | First webhook subscriber |
| Jan 2027 | 1,000 registered users | User growth 20%/mo |
| Jun 2027 | Enterprise deals | $50K+ contracts |
| Dec 2027 | Target ARR | $84K-720K |

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, TypeScript, Tailwind |
| Hosting | Vercel (Pro plan for serverless) |
| Analytics | Vercel Analytics, Speed Insights |
| Auth | NextAuth.js (future) |
| Payments | Stripe |
| Database | Vercel KV or PostgreSQL (future) |
| APIs | Vercel Serverless Functions |

---

## Dependencies (Legacy to Migrate)

From `C:\Projects\BenchmarkMD.ai\benchmarkmd.github.io`:

### Reports (12 files)
- ai-agent-trends-2026.md
- coding-myth.md
- ghost-task-inflation.md
- swarm-paradox.md
- UX_UI_MOBILE_AUDIT_2027.md
- SKILLRL_MOBILE_AUDIT.md
- And more...

### Documentation
- ATLAS.md → Atlas AI documentation
- ARCHITECTURE.md → System docs
- GO_TO_2027.md → This roadmap (merged)
- REVENUE_PROJECTION_2027.md → Business plan

### Scripts
- Automation scripts → `/scripts`

---

## Immediate Next Actions

1. [ ] Import legacy reports to `/reports`
2. [ ] Add 404 page
3. [ ] Add more agents to benchmark tool
4. [ ] Smoke test all routes
5. [ ] Plan real LLM API integration

---

## References

- Legacy site: `C:\Projects\BenchmarkMD.ai\benchmarkmd.github.io`
- Atlas 2.0 spec: `docs/ATLAS.md`
- 2027 Plan: `docs/GO_TO_2027.md`
- Revenue: `docs/REVENUE_PROJECTION_2027.md`

---

*Last updated: February 2026*
*Owner: Kartal42 / iClaw*
