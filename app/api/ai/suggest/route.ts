import { generateText } from 'ai'

export async function POST(request: Request) {
  try {
    const { code, suggestion } = await request.json()

    if (!code || !suggestion) {
      return Response.json(
        { error: 'Code and suggestion type required' },
        { status: 400 }
      )
    }

    const prompts = {
      optimize: `Provide an optimized version of this code. Focus on performance, readability, and best practices:

\`\`\`
${code}
\`\`\`

Return only the optimized code with brief comments explaining the changes.`,

      explain: `Explain this code in simple terms, describing what each part does and why:

\`\`\`
${code}
\`\`\``,

      refactor: `Refactor this code to be more maintainable and follow Next.js best practices:

\`\`\`
${code}
\`\`\`

Return the refactored code with explanations.`,

      test: `Generate comprehensive test cases for this code using Jest and React Testing Library:

\`\`\`
${code}
\`\`\`

Provide a complete test file.`,
    }

    const selectedPrompt = prompts[suggestion as keyof typeof prompts] || prompts.optimize

    const { text } = await generateText({
      model: 'openai/gpt-4-mini',
      prompt: selectedPrompt,
      temperature: 0.7,
      maxTokens: 2000,
    })

    return Response.json({
      suggestion: text,
      type: suggestion,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('AI Suggestion error:', error)
    return Response.json(
      { error: 'Failed to generate suggestion' },
      { status: 500 }
    )
  }
}
