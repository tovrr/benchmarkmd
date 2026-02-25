import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started - BenchmarkMD',
  description: 'How to use the BenchmarkMD tool',
}

export default function SetupPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
        <p className="text-gray-400 mb-8">
          Learn how to use BenchmarkMD to test AI agents.
        </p>

        <div className="prose prose-invert prose-red max-w-none">
          <h2>Quick Start</h2>
          <ol>
            <li>Go to the <a href="/tool" className="text-red-400">Benchmark Tool</a></li>
            <li>Select an AI agent</li>
            <li>Enter your task</li>
            <li>Click "Run Benchmark"</li>
          </ol>

          <h2>Understanding Results</h2>
          
          <h3>Quality Score (0-100)</h3>
          <p>Measures code quality based on:</p>
          <ul>
            <li>Correctness</li>
            <li>Code style</li>
            <li>Security</li>
            <li>Best practices</li>
          </ul>

          <h3>Estimated Cost</h3>
          <p>Based on API pricing for the selected agent. Includes input + output tokens.</p>

          <h3>Execution Time</h3>
          <p>How long the agent took to complete the task.</p>

          <h2>Pricing</h2>
          
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Price</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Free</td>
                <td>$0</td>
                <td>3 benchmarks/day</td>
              </tr>
              <tr>
                <td>Pro</td>
                <td>$29/mo</td>
                <td>Unlimited benchmarks + API access</td>
              </tr>
              <tr>
                <td>Enterprise</td>
                <td>Custom</td>
                <td>Custom audits + support</td>
              </tr>
            </tbody>
          </table>

          <h2>FAQ</h2>
          
          <h3>How accurate are the benchmarks?</h3>
          <p>Our benchmarks use standardized tasks to ensure fair comparison across agents.</p>

          <h3>Can I benchmark my own tasks?</h3>
          <p>Yes! Enter any task in the text field. The more specific, the better the results.</p>

          <h3>Which agents can I test?</h3>
          <p>Currently: Claude Code, Cursor, GitHub Copilot, Devin, and Bolt.new.</p>
        </div>
      </div>
    </div>
  )
}
