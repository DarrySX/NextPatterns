'use client'

import { BookOpen, Code2, Zap, Share2 } from 'lucide-react'

export function PlaygroundDocs() {
  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="max-w-2xl mx-auto p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">NextPatterns Playground</h1>
            <p className="text-muted-foreground">
              Interactive environment to write, test, and share Next.js patterns and React components.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Features
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-medium mb-1">Live Code Editor</h3>
                <p className="text-muted-foreground">
                  Write React components with full syntax support and instant preview updates.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Multiple Files</h3>
                <p className="text-muted-foreground">
                  Organize your code across multiple files. Add, edit, and delete files as needed.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Real-time Preview</h3>
                <p className="text-muted-foreground">
                  See your changes instantly with hot reloading. Errors are displayed immediately.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">AI Assistant</h3>
                <p className="text-muted-foreground">
                  Get help with code analysis, optimization suggestions, and explanations.
                </p>
              </div>
            </div>
          </div>

          {/* Getting Started */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Getting Started
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <h3 className="font-medium mb-1">1. Write Your Component</h3>
                <p className="text-muted-foreground">
                  Use the editor to write React JSX. Your component should export a default function.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">2. See the Preview</h3>
                <p className="text-muted-foreground">
                  The preview panel automatically updates as you type. Fix any errors shown there.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">3. Manage Files</h3>
                <p className="text-muted-foreground">
                  Click the + button to add new files. Select files from the sidebar to edit them.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">4. Share Your Work</h3>
                <p className="text-muted-foreground">
                  Use the Share button to generate a link to your playground project.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Tips & Tricks
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Always export a default component from your main file</li>
              <li>Use React hooks like useState, useEffect, etc.</li>
              <li>Import from common libraries like React, lucide-react, etc.</li>
              <li>Press Ctrl+S to save your work locally</li>
              <li>Check console errors in the error panel at the bottom</li>
              <li>Use the AI assistant to get suggestions and explanations</li>
            </ul>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Share2 className="w-5 h-5 text-primary" />
              Keyboard Shortcuts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-muted p-3 rounded-md">
                <div className="font-mono font-semibold">Ctrl/Cmd + S</div>
                <div className="text-muted-foreground text-xs">Save your work</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="font-mono font-semibold">Escape</div>
                <div className="text-muted-foreground text-xs">Close modals/inputs</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="font-mono font-semibold">Tab</div>
                <div className="text-muted-foreground text-xs">Indent in editor</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="font-mono font-semibold">Ctrl/Cmd + /</div>
                <div className="text-muted-foreground text-xs">Toggle comment</div>
              </div>
            </div>
          </div>

          {/* Example Code */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Example: Simple Button</h2>
            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre className="text-xs font-mono text-foreground whitespace-pre-wrap break-words">
{`import { useState } from 'react'

export default function MyButton() {
  const [clicks, setClicks] = useState(0)

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => setClicks(clicks + 1)}>
        Clicked {clicks} times
      </button>
    </div>
  )
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
