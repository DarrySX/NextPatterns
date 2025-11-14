'use client'

import { useState } from 'react'
import { PatternsSidebar } from '@/components/patterns/patterns-sidebar'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function PatternsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-20 left-4 z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-16 left-0 h-[calc(100vh-64px)] w-64 border-r border-border bg-card transition-transform duration-200 z-30 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <PatternsSidebar onSelectCategory={() => setSidebarOpen(false)} />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
