import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  HiUser, 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiBriefcase,
  HiAcademicCap,
  HiCode,
  HiSparkles
} from 'react-icons/hi'

const aboutData = {
  name: 'Satyajit Mule',
  role: 'Frontend Developer',
  email: 'mulesatyajit1505@gmail.com',
  phone: '+91 9763188944',
  location: 'Pune, Maharashtra 411027',
  experience: '3+ Years',
  projects: '10+',
  technologies: '15+',
  bio: `Frontend Developer with 3+ year's of experience building scalable, responsive, and user-friendly applications using React.js and modern web technologies. Seeking to contribute to a dynamic team while continuing to grow technically and professionally.`,
  summary: [
    '3+ years of experience developing responsive and scalable single-page applications (SPAs) using React.js and Redux',
    'Proficient in frontend technologies: HTML5, CSS3, JavaScript (ES6+), Bootstrap, and Tailwind CSS',
    'Skilled in customizing UI libraries like Material-UI and React-Bootstrap for modern, responsive designs',
    'Strong in DOM manipulation, debugging, and cross-browser compatibility',
    'Experienced with RESTful API integration using JSON and AJAX',
    'Familiar with Git, GitHub, Bitbucket for version control and Jenkins for CI/CD',
    'Adept at working in Agile (Scrum) environments with a focus on clean code and performance optimization'
  ]
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl rotate-6"></div>
                <Image
                  src="/profile.jpg"
                  alt="Satyajit Mule"
                  width={320}
                  height={320}
                  className="relative rounded-2xl w-full h-full object-cover"
                />
              </div>

              {/* Stats Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg"
                >
                  <HiBriefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{aboutData.experience}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg"
                >
                  <HiCode className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{aboutData.projects}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg"
                >
                  <HiSparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">{aboutData.technologies}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {aboutData.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HiUser className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Name</div>
                      <div className="font-medium">{aboutData.name}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HiMail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                      <a href={`mailto:${aboutData.email}`} className="font-medium hover:text-primary transition-colors">
                        {aboutData.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HiPhone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                      <a href={`tel:${aboutData.phone}`} className="font-medium hover:text-primary transition-colors">
                        {aboutData.phone}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <HiLocationMarker className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                      <div className="font-medium">{aboutData.location}</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
                <ul className="space-y-2">
                  {aboutData.summary.slice(0, 3).map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-primary mr-2 mt-1">▸</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}