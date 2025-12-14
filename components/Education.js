import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HiAcademicCap, 
  HiCalendar, 
  HiLocationMarker,
  HiBookOpen,
  HiDesktopComputer,
  HiCode
} from 'react-icons/hi'

const education = {
  degree: 'BSC Computer Science',
  institution: 'RBNB College Shrirampur',
  location: 'Maharashtra',
  year: '2020',
  achievements: [
    'Specialized in Software Development and Web Technologies',
    'Completed projects in React.js and JavaScript',
    'Active member of the Computer Science Club',
    'Participated in various coding competitions'
  ],
  coursework: [
    'Data Structures & Algorithms',
    'Web Development',
    'Database Management Systems',
    'Object-Oriented Programming',
    'Software Engineering',
    'Computer Networks'
  ]
}

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="text-primary">Background</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Education Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center mb-4"
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <HiAcademicCap className="w-12 h-12" />
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-center mb-2"
                >
                  {education.degree}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-center opacity-90"
                >
                  {education.institution}
                </motion.p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HiLocationMarker className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-semibold">{education.location}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HiCalendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Graduation Year</p>
                      <p className="font-semibold">{education.year}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Key Coursework */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="mb-8"
                >
                  <div className="flex items-center mb-4">
                    <HiBookOpen className="w-6 h-6 text-primary mr-2" />
                    <h4 className="text-xl font-semibold">Key Coursework</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {education.coursework.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-lg text-sm text-center"
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center mb-4">
                    <HiDesktopComputer className="w-6 h-6 text-primary mr-2" />
                    <h4 className="text-xl font-semibold">Achievements & Activities</h4>
                  </div>
                  <ul className="space-y-3">
                    {education.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2 mt-1">▸</span>
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Additional Certifications or Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <HiCode className="w-10 h-10 text-primary mb-3" />
                <h5 className="font-semibold mb-2">Technical Skills</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Proficient in React.js, JavaScript, and modern web technologies
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <HiDesktopComputer className="w-10 h-10 text-primary mb-3" />
                <h5 className="font-semibold mb-2">Project Work</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Completed multiple projects using React.js and Redux
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <HiAcademicCap className="w-10 h-10 text-primary mb-3" />
                <h5 className="font-semibold mb-2">Continuous Learning</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Always learning new technologies and best practices
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}