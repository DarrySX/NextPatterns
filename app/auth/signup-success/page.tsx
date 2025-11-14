import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Check, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Confirm Your Email - NextPatterns',
  description: 'Verify your email address to complete your registration.',
}

export default function SignupSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md">
        {/* Success Card */}
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl">Check Your Email</CardTitle>
            <CardDescription className="text-center text-base mt-2">
              We&apos;ve sent a confirmation link to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* NextPatterns Branding */}
            <div className="text-center py-6 border-y border-border">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-primary-foreground text-xs font-bold">
                  NP
                </div>
                <span className="font-semibold">NextPatterns</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Check your email</h4>
                    <p className="text-sm text-muted-foreground">
                      Look for an email from NextPatterns with the subject line &quot;Confirm your email address&quot;
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Click the confirmation link</h4>
                    <p className="text-sm text-muted-foreground">
                      Open the email and click the verification link to activate your account
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Start exploring</h4>
                    <p className="text-sm text-muted-foreground">
                      Once verified, you can log in and access the playground and pattern library
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Preview Info */}
              <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Email Information</p>
                <p className="text-sm">
                  <span className="font-semibold">From:</span> <span className="text-muted-foreground">noreply@nextpatterns.dev</span>
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Subject:</span> <span className="text-muted-foreground">Confirm your NextPatterns email</span>
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Tip: Check your spam folder if you don&apos;t see the email within a few minutes
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/auth/login">
                  Go to Login
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Help Text */}
            <div className="text-center text-xs text-muted-foreground">
              <p>Didn&apos;t receive the email? Check your spam folder or</p>
              <a href="#" className="text-primary hover:underline">
                request a new confirmation link
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="mt-6 border-border/50">
          <CardHeader>
            <CardTitle className="text-base">What happens next?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2 text-muted-foreground">
            <p>
              After confirming your email, your NextPatterns account will be fully activated. You&apos;ll have access to:
            </p>
            <ul className="space-y-1 pl-4 list-disc">
              <li>Interactive code playground with real-time preview</li>
              <li>Library of community-contributed Next.js patterns</li>
              <li>Ability to save and manage your own patterns</li>
              <li>Share patterns with the community</li>
              <li>AI-powered code suggestions and analysis</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
