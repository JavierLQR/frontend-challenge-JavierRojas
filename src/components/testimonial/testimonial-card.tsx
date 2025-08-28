'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getAvatarColor, getInitials } from '@/utils/testimonial'

interface TestimonialCardProps {
  name: string
  handle: string
  content: string
  avatar?: string
  delay?: number
}

export function TestimonialCard({
  name,
  handle,
  content,
  avatar,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -2 }}
    >
      <Card className="bg-white shadow-sm border border-gray-200 p-6 h-full">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 pt-2">
            <Avatar className="h-10 w-10 flex-shrink-0">
              {avatar ? (
                <AvatarImage src={avatar} className="object-cover" alt={name} />
              ) : (
                <AvatarFallback
                  className={`${getAvatarColor(
                    name
                  )} text-white text-sm font-medium`}
                >
                  {getInitials(name)}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <p className="font-medium text-gray-900 text-sm">{name}</p>
              <p className="text-gray-800 font-medium text-xs">{handle}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm font-medium leading-relaxed italic">
            {content}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
