'use client'

import { useEffect, useRef, useState } from 'react'

interface PlaygroundPreviewProps {
  code: string
}

export function PlaygroundPreview({ code }: PlaygroundPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    try {
      setError(null)
      const doc = iframe.contentDocument
      if (!doc) return

      // Create a simple HTML template with React loaded from CDN
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; }
            </style>
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              try {
                ${code}
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(<Counter />);
              } catch (e) {
                document.body.innerHTML = '<div style="color: red; padding: 20px;"><h3>Error:</h3><p>' + e.message + '</p></div>';
              }
            </script>
          </body>
        </html>
      `

      doc.open()
      doc.write(html)
      doc.close()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Preview error')
    }
  }, [code])

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      {error && (
        <div className="p-4 bg-destructive/10 text-destructive text-sm">
          {error}
        </div>
      )}
      <iframe
        ref={iframeRef}
        className="flex-1 border-0 w-full"
        title="Preview"
        sandbox={{
          allowScripts: true,
        } as any}
      />
    </div>
  )
}
