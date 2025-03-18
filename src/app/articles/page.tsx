'use client'

import Link from "next/link"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

// Sample articles data - replace with your actual data
const articles = [
  {
    slug: 'aedes-project-findings',
    title: 'Novel Approaches in Aedes Mosquito Control: The Aedes Project Results',
    excerpt: 'Groundbreaking findings from the Aedes Project, focusing on innovative approaches to controlling Aedes mosquito populations through integrated vector management strategies and novel biological control methods.',
    date: 'March 2024',
    category: 'Vector Control',
    author: 'Emmanuel Bodza Mawulorm'
  },
  {
    slug: 'biol-research-advances',
    title: 'Advances in Biological Control Methods: BIOL Research Findings',
    excerpt: 'Recent advances in biological control methods through the BIOL research initiative, highlighting innovative approaches to sustainable pest management and ecosystem preservation.',
    date: 'January 2024',
    category: 'Biological Control',
    author: 'Emmanuel Bodza Mawulorm'
  },
  {
    slug: 'cleome-viscosa-mosquito-control',
    title: 'The Role of Cleome viscosa in Natural Mosquito Control',
    excerpt: 'Investigation into the potential of Cleome viscosa (Asian spider flower) as a natural mosquito repellent, focusing on its efficacy against Aedes species and implications for sustainable vector control.',
    date: 'March 2024',
    category: 'Environmental Science',
    author: 'Emmanuel Bodza Mawulorm'
  },
  {
    slug: 'sustainable-pesticide-alternatives',
    title: 'Sustainable Alternatives to Synthetic Pesticides: A Comprehensive Review',
    excerpt: 'A comprehensive review examining the current state of natural and sustainable alternatives to synthetic pesticides, evaluating their efficacy, environmental impact, and practical implementation.',
    date: 'February 2024',
    category: 'Agriculture',
    author: 'Emmanuel Bodza Mawulorm'
  }
]

export default function ArticlesPage() {
  return (
    <main className="container py-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Articles & Research</h1>
        <p className="text-muted-foreground">
          Latest research papers and articles on vector control, biological pest management, and sustainable agriculture.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map(article => (
          <Card key={article.slug} className="flex flex-col">
            <CardHeader>
              <div className="space-y-1">
                <div className="flex items-center gap-x-2 text-sm">
                  <span className="text-muted-foreground">{article.date}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-medium text-primary">{article.category}</span>
                </div>
                <h2 className="text-2xl font-semibold leading-tight">
                  {article.title}
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{article.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto pt-6">
              <Button asChild>
                <Link href={`/articles/${article.slug}`}>
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {articles.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No articles found</h3>
          <p className="mt-2 text-muted-foreground">Try adjusting your search query</p>
        </div>
      )}
    </main>
  )
} 