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

const plans = [
  {
    name: 'Essential',
    description:
      'Ideal for individuals and small teams looking for simple, powerful tools.',
    price: 29,
    features: [
      'Up to 10 Pages',
      'Basic Customization Options',
      'Core Analytics Tools',
      'Email Support',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'default' as const,
    highlighted: false,
  },
  {
    name: 'Pro',
    description:
      'Ideal for individuals and small teams looking for simple, powerful tools.',
    price: 79,
    features: [
      'Unlimited Pages',
      'Full Customization & Branding',
      'Advanced Analytics & A/B Testing',
      'Priority Email Support',
    ],
    buttonText: 'Go Pro',
    buttonVariant: 'secondary' as const,
    highlighted: true,
  },
]

export { plans, containerVariants, itemVariants }
