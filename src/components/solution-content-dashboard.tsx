'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TrendingUp, Calendar } from 'lucide-react'
import { chartData, containerVariants, itemVariants } from '@/utils/solution'
import SoluctionContent from './solution/solution-content'

const SolutionContentDashboard = () => {
  return (
    <motion.div
      className="min-h-screen  p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
            Solution
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            A Template Built to Convert
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed to guide users through your key offerings while showcasing
            your {"product's"} value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <Card className="bg-white shadow h-full  p-5">
              <div className="space-y-6">
                <div className=" max-w-md mx-auto border p-4 rounded-2xl  space-y-8">
                  <div className="flex   items-start space-x-4">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage
                        src="/uMT9YSytwNhNKnHFnrMToRcSCI.avif"
                        alt="Profile"
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gray-300 text-gray-600 text-sm">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3 pt-1">
                      <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full w-4/5"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex justify-start"
                  >
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-medium">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </Button>
                  </motion.div>
                </div>

                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Write & Schedule with Ease
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Effortlessly create and organize content, perfect for blogs,
                    landing pages, and more.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div className="lg:col-span-8" variants={itemVariants}>
            <Card className="bg-white shadow-sm border border-gray-200 p-6 py-8 h-full">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-2">
                    Views 24 hours
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-5xl font-bold text-blue-500">100K</h2>
                    <motion.div
                      className="flex items-center text-xs text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <TrendingUp className="h-3 w-3 mr-1" />
                      100% vs last month
                    </motion.div>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full">
                    <svg className="w-full h-full" viewBox="0 0 400 80">
                      <text x="10" y="15" className="text-xs fill-gray-400">
                        100k
                      </text>
                      <text x="15" y="45" className="text-xs fill-gray-400">
                        50k
                      </text>
                      <text x="25" y="75" className="text-xs fill-gray-400">
                        0
                      </text>

                      <motion.polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        points="40,60 80,45 140,55 200,50 260,45 320,50 380,30"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 5,
                          delay: 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />

                      {chartData.map((point, index) => (
                        <motion.circle
                          key={index}
                          cx={point.x}
                          cy={point.y}
                          r="2.5"
                          fill="#3B82F6"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    Data-Driven Decisions
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Track performance metrics instantly to optimize content and
                    strategy.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <SoluctionContent />
      </div>
    </motion.div>
  )
}

export default SolutionContentDashboard
