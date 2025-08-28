'use client'

import { useEffect, useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'

export const useScrollAnimation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView)
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      })
    else
      controls.start({
        opacity: 0,
        y: -50,
        transition: {
          duration: 0.4,
          ease: 'easeIn',
        },
      })
  }, [isInView, controls])

  return { ref, controls }
}
