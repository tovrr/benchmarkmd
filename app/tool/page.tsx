'use client'

import { useState } from 'react'

interface BenchmarkResult {
  agent: string
  quality: number
  cost: number
  time: number
  output?: string
}

const AGENTS = [
  { id: 'claude-code', name: 'Claude Code', provider: 'Anthropic', model: 'claude-3-5-sonnet-20241022', quality: 87, costPer1k: 0.015 },
  { id: 'cursor', name: 'Cursor', provider: 'Anysphere', model: 'claude-3-5-sonnet', quality: 84, costPer1k: 0.015 },
  { id: 'copilot', name: 'GitHub Copilot', provider: 'Microsoft', model: 'gpt-4o', quality: 78, costPer1k: 0.01 },
  { id: 'devin', name: 'Devin', provider: 'Cognition', model: 'devin-2', quality: 71, costPer1k: 0.05 },
  { id: 'bolt', name: 'Bolt.new', provider: 'StackBlitz', model: 'claude-3-5-sonnet', quality: 68, costPer1k: 0.015 },
]

export default function BenchmarkToolPage() {
  const [selectedAgent, setSelectedAgent] = useState<string>('')
  const [task, setTask] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [result, setResult] = useState<BenchmarkResult | null>(null)
  const [error, setError] = useState('')

  const runBenchmark = async () => {
    if (!selectedAgent || !task) {
      setError('Please select an agent and enter a task')
      return
    }

    setError('')
    setIsRunning(true)
    setResult(null)

    // Simulate benchmark (in production, this would call actual AI APIs)
    await new Promise(resolve => setTimeout(resolve, 2000))

    const agent = AGENTS.find(a => a.id === selectedAgent)!
    
    // Simulate results based on agent quality
    const baseQuality = agent.quality
    const quality = Math.max(50, Math.min(100, baseQuality + (Math.random() * 20 - 10)))
    const cost = (Math.random() * 3 + 1).toFixed(2)
    const time = Math.floor(Math.random() * 60 + 30)

    setResult({
      agent: agent.name,
      quality: Math.round(quality),
      cost: parseFloat(cost),
      time,
      output: `// Sample output for: ${task.slice(0, 30)}...\n// This is simulated benchmark output\n// Quality: ${Math.round(quality)}/100\n// In production, this would be actual generated code`
    })

    setIsRunning(false)
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Benchmark Tool</h1>
        <p className="text-gray-400 mb-8">
          Test AI agents on real-world tasks. Get instant quality, cost, and time analysis.
        </p>

        {/* Beta Notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-2 text-yellow-400">
            <span>⚠️</span>
            <span className="font-semibold">Beta</span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            This tool is in beta. Results are simulated for demonstration.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 text-red-400">
            {error}
          </div>
        )}

        {/* Agent Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Select Agent</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {AGENTS.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
                className={`p-4 rounded-xl border transition-colors text-left ${
                  selectedAgent === agent.id
                    ? 'bg-red-500/10 border-red-500 text-white'
                    : 'bg-gray-900 border-gray-800 hover:border-red-500/50'
                }`}
              >
                <div className="font-semibold">{agent.name}</div>
                <div className="text-sm text-gray-500">{agent.provider}</div>
                <div className="mt-2 text-xs text-gray-600">
                  Avg Quality: {agent.quality}/100
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Task Input */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Enter Task</h2>
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="e.g., Write a Python REST API with FastAPI that handles user authentication..."
            className="w-full h-32 bg-gray-900 border border-gray-800 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Run Button */}
        <button
          onClick={runBenchmark}
          disabled={isRunning || !selectedAgent || !task}
          className="w-full py-4 bg-red-500 text-black font-semibold rounded-xl hover:bg-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRunning ? 'Running Benchmark...' : 'Run Benchmark'}
        </button>

        {/* Loading State */}
        {isRunning && (
          <div className="mt-12 p-6 rounded-xl bg-gray-900 border border-gray-800 text-center">
            <div className="animate-pulse text-gray-400">
              Running {AGENTS.find(a => a.id === selectedAgent)?.name} on task...
            </div>
            <div className="mt-4 text-sm text-gray-500">
              This may take 30-60 seconds
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="mt-12 p-6 rounded-xl bg-gray-900 border border-gray-800">
            <h3 className="text-lg font-semibold mb-6">Results</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 rounded-lg bg-gray-800">
                <div className={`text-3xl font-bold ${
                  result.quality >= 80 ? 'text-green-400' : 
                  result.quality >= 60 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {result.quality}
                </div>
                <div className="text-sm text-gray-500">Quality Score</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800">
                <div className="text-3xl font-bold text-yellow-400">${result.cost.toFixed(2)}</div>
                <div className="text-sm text-gray-500">Estimated Cost</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-800">
                <div className="text-3xl font-bold text-blue-400">{result.time}s</div>
                <div className="text-sm text-gray-500">Execution Time</div>
              </div>
            </div>

            {/* Sample Output Preview */}
            <div className="mt-6">
              <div className="text-sm text-gray-500 mb-2">Sample Output</div>
              <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-300">
                {result.output}
              </pre>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Want unlimited benchmarks?</p>
          <a
            href="#waitlist"
            className="inline-block px-6 py-3 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-400 transition-colors"
          >
            Get Pro - $29/mo
          </a>
        </div>

        {/* Waitlist Section */}
        <div id="waitlist" className="mt-20 py-16 px-6 rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-gray-400 mb-8">
              Get early access to Pro features. No spam, ever.
            </p>
            
            <form action="https://formspree.io/f/mbdaqzwj" method="POST" className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
              />
              <input type="hidden" name="_subject" value="BenchmarkMD Pro Waitlist" />
              <input type="hidden" name="_next" value="https://benchmarkmd.ai/tool?waitlist=success" />
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 text-black font-semibold rounded-lg hover:bg-red-400 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
            
            <p className="text-xs text-gray-600 mt-4">
              Pro: Unlimited benchmarks, export results, priority support
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
