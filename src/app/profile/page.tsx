'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { AcademicCapIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function ProfilePage() {
  return (
    <div className="container py-12">
      {/* Profile Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/images/Image of author.webp"
            alt="Emmanuel Bodza Mawulorm"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Emmanuel Bodza Mawulorm
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Researcher, Environmental Advocate, and Science Communicator
        </p>
      </div>

      {/* Biography Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
        <div className="prose prose-lg prose-invert">
          <p className="text-white/90">
            I am a passionate researcher and environmental advocate dedicated to exploring sustainable solutions
            for environmental challenges. As a high school graduate from Adisadel College, Ghana, I have
            conducted extensive research on plant-based insecticides, particularly focusing on the use of
            Cleome viscosa as a natural mosquito repellent.
          </p>
          <p className="text-white/90">
            My work aims to reduce environmental harm while combating vector-borne diseases, contributing to
            both public health and environmental conservation. Beyond research, I am committed to making
            scientific knowledge accessible to a wider audience and mentoring the next generation of
            scientists.
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Achievements & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/30">
            <AcademicCapIcon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
            <p className="text-white/90">Adisadel College, Ghana</p>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/30">
            <TrophyIcon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Awards</h3>
            <p className="text-white/90">Gold Medalist, Ghana STEM Olympiad</p>
          </div>
          <div className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-white/30">
            <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Programs</h3>
            <p className="text-white/90">Yale Young African Scholar (YYAS) Alumnus</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-white/90 mb-8">
          Interested in collaboration or have questions about my research? Feel free to reach out.
        </p>
        <div className="flex justify-center space-x-4">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-black/20 hover:bg-black/30 text-white border-white/30 hover:border-white/50"
            asChild
          >
            <a href="mailto:bodzakofi@gmail.com">
              Contact Me
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 hover:border-white/50 text-white"
            asChild
          >
            <a href="/papers">
              View Publications
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
} 