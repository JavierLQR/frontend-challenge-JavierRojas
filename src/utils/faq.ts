import { FAQItem } from '@/components/faq/faq-section'

const faqData: FAQItem[] = [
  {
    question: 'How easy is it to customize this template?',
    answer:
      'This template is built with modern technologies like Next.js and Tailwind CSS, making customization straightforward. You can easily modify colors, fonts, layouts, and content to match your brand. The modular component structure allows for quick updates and scalability.',
  },
  {
    question: 'Is the template mobile-responsive?',
    answer:
      "Yes, this template is fully responsive and optimized for all device sizes. It uses Tailwind CSS's responsive utilities to ensure your content looks great on mobile phones, tablets, and desktop computers. The layout automatically adapts to provide the best user experience across all screen sizes.",
  },
  {
    question: 'What if I need help customizing the template?',
    answer:
      'We provide comprehensive documentation and support to help you customize the template. You can reach out to our support team for assistance, access detailed guides, or join our community forum where other users share tips and solutions.',
  },
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
export { faqData, containerVariants, itemVariants }
