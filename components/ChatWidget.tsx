'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  role: 'user' | 'atlas'
  content: string
}

const quickActions = [
  { label: 'Run Benchmark', action: 'How do I run a benchmark?' },
  { label: 'Cost Analysis', action: 'Tell me about cost analysis' },
  { label: 'Latest Reports', action: 'What are your latest reports?' },
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'atlas', content: 'Greetings. I am Atlas, the BenchmarkMD decision engine. How may I assist with your autonomous agent analysis today?' }
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

    // Simulate Atlas response
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, {
        role: 'atlas',
        content: getAtlasResponse(userMessage)
      }])
    }, 1200)
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-500 text-black shadow-lg hover:bg-red-400 transition-all z-50 flex items-center justify-center"
        aria-label={isOpen ? 'Close Atlas chat' : 'Chat with Atlas'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-gray-900 border border-gray-800 rounded-xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-2 fade-in duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-800/50 rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></span>
              </div>
              <div>
                <span className="font-semibold text-white">Atlas AI</span>
                <span className="text-xs text-gray-500 ml-2">2.5</span>
              </div>
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
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-red-500 text-black font-medium' 
                    : 'bg-gray-800 text-gray-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Quick Actions */}
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
                placeholder="Ask Atlas..."
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
  
  if (lower.includes('benchmark') || lower.includes('run') || lower.includes('test')) {
    return "Our benchmark tool tests AI agents on real-world coding tasks. You can configure parameters like model, temperature, and task complexity. Results include code quality, cost, and execution time. Visit /tool to start."
  }
  
  if (lower.includes('cost') || lower.includes('price') || lower.includes('expensive')) {
    return "Cost analysis is core to our service. We've found API costs increased 340% for AI-assisted development. Our tool calculates per-task costs so you can make informed decisions. Check our Reports page for detailed analysis."
  }
  
  if (lower.includes('report') || lower.includes('latest') || lower.includes('find')) {
    return "Our reports cover: AI agent trends, coding myths, ghost task inflation, and the swarm paradox. Each report provides independent analysis without vendor influence. Visit /reports to browse."
  }
  
  if (lower.includes('agent') || lower.includes('ai')) {
    return "AI agents are powerful tools but not replacements for developers. Our data shows a 2.3x bug density increase in AI-generated code. Use them wisely — always review and test thoroughly."
  }
  
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('greet')) {
    return "Greetings. I am Atlas, BenchmarkMD's decision engine. Ask me about benchmarks, cost analysis, or browse our reports. How can I assist?"
  }
  
  if (lower.includes('compare') || lower.includes('versus') || lower.includes('vs')) {
    return "We support comparative analysis between AI agents. Our tool runs identical tasks across different models and measures cost, speed, and quality. Results help you choose the right agent for your needs."
  }
  
  if (lower.includes('methodology') || lower.includes('how') || lower.includes('work')) {
    return "Our methodology: 1) Define real-world tasks 2) Run across multiple AI agents 3) Measure output quality, cost, and latency 4) Generate independent reports. We don't accept sponsored placements."
  }
  
  return "I can help with benchmark tool usage, cost analysis, or guide you to our reports. What aspect of AI agent performance interests you most?"
}
