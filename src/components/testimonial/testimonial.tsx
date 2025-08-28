'use client'

import { motion } from 'framer-motion'
import { TestimonialCard } from './testimonial-card'
import { containerVariants, itemVariants } from '@/utils/solution'
import { testimonials } from '@/utils/testimonial'

export function TestimonialsSection() {
  return (
    <motion.div
      className="py-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
          Testimonial
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trusted by Growing SaaS Brands
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Proven results from companies using this template.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-hidden">
        {testimonials.map((column, columnIndex) => {
          const direction = columnIndex === 1 ? -1 : 1
          const distance = column.length * 270

          return (
            <div
              key={columnIndex}
              className="relative overflow-hidden h-[600px]"
            >
              <motion.div
                className="space-y-6 flex flex-col"
                animate={{ y: direction > 0 ? [-distance, 0] : [0, -distance] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {[...column, ...column].map((testimonial, index) => (
                  <TestimonialCard
                    key={`${columnIndex}-${index}`}
                    name={testimonial.name}
                    handle={testimonial.handle}
                    content={testimonial.content}
                    avatar={testimonial.avatar}
                  />
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
