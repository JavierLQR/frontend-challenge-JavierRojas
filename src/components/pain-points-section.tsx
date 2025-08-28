'use client'

import { bubbleVariants, colorsBubbles, painPoints } from '@/utils/points'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export const PainPointsSection = () => {
  const constraintsRef = useRef(null)

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-12 shadow-sm border">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IZQUIERDA */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium mb-8">
                  Pain Point
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                  Your Website Should Be Clear, Not Confusing
                </h2>
              </motion.div>

              <div className="space-y-8">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <point.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* DERECHA */}
            <div
              ref={constraintsRef}
              className="relative bg-slate-50 h-[500px] w-full rounded-xl overflow-hidden"
            >
              {colorsBubbles.map((bubble, i) => {
                const randomTop = Math.random() * 80 + 10
                const randomLeft = Math.random() * 80 + 10

                return (
                  <motion.div
                    key={bubble.text}
                    custom={i}
                    variants={bubbleVariants}
                    initial={{ opacity: 0, scale: 0, top: '50%', left: '50%' }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      top: `${randomTop}%`,
                      left: `${randomLeft}%`,
                    }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    whileTap={{ scale: 1.1 }}
                    className="absolute cursor-grab active:cursor-grabbing"
                  >
                    <div
                      className={`px-6 py-3 text-sm font-medium ${
                        bubble.color
                          ? `${bubble.color} text-white rounded-full shadow-lg`
                          : ''
                      }`}
                      style={bubble.style}
                    >
                      {bubble.text}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
