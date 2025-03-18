'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="container text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tighter">
            Through Research
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exploring sustainable solutions for environmental challenges, with a focus on
            plant-based insecticides and public health.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="/articles">
                Explore Articles
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/papers">
                View Research Papers
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Research
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Aedes Project Card */}
            <div className="rounded-lg bg-card text-card-foreground p-6 space-y-4">
              <h3 className="text-2xl font-bold">Aedes Project</h3>
              <p className="text-sm text-muted-foreground">Plant-based insecticides research</p>
              <p className="text-muted-foreground">
                Investigating the effectiveness of natural plant extracts as sustainable alternatives to chemical insecticides.
              </p>
              <Button asChild variant="link" className="p-0">
                <Link href="/articles/aedes-project-findings">
                  Read More
                </Link>
              </Button>
            </div>

            {/* Biology Research Card */}
            <div className="rounded-lg bg-card text-card-foreground p-6 space-y-4">
              <h3 className="text-2xl font-bold">Biology Research</h3>
              <p className="text-sm text-muted-foreground">Environmental impact studies</p>
              <p className="text-muted-foreground">
                Analysis of environmental factors affecting local ecosystems and biodiversity.
              </p>
              <Button asChild variant="link" className="p-0">
                <Link href="/articles/biol-research-advances">
                  Read More
                </Link>
              </Button>
            </div>

            {/* Public Health Study Card */}
            <div className="rounded-lg bg-card text-card-foreground p-6 space-y-4">
              <h3 className="text-2xl font-bold">Public Health Study</h3>
              <p className="text-sm text-muted-foreground">Community health research</p>
              <p className="text-muted-foreground">
                Examining the intersection of environmental factors and public health outcomes.
              </p>
              <Button asChild variant="link" className="p-0">
                <Link href="/articles/cleome-viscosa-mosquito-control">
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
