'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { buttonVariants, containerVariants } from '@/utils/cta'

export function CTASection() {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mt-16 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="bg-blue-700 shadow-2xl rounded-3xl px-8 py-16 text-center text-white">
          <motion.h2
            className="text-3xl md:text-5xl max-w-[600px] mx-auto  font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Start Building Your SaaS Success Today
          </motion.h2>

          <motion.p
            className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Take your SaaS from zero to hero with our flexible and
            conversion-focused template.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-50 font-semibold px-8 py-3 rounded-full text-lg"
              >
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
