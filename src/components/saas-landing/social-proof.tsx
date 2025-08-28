'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function SocialProof() {
  const avatars = [
    '/adA3ca5MJSdYVtT9ZmtqJigs.avif',
    '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
    '/uMT9YSytwNhNKnHFnrMToRcSCI.avif',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex items-center justify-center mb-8"
    >
      <div className="flex items-center bg-white  shadow px-1 py-1 rounded-full space-x-4">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <motion.img
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              src={avatar}
              alt={`Avatar ${index + 1}`}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="w-6 h-6 object-cover rounded-full border-2 border-white shadow-sm overflow-hidden"
            />
          ))}
        </div>

        <span className="text-gray-600 font-medium text-sm">
          Join 3k+ members
        </span>

        <Button
          variant="outline"
          className="btn-gradient rounded-full px-4 py-1 text-[14px] font-medium text-yellow-800"
        >
          Join Waitlist
          <ArrowRight className="  ml-1" />
        </Button>
      </div>
    </motion.div>
  )
}
