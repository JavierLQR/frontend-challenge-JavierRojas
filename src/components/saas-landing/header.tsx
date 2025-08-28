'use client'

import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-4 px-6 fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur"
    >
      <div className="max-w-3xl p-4 bg-white rounded-4xl shadow mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            alt="SaasSwiftie"
            src={'/SaasSwiftie.avif'}
            width={120}
            height={120}
            className="w-auto h-4 sm:h-6"
          />
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex text-[14px] font-medium items-center space-x-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="#solution"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Solution
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-blue-700 shadow-2xl hover:bg-blue-700 text-white px-6 py-2 rounded-lg btn-glow">
            <Link href="/signup">Buy Template</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full h-screen bg-white shadow-lg rounded-b-2xl p-6"
          >
            <nav className="flex flex-col space-y-4 text-gray-700">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-900"
              >
                About
              </a>
              <a
                href="#solution"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-900"
              >
                Solution
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-900"
              >
                Pricing
              </a>
              <Link href="/signup" className="w-full">
                <Button className="bg-blue-700 cursor-pointer shadow-2xl hover:bg-blue-700 text-white px-6 py-6 rounded-lg text-base font-medium btn-glow">
                  Buy Template
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
