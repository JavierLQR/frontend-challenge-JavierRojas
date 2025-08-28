import { Variants } from 'framer-motion'
import { Eye, Check, Star } from 'lucide-react'

export const painPoints = [
  {
    icon: Eye,
    title: 'Messy Layouts',
    description:
      "Your website feels cluttered. Our template's clean sections guide users easily.",
  },
  {
    icon: Check,
    title: 'Poor User Experience',
    description:
      'Navigation is confusing. This template makes everything clear and intuitive.',
  },
  {
    icon: Star,
    title: 'Boring, Static Design',
    description:
      'Users lose interest quickly. Add interactive features to keep them engaged.',
  },
]

export const bubbles = [
  { text: 'Engaging Contents', color: 'bg-blue-500', pos: 'top-0 left-8' },
  { text: 'No Strategy', color: 'bg-purple-500', pos: 'top-16 right-4' },
  { text: 'Customer acquisition', color: 'bg-green-500', pos: 'top-32 left-0' },
  { text: 'No Ideas', color: 'bg-pink-500', pos: 'top-48 left-12' },
  { text: 'Poor Analytics', color: 'bg-blue-600', pos: 'top-64 right-8' },
]

export const colorsBubbles = [
  {
    text: 'Engaging Contents',
    color: 'bg-blue-500',
    pos: 'top-0 left-8',
    style: {
      background: 'linear-gradient(180deg, #6ed8ff 0%, rgb(46, 137, 255) 100%)',
      borderRadius: '16px',
      boxShadow: 'inset 0 0 4px 2px #ffffff47, 0 0 8px 1px #2e89ff66',
    },
  },
  {
    text: 'No Strategy',
    color: 'bg-purple-500',
    pos: 'top-16 right-4',
    style: {
      background: 'linear-gradient(180deg, #b96eff 0%, rgb(154, 46, 255) 100%)',
      borderRadius: '16px',
      boxShadow: 'inset 0 0 4px 2px #ffffff47, 0 0 8px 1px #b96eff66',
    },
  },
  {
    text: 'Customer acquisition',
    color: 'white',
    pos: 'top-32 left-0',
    style: {
      background: 'linear-gradient(180deg, #91ffb4 0%, rgb(24, 222, 133) 100%)',
      borderRadius: '16px',
      boxShadow: 'inset 0 0 4px 2px #ffffff47, 0 0 8px 1px #69bf1966',
    },
  },
  {
    text: 'No Ideas',
    color: 'bg-pink-500',
    pos: 'top-48 left-12',
    style: {
      background: 'linear-gradient(180deg, #ff6ec0 0%, rgb(255, 46, 126) 100%)',
      borderRadius: '16px',
      boxShadow: 'inset 0 0 4px 2px #ffffff47, 0 0 8px 1px #ff2e7e66',
    },
  },
  {
    text: 'Poor Analytics',
    color: 'bg-blue-600',
    pos: 'top-64 right-8',
    style: {
      background: 'linear-gradient(180deg, #6e90ff 0%, rgb(46, 81, 255) 100%)',
      borderRadius: '16px',
      boxShadow: 'inset 0 0 4px 2px #ffffff47, 0 0 8px 1px #2e51ff66',
    },
  },
]

/* ----------------------------- VARIANTS ----------------------------- */
export const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: -200, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.8,
      delay: i * 0.2,
    },
  }),
}
