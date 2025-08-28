'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroSection() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-20">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight text-balance"
      >
        A Simple Template for Your SaaS Success
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-pretty"
      >
        Ready-made sections, interactive layouts, and modern design—all in one
        template to elevate your SaaS landing page.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Link href="/signup" className="w-full sm:w-auto">
          <Button className="bg-blue-700 cursor-pointer shadow-2xl hover:bg-blue-700 text-white px-6 py-6 rounded-lg text-base font-medium btn-glow">
            Buy Template
          </Button>
        </Link>

        <Link href="/signup">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-100 cursor-pointer text-gray-700 hover:bg-gray-50 px-6 py-6 rounded-full text-base font-medium bg-transparent"
          >
            See Solution
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
