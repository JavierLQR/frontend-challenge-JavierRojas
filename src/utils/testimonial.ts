const testimonials = [
  // Column 1 - moves down
  [
    {
      name: 'Sarah K.',
      handle: '@sarah_k_designs',
      content:
        'The clean design and pre-built sections made it so easy to get up and running fast.',
      avatar: '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
    },
    {
      name: 'James P.',
      avatar: '/uMT9YSytwNhNKnHFnrMToRcSCI.avif',
      handle: '@jamespaultech',
      content:
        'The interactive features are top-notch. It helped us boost engagement on our landing page instantly.',
    },
    {
      name: 'Anya L.',
      avatar: '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
      handle: '@anya_creates',
      content:
        'Ive tried a lot of templates, but this one offers the perfect mix of design and flexibility.',
    },
    {
      name: 'Mike D.',
      handle: '@mikedevstudio',
      content:
        'As a startup, we needed something simple yet professional. This template delivered beyond our expectations!',
      avatar: '/uMT9YSytwNhNKnHFnrMToRcSCI.avif',
    },
  ],
  // Column 2 - moves up
  [
    {
      name: 'James P.',
      handle: '@jamespaultech',
      content: 'and its super easy to customize.',
      avatar: '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
    },
    {
      name: 'Sarah K.',
      handle: '@sarah_k_designs',
      content:
        "This template saved us so much time! The design is sleek, and it's super easy to customize.",
      avatar: '/uMT9YSytwNhNKnHFnrMToRcSCI.avif',
    },
    {
      name: 'Anya L.',
      handle: '@anya_creates',
      content:
        'Ive tried a lot of templates, but this one offers the perfect mix of design and flexibility.',
      avatar: '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
    },
    {
      name: 'Mike D.',
      handle: '@mikedevstudio',
      content:
        'As a startup, we needed something simple yet professional. This template delivered beyond our expectations!',
      avatar: '/uMT9YSytwNhNKnHFnrMToRcSCI.avif',
    },
  ],
  // Column 3 - moves down
  [
    {
      name: 'Sarah K.',
      handle: '@sarah_k_designs',
      content:
        'The clean design and pre-built sections made it so easy to get up and running fast.',
      avatar: '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
    },
    {
      name: 'James P.',
      handle: '@jamespaultech',
      content:
        'This template saved us so much time! The design is sleek, and its super easy to customize.',
      avatar: '/uMT9YSytwNhNKnHFnrMToRcSCI.avif',
    },
    {
      name: 'Anya L.',
      handle: '@anya_creates',
      content:
        'Ive tried a lot of templates, but this one offers the perfect mix of design and flexibility.',
      avatar: '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
    },
    {
      name: 'Mike D.',
      handle: '@mikedevstudio',
      content: 'As a startup, we needed something simple yet professional.',
      avatar: '/kIBiy2xM79Ac692vRBBeMc3YFw8.avif',
    },
  ],
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

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

const getAvatarColor = (name: string) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-indigo-500',
  ]
  const index = name.length % colors.length
  return colors[index]
}

export {
  testimonials,
  containerVariants,
  itemVariants,
  getInitials,
  getAvatarColor,
}
