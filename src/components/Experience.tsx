import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView && timelineRef.current) {
      // GSAP animation for timeline items
      const items = timelineRef.current.querySelectorAll('.timeline-item')
      gsap.fromTo(
        items,
        {
          opacity: 0,
          x: -100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }
  }, [inView])

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance & Personal Projects',
      period: '2022 - Present',
      location: 'Remote',
      description: [
        'Developed cross-platform mobile applications using React Native and Expo',
        'Built responsive web applications with React, TypeScript, and TailwindCSS',
        'Created desktop applications using Electron and C#',
        'Implemented real-time tracking systems with GPS and mapping integration',
        'Designed and developed brand websites with modern UI/UX',
      ],
      technologies: ['React Native', 'React', 'TypeScript', 'Node.js', 'Electron'],
    },
    {
      title: 'Mobile App Developer',
      company: 'Bus Trucker Project',
      period: '2023 - 2024',
      location: 'Egypt',
      description: [
        'Developed real-time bus tracking application for Egyptian transportation',
        'Implemented GPS location tracking with 1-second update intervals',
        'Built driver and passenger interfaces with live map visualization',
        'Created backend API for real-time data synchronization',
        'Integrated OpenStreetMap routing and Expo Maps',
      ],
      technologies: ['React Native', 'Expo', 'Node.js', 'OpenStreetMap', 'GPS'],
    },
    {
      title: 'Educational App Developer',
      company: 'Valley Language Schools',
      period: '2023',
      location: 'Kotlin Project',
      description: [
        'Developed comprehensive school management app in Kotlin',
        'Implemented authentication and role-based access control',
        'Created teacher interface for homework and exam management',
        'Built student submission system with instant scoring',
        'Added 3D elements and smooth animations',
      ],
      technologies: ['Kotlin', 'Android', '3D Graphics', 'Animations'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Experience & Timeline
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software development
          </p>
        </motion.div>

        <div
          ref={ref}
          className="relative"
        >
          <div ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 dark:from-primary-600 dark:via-primary-500 dark:to-primary-400 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10" />

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                          <Briefcase size={16} className="mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mr-2">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


