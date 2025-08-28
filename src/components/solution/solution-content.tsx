'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { itemVariants } from '@/utils/solution'
import { AvatarImage } from '@radix-ui/react-avatar'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SoluctionContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div variants={itemVariants}>
        <Card className="bg-white shadow-sm border border-gray-200 p-6 h-full">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-16 h-16 bg-blue-500 shadow rounded-2xl flex items-center justify-center">
              <Image
                src={'/gqefi7pLLNipPKP6TIWXO9QGazE.avif'}
                alt="share"
                width={200}
                height={200}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Publish Anywhere
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Share content across multiple platforms like LinkedIn, your
                blog, or newsletters, no extra setup.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white shadow-sm border border-gray-200 p-6 h-full">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start space-x-3">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage
                  src="/adA3ca5MJSdYVtT9ZmtqJigs.avif"
                  alt="Katy"
                  className="object-cover w-full"
                />
                <AvatarFallback className="bg-blue-500 text-white text-sm">
                  B
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm mb-1">Blguun</p>
                <p className="text-sm text-gray-600">
                  Share a recent learning with your followers.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Get Smarter Content Suggestions
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leverage AI tools to get personalized recommendations for
                improving your site.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-white shadow-sm border border-gray-200 p-6 h-full">
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage
                    src="/adA3ca5MJSdYVtT9ZmtqJigs.avif"
                    alt="Katy"
                    className="object-cover w-full"
                  />
                  <AvatarFallback className="bg-purple-500 text-white text-xs">
                    K
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm mb-1">Katy</p>
                  <p className="text-xs text-gray-600">This is awesome!!!</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage
                    src="/uMT9YSytwNhNKnHFnrMToRcSCI.avif"
                    alt="Katy"
                    className="object-cover w-full"
                  />
                  <AvatarFallback className="bg-green-500 text-white text-xs">
                    T
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm mb-1">
                    Taylor
                  </p>
                  <p className="text-xs text-gray-600">
                    {"Tomorrow's"} going to be awesome day!!!
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Gather Instant User Insights
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Collect and analyze user feedback directly on your site with
                built-in tools.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default SoluctionContent
