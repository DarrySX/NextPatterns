'use client'

import { useEffect, useRef } from 'react'

interface PlaygroundEditorProps {
  code: string
  onCodeChange: (code: string) => void
}

export function PlaygroundEditor({ code, onCodeChange }: PlaygroundEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* Line numbers */}
      <div className="w-12 bg-muted text-muted-foreground text-xs font-mono flex flex-col border-r border-border">
        {code.split('\n').map((_, idx) => (
          <div key={idx} className="h-6 flex items-center justify-center opacity-50">
            {idx + 1}
          </div>
        ))}
      </div>

      {/* Editor */}
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        className="flex-1 p-4 font-mono text-sm bg-background text-foreground resize-none focus:outline-none"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  )
}
