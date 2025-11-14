'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'

interface PatternEditorProps {
  code: string
}

export function PatternEditor({ code }: PatternEditorProps) {
  const [copied, setCopied] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative bg-slate-950 rounded-lg overflow-hidden">
      {/* Copy button */}
      <Button
        size="sm"
        variant="ghost"
        onClick={handleCopy}
        className="absolute top-2 right-2 text-slate-400 hover:text-slate-200 z-10"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-1" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </>
        )}
      </Button>

      {/* Code block */}
      <pre className="p-6 pt-16 overflow-x-auto text-sm font-mono text-slate-200">
        <code>{code}</code>
      </pre>

      {/* Line numbers */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-slate-900 text-slate-500 text-xs font-mono flex flex-col border-r border-slate-700">
        {isClient &&
          code.split('\n').map((_, idx) => (
            <div key={idx} className="h-6 flex items-center justify-center">
              {idx + 1}
            </div>
          ))}
      </div>
    </div>
  )
}
