import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Playground Features - NextPatterns',
  description: 'Master the interactive code editor and preview environment.',
}

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-8">
          <Link href="/docs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Docs
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Playground Features</h1>
          <p className="text-xl text-muted-foreground">
            Master the interactive code editor and preview environment.
          </p>
        </div>

        {/* Editor Basics */}
        <section className="mb-12" id="editor">
          <h2 className="text-3xl font-bold mb-4">Editor Basics</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The playground editor is a powerful tool for writing and testing React and Next.js code. Here are the essential features:
            </p>
            <div className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Syntax Highlighting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Code is automatically highlighted with color coding for different syntax elements. This makes code easier to read and write.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Line Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Line numbers are displayed on the left for easy reference and debugging. Click on a line number to navigate to specific sections.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Keyboard Shortcuts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• <code className="bg-muted px-2 py-1 rounded">Ctrl/Cmd + S</code> - Save code</li>
                    <li>• <code className="bg-muted px-2 py-1 rounded">Ctrl/Cmd + /</code> - Toggle comment</li>
                    <li>• <code className="bg-muted px-2 py-1 rounded">Ctrl/Cmd + Z</code> - Undo</li>
                    <li>• <code className="bg-muted px-2 py-1 rounded">Ctrl/Cmd + Shift + Z</code> - Redo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* File Management */}
        <section className="mb-12" id="files">
          <h2 className="text-3xl font-bold mb-4">File Management</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Organize your code across multiple files. The playground supports various file types and allows you to manage them efficiently:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
              <h3 className="font-semibold mb-2">Supported File Types:</h3>
              <ul className="space-y-1 ml-4">
                <li>• <code className="bg-muted px-2 py-0.5 rounded text-xs">.tsx</code> - React TypeScript components</li>
                <li>• <code className="bg-muted px-2 py-0.5 rounded text-xs">.ts</code> - TypeScript files</li>
                <li>• <code className="bg-muted px-2 py-0.5 rounded text-xs">.jsx</code> - React JavaScript components</li>
                <li>• <code className="bg-muted px-2 py-0.5 rounded text-xs">.js</code> - JavaScript files</li>
                <li>• <code className="bg-muted px-2 py-0.5 rounded text-xs">.css</code> - Stylesheet files</li>
                <li>• <code className="bg-muted px-2 py-0.5 rounded text-xs">.json</code> - Configuration files</li>
              </ul>
            </div>

            <div className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Creating Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Click the "+" button in the file tree to create new files. Each file is independent and can import from other files.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Importing Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Import files from your computer using the upload button. This is perfect for testing existing code or migrating projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Deleting Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Right-click on a file in the tree or hover to see the delete button. Deleted files cannot be recovered, so be careful!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Preview & Debugging */}
        <section className="mb-12" id="preview">
          <h2 className="text-3xl font-bold mb-4">Preview & Debugging</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The preview panel shows your code running in real-time. It also includes powerful debugging tools:
            </p>
            <div className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Live Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Changes to your code are instantly reflected in the preview. This hot-reload feature makes development faster and more iterative.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Error Panel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Errors and warnings are displayed in a panel below the preview. Click on errors to navigate to the problematic code.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Use the AI Assistant to analyze your code, get optimization suggestions, and understand complex patterns. Ask questions about your code directly!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Save & Export</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Save your work to your profile, export as JSON for backup, or share a link with others. Your patterns are always available.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="border-t border-border pt-8 mt-12 flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/docs/contributing">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: Contributing
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/community">
              Next: Community
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
