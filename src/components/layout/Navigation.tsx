'use client'

import Link from 'next/link'
import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold hover:text-primary transition-colors">
              Bodza Research
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/articles" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === '/articles' ? "text-primary" : "text-muted-foreground"
              )}
            >
              Articles & Research
            </Link>
            <Link 
              href="/papers" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === '/papers' ? "text-primary" : "text-muted-foreground"
              )}
            >
              Research Papers
            </Link>
            <Link 
              href="/profile" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === '/profile' ? "text-primary" : "text-muted-foreground"
              )}
            >
              Author&apos;s Profile
            </Link>
            <Link 
              href="/resources" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === '/resources' ? "text-primary" : "text-muted-foreground"
              )}
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 