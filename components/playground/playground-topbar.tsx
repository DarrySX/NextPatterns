"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Save, Download, Share2, Zap } from 'lucide-react';
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

interface PlaygroundTopbarProps {
  files?: Record<string, string>;
  selectedFile?: string;
}

export function PlaygroundTopbar({ files = {}, selectedFile = "app.tsx" }: PlaygroundTopbarProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [projectName, setProjectName] = useState("My Project");
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Please login to save projects");
        return;
      }

      const response = await fetch("/api/playground/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: projectName,
          files,
          userId: user.id,
        }),
      });

      if (response.ok) {
        alert("Project saved successfully!");
        setSaveDialogOpen(false);
      } else {
        alert("Error saving project");
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving project");
    } finally {
      setIsSaving(false);
    }
  };

  const handleExport = () => {
    const filesJson = JSON.stringify(files, null, 2);
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(filesJson)
    );
    element.setAttribute("download", `${projectName}.json`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Share error:", error);
    }
  };

  return (
    <div className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          NextPatterns Playground
        </Link>

        <div className="flex items-center gap-3">
          <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Save className="w-4 h-4" />
                Save
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Save Project</DialogTitle>
                <DialogDescription>
                  Give your project a name to save it to your account
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Enter project name"
                  />
                </div>
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="w-full"
                >
                  {isSaving ? "Saving..." : "Save Project"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={handleExport}
          >
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button size="sm" className="gap-2">
            <Zap className="w-4 h-4" />
            Ask AI
          </Button>
        </div>
      </div>
    </div>
  );
}
