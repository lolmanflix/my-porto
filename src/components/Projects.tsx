import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ExternalLink, Github, Smartphone, Globe, Palette, Monitor, MapPin, GraduationCap, ShoppingBag } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  useEffect(() => {
    if (inView) {
      // GSAP animation for project cards
      const cards = document.querySelectorAll('.project-card')
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          }
        )
      }
    }
  }, [inView, activeFilter])

  const projects = [
    {
      id: 1,
      title: 'Auto Repair Workshop Desktop App',
      category: 'desktop',
      icon: Monitor,
      description: 'Modern Arabic GUI desktop application for managing auto repair workshops. Features client registration, car management, odometer tracking, and comprehensive repair history.',
      features: [
        'Tesla-inspired start page design',
        'Client & car registration system',
        'Odometer input and tracking',
        'Storage page with search (phone/plate)',
        'Repair history viewer',
        'Excel-based database',
        'Full CRUD operations',
      ],
      technologies: ['Electron', 'React', 'TypeScript', 'Excel', 'Windows'],
      color: 'from-blue-500 to-blue-600',
      image: null,
    },
    {
      id: 2,
      title: 'Kotlin School App - Valley Language Schools',
      category: 'mobile',
      icon: GraduationCap,
      description: 'Comprehensive school management application with teacher and student interfaces. Features homework uploads, exam management, instant scoring, and beautiful 3D animations.',
      features: [
        'Login/signup/logout system',
        'Teacher interface for content upload',
        'Student exam submissions',
        'Instant scoring system',
        '3D elements and animations',
        'Smooth UI transitions',
      ],
      technologies: ['Kotlin', 'Android', '3D Graphics', 'Animations'],
      color: 'from-green-500 to-green-600',
      image: null,
    },
    {
      id: 3,
      title: 'Bus Trucker - Real-Time Bus Tracking',
      category: 'mobile',
      icon: MapPin,
      description: 'Real-time bus tracking application for Egyptian transportation. Tracks buses live with GPS updates every second, featuring driver and passenger interfaces with full route visualization.',
      features: [
        'Real-time GPS tracking (1 sec updates)',
        'Driver app with location sending',
        'Live bus viewing for users',
        'Company account management',
        'Full route visualization',
        'OpenStreetMap integration',
      ],
      technologies: ['React Native', 'Expo', 'Node.js', 'OpenStreetMap', 'GPS', 'Real-time'],
      color: 'from-purple-500 to-purple-600',
      image: null,
    },
    {
      id: 4,
      title: 'Renaissance Hoodie Brand Website',
      category: 'web',
      icon: ShoppingBag,
      description: 'E-commerce website for Renaissance brand, celebrating Renaissance art and Greek mythology. Features modern design with the tagline "Where the Past Rises to Meet the Future".',
      features: [
        'Brand identity design',
        'Product collections showcase',
        'Renaissance art theme',
        'Greek mythology series',
        'Modern e-commerce UI',
        'Responsive design',
      ],
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'E-commerce'],
      color: 'from-amber-500 to-amber-600',
      image: null,
      link: 'https://kaleidoscopic-swan-a70e5e.netlify.app/',
    },
    {
      id: 5,
      title: 'Mahmoud Alapasi Modeling Portfolio',
      category: 'web',
      icon: Palette,
      description: 'Professional portfolio website for a modeling career. Features gallery, contact form, and modern design showcasing commercial and lifestyle modeling work.',
      features: [
        'Image gallery',
        'Contact form',
        'About section',
        'Blog section',
        'Modern UI/UX',
        'SEO optimized',
      ],
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'SEO'],
      color: 'from-pink-500 to-pink-600',
      image: null,
      link: 'https://mahmoud-alapasi.netlify.app/',
    },
    {
      id: 6,
      title: 'Crush Brand Website',
      category: 'web',
      icon: Globe,
      description: 'Brand website showcasing products and brand identity with modern design and smooth animations.',
      features: [
        'Brand showcase',
        'Product display',
        'Modern animations',
        'Responsive design',
      ],
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      color: 'from-indigo-500 to-indigo-600',
      image: null,
      link: 'https://crush-brand.netlify.app/',
    },
    {
      id: 7,
      title: '3D Pyramid Food Groups Project',
      category: 'other',
      icon: GraduationCap,
      description: 'Interactive 3D model project for school presentation, demonstrating food groups in an engaging visual format.',
      features: [
        'Interactive 3D model',
        'Educational content',
        'School presentation',
        'Visual learning tool',
      ],
      technologies: ['3D Graphics', 'WebGL', 'Education'],
      color: 'from-teal-500 to-teal-600',
      image: null,
    },
    {
      id: 8,
      title: 'School Portfolio Website',
      category: 'web',
      icon: Globe,
      description: 'Multi-section portfolio website featuring projects, achievements, professional animations, and international student section.',
      features: [
        'Projects showcase',
        'Achievements section',
        'Professional animations',
        'International student section',
        'Multi-section layout',
      ],
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Animations'],
      color: 'from-cyan-500 to-cyan-600',
      image: null,
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Apps' },
    { id: 'desktop', label: 'Desktop Apps' },
    { id: 'other', label: 'Other' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work and achievements
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  layout
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="project-card bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li
                            key={index}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects


