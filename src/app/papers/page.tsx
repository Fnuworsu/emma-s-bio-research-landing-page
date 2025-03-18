'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// Sample papers data - replace with your actual PDF files
const papers = [
  {
    id: 1,
    title: 'Aedes Project Report',
    description: 'Research findings on mosquito control methods and their effectiveness.',
    file: '/papers/Aedes project report _Intern Emma Bodza (4).docx.pdf',
    date: 'March 2024',
    category: 'Public Health'
  },
  {
    id: 2,
    title: 'Biology Project Paper',
    description: 'Analysis of plant-based insecticides and their environmental impact.',
    file: '/papers/BIOLOGY PROJECT PAPER.docx.pdf',
    date: 'February 2024',
    category: 'Biology'
  }
]

export default function PapersPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPapers = papers.filter(paper =>
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Research Papers</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Access my published research papers and project reports on environmental science, public health, and sustainable solutions.
        </p>
      </div>

      {/* Search Section */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search papers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border rounded-lg bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPapers.map((paper) => (
          <Card key={paper.id} className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-primary">{paper.category}</span>
                <span className="text-sm text-muted-foreground">{paper.date}</span>
              </div>
              <h3 className="text-2xl font-semibold">{paper.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{paper.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={paper.file} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {filteredPapers.length === 0 && (
        <div className="text-center py-12 bg-background/50 backdrop-blur-sm rounded-lg">
          <h3 className="text-lg font-medium">No papers found</h3>
          <p className="mt-2 text-muted-foreground">Try adjusting your search query</p>
        </div>
      )}
    </div>
  )
} 