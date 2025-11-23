import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { User, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const photoRef = useRef<HTMLDivElement>(null)
  const ageBadgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      // GSAP animation for photo
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { opacity: 0, scale: 0.8, rotation: -10 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 0.2 }
        )
      }

      // GSAP animation for age badge
      if (ageBadgeRef.current) {
        gsap.fromTo(
          ageBadgeRef.current,
          { opacity: 0, scale: 0, rotation: -45 },
          { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)', delay: 0.6 }
        )
      }
    }
  }, [inView])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Passionate developer crafting innovative solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Photo Section */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <div
                ref={photoRef}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary-200 dark:ring-primary-800"
              >
                <img
                  src="/kareem-image.jpg"
                  alt="Kareem Diyaa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div
                ref={ageBadgeRef}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-5 py-2.5 rounded-lg shadow-xl font-bold text-lg"
              >
                Age: 18
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Hello! I'm <strong className="text-primary-600 dark:text-primary-400">Kareem Diyaa</strong>, an <strong className="text-primary-600 dark:text-primary-400">18-year-old</strong> full-stack developer 
                specializing in mobile and web applications. I'm passionate about creating seamless user experiences 
                and building robust, scalable solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With expertise spanning from React Native mobile apps to Electron desktop applications, 
                I bring a comprehensive approach to software development. My work includes real-time tracking systems, 
                educational platforms, and modern web applications that combine functionality with beautiful design.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond coding, I have a deep understanding of embedded systems, networking, and hardware integration, 
                allowing me to tackle complex projects that bridge software and hardware boundaries.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards - Below photo and text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <User className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Full-Stack Expertise
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    End-to-end development from mobile apps to backend APIs and databases
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Target className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Problem Solver
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Turning complex challenges into elegant, maintainable solutions
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Lightbulb className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Continuous Learner
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Always exploring new technologies and best practices
                  </p>
                </div>
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


