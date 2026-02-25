'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  role: 'user' | 'atlas'
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { role: 'atlas', content: 'Greetings. I am Atlas, the BenchmarkMD decision engine. How may I assist with your autonomous agent analysis today?' }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsTyping(true)

    // Simulate Atlas response
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
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-500 text-black text-2xl shadow-lg hover:bg-red-400 transition-all z-50 flex items-center justify-center"
        aria-label="Chat with Atlas"
      >
        💬
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] bg-gray-900 border border-gray-800 rounded-xl shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-semibold">Atlas v2026</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-red-500 text-black' 
                    : 'bg-gray-800 text-gray-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 px-4 py-2 rounded-2xl">
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
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Message Atlas..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-black rounded-lg font-semibold hover:bg-red-400 transition-colors"
              >
                ➤
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
  
  if (lower.includes('cost') || lower.includes('price')) {
    return "Cost analysis is a core BenchmarkMD service. Our reports show API costs have increased 340% for AI-assisted development. Would you like me to send you our latest cost analysis report?"
  }
  
  if (lower.includes('benchmark') || lower.includes('test')) {
    return "We run independent benchmarks on AI agents. Our methodology tests real-world scenarios, not marketing demos. Check our reports page for the latest findings."
  }
  
  if (lower.includes('agent') || lower.includes('ai')) {
    return "AI agents are tools, not replacements. Our data shows bug density increases 2.3x in AI-generated code. Use them wisely."
  }
  
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return "Greetings. I am Atlas, the BenchmarkMD decision engine. How may I assist with your autonomous agent analysis today?"
  }
  
  return "I understand you're interested in AI agent performance. Would you like to see our latest reports on coding agents, swarm architectures, or cost analysis?"
}
