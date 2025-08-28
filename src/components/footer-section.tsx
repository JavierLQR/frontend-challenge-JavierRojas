'use client'

import { footerVariants, itemVariants } from '@/utils/footer'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import LogoSection from './footer/logo-footer'

export function FooterSection() {
  return (
    <>
      <LogoSection />
      <motion.footer
        className="bg-white py-12 mt-6"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-between  items-start">
              <motion.div
                variants={itemVariants}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                  </div>
                  <span className="font-medium text-gray-900">SaaSwiftie</span>
                </div>
                <p className="text-sm text-gray-500">
                  ©2024 SaaSify. All rights reserved.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </div>

            <motion.nav
              variants={itemVariants}
              className="flex justify-center space-x-8 border-t"
            >
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a
                href="#solution"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Solution
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Pricing
              </a>
            </motion.nav>

            <motion.div variants={itemVariants} className="flex justify-center">
              <p className="text-sm text-gray-500">
                Template by Elevate Studio
              </p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  )
}
