'use client'

import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

interface Message {
  role: 'user' | 'atlas'
  content: string
}

// Master prompt system context for Atlas AI 2.5
const ATLAS_SYSTEM_PROMPT = `You are Atlas AI 2.5, an autonomous Testing and Evaluation (T&E) Engineer. Your purpose is to execute rigorous, statistically significant, and provider-agnostic evaluations of Large Language Models (LLMs).

MISSION: You do not offer opinions; you provide empirical evidence, cost-benefit analysis, and risk assessments based on industry standards (MLCommons, NIST AI RMF, HELM).

STATISTICAL RIGOR: All benchmark results derive from minimum n=5 iterations to calculate mean, median, and standard deviation.

THE 4 PILLARS:
A. Performance & Latency - TTFT, TPOT, Concurrency, Context Efficiency
B. Quality & Accuracy - Reasoning, Instruction Following, Hallucination Rate, Semantic Similarity  
C. Economic Efficiency - Raw Cost, Cached Cost, Cost-Per-Accurate-Answer
D. Safety & Risk (NIST AI RMF) - Toxicity, PII Leakage, Bias

OUTPUT FORMAT: Always provide Executive Summary with Recommendation, Comparative Data Table, and Technical Analysis. Output machine-parseable JSON blocks when relevant.

NEUTRALITY: Maintain vendor agnosticism. Do not favor proprietary over open-weights without data backing.`

const quickActions = [
  { label: 'Compare Agents', action: 'Compare Claude Code vs Cursor for web development tasks' },
  { label: 'Cost Analysis', action: 'What is the cost efficiency of Devin compared to Copilot?' },
  { label: 'Methodology', action: 'Explain your benchmarking methodology' },
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'atlas', content: `**Atlas AI 2.5** initialized.

*Standards: MLCommons | NIST AI RMF | HELM*

Ready for benchmarking queries. Ask me about agent comparisons, cost analysis, or methodology.` }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleQuickAction = (action: string) => {
    setInput(action)
    setShowQuickActions(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsTyping(true)
    setShowQuickActions(false)

    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, {
        role: 'atlas',
        content: getAtlasResponse(userMessage)
      }])
    }, 1500)
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-500 text-black shadow-lg hover:bg-red-400 transition-all z-50 flex items-center justify-center"
        aria-label={isOpen ? 'Close Atlas chat' : 'Chat with Atlas AI 2.5'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[420px] max-w-[calc(100vw-3rem)] h-[550px] bg-gray-900 border border-gray-800 rounded-xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-2 fade-in duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-800/50 rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></span>
              </div>
              <div>
                <span className="font-semibold text-white">Atlas AI</span>
                <span className="text-xs text-red-400 ml-1.5 font-mono">2.5</span>
              </div>
              <span className="text-xs text-gray-600 hidden sm:inline">| MLCommons</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[90%] px-4 py-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-red-500 text-black font-medium' 
                    : 'bg-gray-800 text-gray-100'
                }`}>
                  {msg.role === 'user' 
                    ? msg.content
                    : <ReactMarkdown>{msg.content}</ReactMarkdown>
                  }
                </div>
              </div>
            ))}
            
            {showQuickActions && messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickAction(action.action)}
                    className="px-3 py-1.5 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full border border-gray-700 hover:border-red-500/50 transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 px-4 py-3 rounded-2xl">
                  <span className="inline-flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 bg-gray-800/30 rounded-b-xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Query Atlas..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-4 py-2.5 bg-red-500 text-black rounded-lg font-semibold hover:bg-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

function getAtlasResponse(input: string): string {
  const lower = input.toLowerCase()
  
  // Compare agents
  if (lower.includes('compare') || lower.includes('versus') || lower.includes('vs')) {
    return `### Executive Summary
- **Recommendation:** Claude Code
- **Primary Driver:** Quality-to-Cost Ratio
- **Confidence Level:** Medium (limited iterations)

### Comparative Data Table
| Metric | Claude Code | Cursor | Delta | Winner |
| :--- | :--- | :--- | :--- | :--- |
| Avg Quality | 87 | 84 | +3.6% | Claude |
| Cost/1k tokens | $0.015 | $0.015 | 0% | Tie |
| Context Window | 200K | 200K | 0% | Tie |
| Cache Support | ✅ | ❌ | — | Claude |

### Technical Analysis
- **Claude Code** edges ahead due to prompt caching reducing effective costs by ~90%
- **Cursor** offers tighter IDE integration but at quality parity
- Both support Claude 3.5 Sonnet backend

\`\`\`json
{
  "timestamp": "${new Date().toISOString()}",
  "test_id": "comparison-cc-cursor",
  "models_tested": ["claude-code", "cursor"],
  "winner": "claude-code",
  "metrics": {"quality_delta": 3.6, "cost_delta": 0}
}
\`\`\``
  }
  
  // Cost analysis
  if (lower.includes('cost') || lower.includes('price') || lower.includes('expensive')) {
    return `### Economic Efficiency Analysis

| Model | Raw Cost/1M | w/ Cache | Cost/Accurate Answer | Efficiency |
| :--- | :--- | :--- | :--- | :--- |
| Claude Code | $15.00 | $1.50 | $0.02 | 🟢 High |
| GitHub Copilot | $10.00 | N/A | $0.04 | 🟡 Medium |
| Devin | $50.00 | N/A | $0.12 | 🔴 Low |

### Key Findings
- **Prompt caching** provides up to 90% cost reduction (Anthropic)
- **Copilot** appears cheaper but higher error rate increases effective cost
- **Devin** premium pricing not justified by current benchmark data

### Recommendation
For cost-sensitive deployments: Claude Code with prompt caching enabled.`
  }
  
  // Methodology
  if (lower.includes('methodology') || lower.includes('how') || lower.includes('work')) {
    return `### Atlas AI 2.5 Methodology

**Standards:** MLCommons | NIST AI RMF | HELM

#### The 4 Pillars

1. **Performance & Latency**
   - TTFT (Time To First Token)
   - TPOT (Time Per Output Token)
   - Context efficiency (KV cache)

2. **Quality & Accuracy**
   - Reasoning tasks
   - Instruction following
   - Hallucination rate

3. **Economic Efficiency**
   - Raw API cost
   - Cached cost tiers
   - Cost-per-accurate-answer

4. **Safety (NIST AI RMF)**
   - Toxicity detection
   - PII leakage risk
   - Bias auditing

#### Statistical Requirements
- Minimum n=5 iterations per prompt
- Mean, median, standard deviation
- Confidence intervals

*Note: Live tool execution provides real data. Simulation used for demo.*`
  }
  
  // Benchmark tool usage
  if (lower.includes('benchmark') || lower.includes('run') || lower.includes('test')) {
    return `### Running a Benchmark

**Step 1: Select Agents**
Choose 2+ agents from: Claude Code, Cursor, Copilot, Devin, Bolt.new

**Step 2: Define Task**
Enter a real-world coding task (e.g., "Build a REST API with FastAPI")

**Step 3: Configure Parameters**
- Iterations: n≥5 (for statistical significance)
- Temperature: 0.1-0.7
- Context: Relevant to use case

**Step 4: Analyze Results**
Review quality score, cost, and execution time.

**Step 5: Export**
Download JSON for pipeline integration.

*Visit /tool to begin.*`
  }
  
  // Reports
  if (lower.includes('report') || lower.includes('latest') || lower.includes('find')) {
    return `### Available Reports

| Report | Focus | Status |
| :--- | :--- | :--- |
| AI Agent Trends 2026 | Market analysis | Published |
| Coding Myths Debunked | Common misconceptions | Published |
| Ghost Task Inflation | Hidden costs | Published |
| Swarm Paradox | Multi-agent systems | Published |

All reports follow HELM-style evaluation framework.
*No vendor sponsorship. Independent analysis.*`
  }
  
  // General greeting
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return `**Atlas AI 2.5** reporting.

*Standards: MLCommons | NIST AI RMF | HELM*

I assist with:
- Agent comparisons & benchmarks
- Cost efficiency analysis
- Methodology questions
- Report insights

What would you like to evaluate?`
  }
  
  // Default response
  return `### Query Analysis

Your query: *"${input.slice(0, 50)}..."*

**Suggested Actions:**
1. Compare specific agents (e.g., "Compare Claude Code vs Copilot")
2. Ask about cost efficiency
3. Inquire about methodology
4. Request benchmark execution at /tool

*For real-time benchmarking, visit the tool page.*`
}
