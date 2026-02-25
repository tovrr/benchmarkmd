import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Atlas AI - BenchmarkMD',
  description: 'Our decision engine for autonomous analysis',
}

export default function AtlasPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Atlas AI</h1>
        <p className="text-gray-400 mb-8">Our decision engine for autonomous analysis.</p>

        <div className="prose prose-invert prose-red max-w-none">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-semibold text-red-400">Atlas is Online</span>
            </div>
            <p className="text-sm text-gray-400">Version 2026.2.24 — Running autonomously</p>
          </div>

          <h2>Overview</h2>
          <p>
            Atlas is our core AI engine that powers BenchmarkMD's autonomous analysis capabilities. 
            It combines large language models with rule-based systems to provide accurate, 
            evidence-based analysis of AI agents and their performance.
          </p>

          <h2>Features</h2>
          <ul>
            <li><strong>Persistent Memory</strong> — Remembers previous analyses and builds on them</li>
            <li><strong>Multi-agent Coordination</strong> — Can orchestrate multiple sub-agents</li>
            <li><strong>Real-time Threat Detection</strong> — Identifies risks in AI deployments</li>
            <li><strong>Cost Optimization</strong> — Recommends ways to reduce AI spending</li>
            <li><strong>Quality Scoring</strong> — Evaluates code and output quality</li>
          </ul>

          <h2>Architecture</h2>
          <p>Atlas uses a hybrid approach combining:</p>
          <ul>
            <li><strong>LLMs</strong> — For reasoning and analysis</li>
            <li><strong>Rule-based Systems</strong> — For deterministic tasks</li>
            <li><strong>Feedback Loops</strong> — Continuous improvement</li>
            <li><strong>Vector Storage</strong> — Semantic memory</li>
          </ul>

          <h2>Capabilities</h2>
          <table>
            <thead>
              <tr>
                <th>Capability</th>
                <th>Status</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Code Analysis</td>
                <td><span className="text-green-400">● Active</span></td>
                <td>Static and dynamic code analysis</td>
              </tr>
              <tr>
                <td>Cost Tracking</td>
                <td><span className="text-green-400">● Active</span></td>
                <td>Real-time API cost monitoring</td>
              </tr>
              <tr>
                <td>Threat Detection</td>
                <td><span className="text-yellow-400">● Beta</span></td>
                <td>Anomaly detection in agent behavior</td>
              </tr>
              <tr>
                <td>Report Generation</td>
                <td><span className="text-green-400">● Active</span></td>
                <td>Automated benchmarking reports</td>
              </tr>
            </tbody>
          </table>

          <h2>Integration</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>{`from benchmarkmd import Atlas

atlas = Atlas()

# Ask Atlas
response = atlas.analyze("What is the best AI coding agent?")
print(response)`}</code>
          </pre>

          <h2>Chat with Atlas</h2>
          <p>
            You can chat with Atlas directly from the website using the chat widget 
            in the bottom-right corner. Atlas can help you with:
          </p>
          <ul>
            <li>Questions about AI agents</li>
            <li>Recommendations for your use case</li>
            <li>Cost optimization advice</li>
            <li>Analysis of your AI setup</li>
          </ul>

          <h2>Roadmap</h2>
          <ul>
            <li><strong>Q1 2026</strong> — Enhanced cost analysis</li>
            <li><strong>Q2 2026</strong> — Multi-agent orchestration</li>
            <li><strong>Q3 2026</strong> — Custom agent training</li>
            <li><strong>Q4 2026</strong> — Enterprise features</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
