import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Reference - BenchmarkMD',
  description: 'Python API for running benchmarks',
}

export default function ApiPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">API Reference</h1>
        <p className="text-gray-400 mb-8">Python tools for running your own benchmarks.</p>

        <div className="prose prose-invert prose-red max-w-none">
          <h2>Installation</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>pip install benchmarkmd</code>
          </pre>

          <h2>Benchmark Class</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>{`from benchmarkmd import Benchmark

# Initialize
benchmark = Benchmark(agent="claude-code")

# Run a task
results = benchmark.run(task="Create a Python web app")

# Get metrics
print(results.quality_score)  # 0-100
print(results.cost)           # in USD
print(results.time_seconds)   # execution time`}</code>
          </pre>

          <h2>Supported Agents</h2>
          <ul>
            <li><code>claude-code</code> - Anthropic Claude Code</li>
            <li><code>cursor</code> - Cursor IDE</li>
            <li><code>devin</code> - Cognition Devin</li>
            <li><code>copilot</code> - GitHub Copilot</li>
            <li><code>bolt</code> - Bolt.new</li>
          </ul>

          <h2>Methods</h2>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>run(task)</code></td>
                <td>Execute a benchmark task</td>
              </tr>
              <tr>
                <td><code>measure_cost()</code></td>
                <td>Calculate API costs</td>
              </tr>
              <tr>
                <td><code>analyze_quality()</code></td>
                <td>Score output quality</td>
              </tr>
              <tr>
                <td><code>compare(agents)</code></td>
                <td>Compare multiple agents</td>
              </tr>
            </tbody>
          </table>

          <h2>Configuration</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>{`benchmark = Benchmark(
    agent="claude-code",
    model="claude-3-5-sonnet-20241022",
    max_tokens=4000,
    temperature=0.7,
    timeout=300
)`}</code>
          </pre>

          <h2>Environment Variables</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>{`BENCHMARKMD_API_KEY=your_api_key
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...`}</code>
          </pre>

          <h2>Example: Compare Agents</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>{`from benchmarkmd import compare

results = compare(
    agents=["claude-code", "cursor", "copilot"],
    task="Build a React todo app"
)

for agent, result in results.items():
    print(f"{agent}: {result.quality_score}/100")`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
