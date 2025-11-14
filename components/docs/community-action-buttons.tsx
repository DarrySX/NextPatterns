'use client'

import { Button } from '@/components/ui/button'

export function CommunityActionButton({
    children,
    label
}: {
    children: React.ReactNode
    label: string
}) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        alert(`${label} coming soon!`)
    }

    return (
        <Button asChild variant="outline" size="sm">
            <a href="#" onClick={handleClick}>
                {children}
            </a>
        </Button>
    )
}
