'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MagnifyingGlassIcon, BookOpenIcon, LinkIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const resources = [
  {
    id: 'methodology',
    title: 'Research Methodology Guide',
    description: 'A comprehensive guide to conducting environmental research and data collection.',
    category: 'Guide',
    icon: BookOpenIcon,
    link: 'https://youtu.be/yplWZs3dqNQ?si=P17OJpBPADQb8DAG',
    videoTitle: 'Research Methods in Environmental Science'
  },
  {
    id: 'journals',
    title: 'Environmental Science Journals',
    description: 'Curated list of reputable journals in environmental science and public health.',
    category: 'Reference',
    icon: LinkIcon,
    link: 'https://www.sciencedirect.com/journal/journal-of-environmental-sciences',
    isWebsite: true
  },
  {
    id: 'stem',
    title: 'STEM Education Resources',
    description: 'Educational materials and resources for STEM students and researchers.',
    category: 'Education',
    icon: AcademicCapIcon,
    link: 'https://www.nsf.gov/science-matters/seven-nsf-supported-stem-resources-are-perfect',
    isWebsite: true
  }
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white !important">Resources</h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Access helpful resources, guides, and references for environmental science research and education.
        </p>
      </div>

      {/* Search Section */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-white" />
          </div>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border rounded-lg bg-black/20 backdrop-blur-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 border-white/30"
          />
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredResources.map((resource) => (
          <Card 
            key={resource.id} 
            className="bg-black/20 backdrop-blur-sm border-white/30 hover:border-white/50 transition-colors group"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">{resource.category}</span>
                <resource.icon className="h-6 w-6 text-white group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-white">{resource.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">{resource.description}</p>
              {resource.videoTitle && (
                <p className="text-white/70 text-sm mt-2">Video: {resource.videoTitle}</p>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                asChild 
                className="w-full bg-black/20 hover:bg-black/30 text-white border-white/30 hover:border-white/50"
                variant="outline"
              >
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.isWebsite ? 'Visit Website' : 'Watch Video'}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Additional Resources Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black/20 backdrop-blur-sm border-white/30">
            <CardHeader>
              <h3 className="text-xl font-semibold text-white">Research Tools</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">Collection of useful tools and software for environmental research.</p>
              <Button 
                asChild 
                className="w-full mt-4 bg-black/20 hover:bg-black/30 text-white border-white/30 hover:border-white/50"
                variant="outline"
              >
                <a href="https://youtu.be/ed8wSPp7FeQ?si=m8-gPoAMYiFjxNm_" target="_blank" rel="noopener noreferrer">
                  Watch Tutorial
                </a>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-black/20 backdrop-blur-sm border-white/30">
            <CardHeader>
              <h3 className="text-xl font-semibold text-white">Data Resources</h3>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">Access to environmental datasets and data analysis tools.</p>
              <Button 
                asChild 
                className="w-full mt-4 bg-black/20 hover:bg-black/30 text-white border-white/30 hover:border-white/50"
                variant="outline"
              >
                <a href="https://www.ncbi.nlm.nih.gov/books/NBK126195/" target="_blank" rel="noopener noreferrer">
                  Access Data
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* No Results Message */}
      {filteredResources.length === 0 && (
        <div className="text-center py-12 bg-black/20 backdrop-blur-sm rounded-lg">
          <h3 className="text-lg font-medium text-white">No resources found</h3>
          <p className="mt-2 text-white/90">Try adjusting your search query</p>
        </div>
      )}
    </div>
  )
} 