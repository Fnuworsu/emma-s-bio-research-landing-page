'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function PageBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const getBgClass = () => {
    switch (pathname) {
      case '/papers':
        return 'bg-gradient-to-b from-emerald-900/20 to-emerald-950/40'
      case '/articles':
        return 'bg-gradient-to-b from-blue-900/20 to-blue-950/40'
      case '/profile':
        return 'bg-gradient-to-b from-purple-900/20 to-purple-950/40'
      case '/resources':
        return 'bg-gradient-to-b from-amber-900/20 to-amber-950/40'
      default:
        return 'bg-background'
    }
  }

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500",
      getBgClass()
    )}>
      <div className="min-h-screen bg-background/80 backdrop-blur-[2px]">
        {children}
      </div>
    </div>
  )
} 