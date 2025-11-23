import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import {
  Smartphone,
  Globe,
  Database,
  Code,
  Cpu,
  Network,
  FileCode,
  Server,
  Layers,
  Zap,
  Code2,
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const languagesCardRef = useRef<HTMLDivElement>(null)
  const skillsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && languagesCardRef.current) {
      // GSAP animation for Languages card
      gsap.fromTo(
        languagesCardRef.current,
        { 
          opacity: 0, 
          scale: 0.8,
          rotation: -5
        },
        { 
          opacity: 1, 
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.3
        }
      )

      // Animate skill tags with stagger
      const skillTags = languagesCardRef.current.querySelectorAll('.skill-tag')
      gsap.fromTo(
        skillTags,
        {
          opacity: 0,
          scale: 0,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      )
    }
  }, [inView])

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Expo', 'Kotlin (Android)', 'iOS Development'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Desktop Apps',
      icon: FileCode,
      skills: ['Electron', 'React + TSX', 'C#', 'Windows Apps'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'REST APIs', 'Real-time Systems'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['SQL', 'JSON', 'Excel-based DBs', 'Data Persistence'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Languages',
      icon: Code2,
      skills: ['HTML', 'CSS', 'TypeScript', 'JavaScript', 'C++', 'C#', 'Kotlin'],
      color: 'from-indigo-500 to-indigo-600',
      isSpecial: true, // Mark Languages as special to show HTML/CSS prominently
    },
    {
      title: 'Embedded & Hardware',
      icon: Cpu,
      skills: ['ESP32', 'Object Detection', 'AC/DC Circuits', 'Networking'],
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Maps & Routing',
      icon: Network,
      skills: ['OpenStreetMap', 'Expo Maps', 'Google Maps', 'GPS Tracking'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      title: 'Additional Skills',
      icon: Zap,
      skills: ['Reverse Engineering', 'FTP', 'SEO Optimization', '3D Graphics'],
      color: 'from-yellow-500 to-yellow-600',
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for modern development
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const isLanguages = category.title === 'Languages'
            
            return (
              <motion.div
                key={index}
                ref={isLanguages ? languagesCardRef : null}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg border-2 ${
                  isLanguages 
                    ? 'border-indigo-400 dark:border-indigo-600 shadow-indigo-200/50 dark:shadow-indigo-900/50' 
                    : 'border-gray-200 dark:border-gray-700'
                } hover:shadow-xl transition-shadow ${
                  isLanguages ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white shadow-md ${
                    isLanguages ? 'ring-2 ring-indigo-300 dark:ring-indigo-700' : ''
                  }`}>
                    <Icon size={24} />
                  </div>
                  <h3 className={`text-xl font-semibold ml-4 ${
                    isLanguages 
                      ? 'text-indigo-700 dark:text-indigo-400' 
                      : 'text-gray-900 dark:text-gray-100'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const isHTML = skill === 'HTML'
                    const isCSS = skill === 'CSS'
                    return (
                      <span
                        key={skillIndex}
                        className={`skill-tag px-3 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-default ${
                          isHTML || isCSS
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-400 shadow-md hover:shadow-lg hover:scale-105'
                            : 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800 hover:bg-primary-200 dark:hover:bg-primary-800'
                        }`}
                      >
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


