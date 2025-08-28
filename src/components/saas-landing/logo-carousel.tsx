'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Company {
  name: string
  logo: string
  color: string
}

export function LogoCarousel() {
  const companies: Company[] = [
    {
      name: 'Acme Corp',
      logo: '/6kJd96HqMMSRXURwKHDf9yKRo.avif',
      color: 'text-gray-400',
    },
    {
      name: 'Luminous',
      logo: '/cMHtddg99ZaVxunXFXTwCT5A5CE.avif',
      color: 'text-gray-400',
    },
    {
      name: 'Layers',
      logo: '/Hnp7mnhiec141kuEweraJC9YVaw.png',
      color: 'text-gray-400',
    },
    {
      name: 'Calileo',
      logo: '/jGutgQSGa9VJGVvFcVDc7DjvbQI.png',
      color: 'text-blue-500',
    },
    {
      name: 'Polymoathc',
      logo: '/KnAPQsXXhjTZ0YsHEct5QTugQ.png',
      color: 'text-red-500',
    },
    {
      name: 'Sphenule',
      logo: '/M6ieiWsf24h6OykA5b71WzthM.png',
      color: 'text-yellow-500',
    },
    {
      name: 'Catalog',
      logo: '/ILxWGYU1EX4I7ETiOfm1vDB5UE.png',
      color: 'text-purple-500',
    },
    {
      name: 'FeatherDev',
      logo: '/l3k9gNNzSg57KQSNYZWd47Cur0.avif',
      color: 'text-green-500',
    },
  ]

  const duplicatedCompanies = [...companies, ...companies]

  return (
    <div className="mx-auto md:w-6/12 lg:w-6/12  overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative"
      >
        <div className="flex space-x-4 animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
              className="flex-shrink-0 flex items-center justify-center min-w-[150px] h-16"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={100}
                height={100}
                className={`h-8 w-full object-contain ${company.color}`}
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </motion.div>
    </div>
  )
}
