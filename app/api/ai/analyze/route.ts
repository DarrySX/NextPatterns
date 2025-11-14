import { generateText } from 'ai'

export async function POST(request: Request) {
  try {
    const { code, context } = await request.json()

    if (!code) {
      return Response.json({ error: 'No code provided' }, { status: 400 })
    }

    const prompt = `You are an expert Next.js developer and code reviewer. Analyze the following code and provide:
1. Code quality assessment
2. Performance suggestions
3. Best practices recommendations
4. Potential bugs or issues
5. Improvements for readability

Code:
\`\`\`
${code}
\`\`\`

Context: ${context || 'General Next.js code review'}

Provide a structured, actionable response.`

    const { text } = await generateText({
      model: 'openai/gpt-4-mini',
      prompt,
      temperature: 0.7,
      maxTokens: 1500,
    })

    return Response.json({
      analysis: text,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('AI Analysis error:', error)
    return Response.json(
      { error: 'Failed to analyze code' },
      { status: 500 }
    )
  }
}
