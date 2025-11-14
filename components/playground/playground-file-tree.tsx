'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FileCode, Plus, Trash2, Check, X, Upload } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface PlaygroundFileTreeProps {
  files: string[]
  selectedFile: string
  onSelectFile: (file: string) => void
  onAddFile: (fileName: string) => void
  onDeleteFile: (fileName: string) => void
  onImportFile: (fileName: string, content: string) => void
}

export function PlaygroundFileTree({
  files,
  selectedFile,
  onSelectFile,
  onAddFile,
  onDeleteFile,
  onImportFile,
}: PlaygroundFileTreeProps) {
  const [isAddingFile, setIsAddingFile] = useState(false)
  const [newFileName, setNewFileName] = useState('')

  const handleCreateFile = () => {
    if (newFileName.trim()) {
      onAddFile(newFileName.trim())
      setNewFileName('')
      setIsAddingFile(false)
    }
  }

  const handleFileImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const content = await file.text()
      onImportFile(file.name, content)
    }
    e.target.value = '' // Reset input
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm">Files</h3>
          <div className="flex gap-1">
            <div className="relative">
              <input
                type="file"
                onChange={handleFileImport}
                className="hidden"
                id="file-import"
                accept=".tsx,.ts,.jsx,.js,.css,.json,.md"
              />
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6"
                onClick={() => document.getElementById('file-import')?.click()}
                title="Import file from computer"
              >
                <Upload className="w-3 h-3" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6"
              onClick={() => setIsAddingFile(true)}
              title="Create new file"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {isAddingFile && (
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="file name"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCreateFile()
                if (e.key === 'Escape') {
                  setIsAddingFile(false)
                  setNewFileName('')
                }
              }}
              className="h-7 text-xs"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6"
              onClick={handleCreateFile}
            >
              <Check className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6"
              onClick={() => {
                setIsAddingFile(false)
                setNewFileName('')
              }}
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto space-y-1 p-2">
        {files.map((file) => (
          <div
            key={file}
            className="flex items-center justify-between group rounded-md hover:bg-muted/50 pr-2"
          >
            <button
              onClick={() => onSelectFile(file)}
              className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                selectedFile === file
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
            >
              <FileCode className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{file}</span>
            </button>
            <Button
              variant="ghost"
              size="icon"
              className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onDeleteFile(file)}
            >
              <Trash2 className="w-3 h-3 text-destructive" />
            </Button>
          </div>
        ))}
      </nav>
    </div>
  )
}
