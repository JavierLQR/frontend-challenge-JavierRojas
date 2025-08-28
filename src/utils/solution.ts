const chartData = [
  { time: '04:00', views: 52000, x: 80, y: 45 },
  { time: '08:00', views: 48000, x: 140, y: 55 },
  { time: '12:00', views: 61000, x: 200, y: 50 },
  { time: '16:00', views: 58000, x: 260, y: 45 },
  { time: '20:00', views: 67000, x: 320, y: 50 },
  { time: '24:00', views: 72000, x: 380, y: 30 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export { chartData, containerVariants, itemVariants }
