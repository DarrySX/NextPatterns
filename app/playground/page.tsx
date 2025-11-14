'use client'

import { useState } from 'react'
import { AISidebar } from '@/components/ai-assistant/ai-sidebar'
import { AITriggerButton } from '@/components/ai-assistant/ai-trigger-button'
import { PlaygroundEditor } from '@/components/playground/playground-editor'
import { PlaygroundPreview } from '@/components/playground/playground-preview'
import { PlaygroundFileTree } from '@/components/playground/playground-file-tree'
import { PlaygroundErrorPanel } from '@/components/playground/playground-error-panel'
import { PlaygroundTopbar } from '@/components/playground/playground-topbar'
import { PlaygroundDocs } from '@/components/playground/playground-docs'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function PlaygroundPage() {
  const initialFiles: Record<string, string> = {
    'app.tsx': `// Welcome to NextPatterns Playground
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Counter Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}`,
    'utils.ts': `export function calculateTotal(items: number[]) {
  return items.reduce((sum, item) => sum + item, 0)
}`,
    'config.ts': `export const config = {
  theme: 'dark',
  timeout: 5000,
  debug: true
}`,
  }

  const [files, setFiles] = useState(initialFiles)
  const [selectedFile, setSelectedFile] = useState('app.tsx')
  const [errors, setErrors] = useState<string[]>([])
  const [showFileTree, setShowFileTree] = useState(true)
  const [showErrors, setShowErrors] = useState(false)
  const [showAI, setShowAI] = useState(false)
  const [activeTab, setActiveTab] = useState('editor')

  const currentCode = files[selectedFile] || ''

  const handleCodeChange = (newCode: string) => {
    setFiles((prev) => ({
      ...prev,
      [selectedFile]: newCode,
    }))
  }

  const handleAddFile = (fileName: string) => {
    if (!files[fileName]) {
      setFiles((prev) => ({
        ...prev,
        [fileName]: `// New file: ${fileName}\n`,
      }))
      setSelectedFile(fileName)
    }
  }

  const handleDeleteFile = (fileName: string) => {
    setFiles((prev) => {
      const newFiles = { ...prev }
      delete newFiles[fileName]
      return newFiles
    })
    const remainingFiles = Object.keys(files).filter((f) => f !== fileName)
    if (remainingFiles.length > 0) {
      setSelectedFile(remainingFiles[0])
    }
  }

  const handleImportFile = (fileName: string, content: string) => {
    setFiles((prev) => ({
      ...prev,
      [fileName]: content,
    }))
    setSelectedFile(fileName)
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <PlaygroundTopbar files={files} selectedFile={selectedFile} />

      <div className="border-b border-border bg-card px-4 py-2 flex justify-end">
        <AITriggerButton
          onClick={() => setShowAI(!showAI)}
          isOpen={showAI}
        />
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {showFileTree && (
          <div className="w-48 border-r border-border bg-card flex flex-col">
            <PlaygroundFileTree
              files={Object.keys(files)}
              selectedFile={selectedFile}
              onSelectFile={setSelectedFile}
              onAddFile={handleAddFile}
              onDeleteFile={handleDeleteFile}
              onImportFile={handleImportFile}
            />
          </div>
        )}

        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 flex flex-col border-r border-border">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
              <div className="border-b border-border p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFileTree(!showFileTree)}
                    className="w-8 h-8 p-0"
                  >
                    {showFileTree ? (
                      <ChevronLeft className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Button>
                  <span className="text-sm font-medium">{selectedFile}</span>
                </div>
                <TabsList>
                  <TabsTrigger value="editor" className="text-xs">
                    Editor
                  </TabsTrigger>
                  <TabsTrigger value="docs" className="text-xs">
                    Docs
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="editor" className="flex-1 overflow-hidden m-0">
                <PlaygroundEditor code={currentCode} onCodeChange={handleCodeChange} />
              </TabsContent>

              <TabsContent value="docs" className="flex-1 overflow-hidden m-0">
                <PlaygroundDocs />
              </TabsContent>
            </Tabs>

            {showErrors && (
              <div className="border-t border-border">
                <PlaygroundErrorPanel errors={errors} />
              </div>
            )}
          </div>
        </div>

        <div className="w-1/2 flex flex-col border-l border-border">
          <div className="border-b border-border p-3">
            <h3 className="text-sm font-medium">Preview</h3>
          </div>
          <PlaygroundPreview code={currentCode} />
        </div>

        <AISidebar
          isOpen={showAI}
          onClose={() => setShowAI(false)}
          currentCode={currentCode}
        />
      </div>
    </div>
  )
}
