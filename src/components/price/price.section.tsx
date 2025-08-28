'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { containerVariants } from '@/utils/solution'
import { itemVariants, plans } from '@/utils/price'

export function PricingSection() {
  return (
    <motion.section
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
          Pricing
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Simple Plans for Every Need
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Start small or go {"all-in—there's"} a plan for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <motion.div key={plan.name} variants={itemVariants}>
            <Card
              className={`p-8 h-full ${
                plan.highlighted
                  ? 'bg-blue-700 shadow-2xl  text-white border-blue-500'
                  : 'bg-white border-gray-200'
              } `}
            >
              <div className="space-y-6">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.highlighted ? 'text-blue-100' : 'text-gray-600'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="py-4">
                  <div className="flex items-baseline">
                    <span
                      className={`text-5xl font-bold ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-lg ml-2 ${
                        plan.highlighted ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      /month
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.highlighted ? 'bg-white' : 'bg-gray-900'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.highlighted ? 'text-blue-500' : 'text-white'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-white' : 'text-gray-700'
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full py-3 text-sm font-medium rounded-full ${
                        plan.highlighted
                          ? 'bg-white text-black hover:bg-gray-50'
                          : 'bg-blue-700 shadow-2xl text-white hover:bg-blue-600'
                      }  `}
                    >
                      {plan.buttonText}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
