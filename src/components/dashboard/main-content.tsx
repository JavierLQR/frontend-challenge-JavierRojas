'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const DashboardMain = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, -20])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  return (
    <div
      ref={ref}
      className="flex items-center justify-center perspective-[2000px]"
    >
      <motion.div style={{ rotateX, scale }}>
        <div className="rounded-xl border border-blue-100 overflow-hidden [box-shadow:0_25px_100px_-20px_rgba(59,130,246,0.3)]">
          <Image
            src={'/r5xnlhl9ePRqXV8x3gZxNzH4DhU.avif'}
            width={1300}
            height={1300}
            alt={'Dashboard'}
          />
        </div>
      </motion.div>
    </div>
  )
}
