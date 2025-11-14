"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, LogOut, User } from 'lucide-react';
import { createClient } from "@/lib/supabase/client";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth'

export function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const { user, isLoading } = useAuth()
  const router = useRouter()

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold">
            NP
          </div>
          <span>NextPatterns</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/patterns"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Patterns
          </Link>
          <Link
            href="/playground"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Playground
          </Link>
          <Link
            href="/docs"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Docs
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="w-9 h-9"
          >
            {isDark ? (
              <SunIcon className="w-4 h-4" />
            ) : (
              <MoonIcon className="w-4 h-4" />
            )}
          </Button>

          {!isLoading && user ? (
            <>
              <div className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-md">
                {user.email}
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/profile/${user.user_metadata?.name || user.email}`}>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
