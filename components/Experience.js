import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCalendar, HiOfficeBuilding, HiCode, HiChip } from 'react-icons/hi'

const experiences = [
  {
    id: 1,
    position: 'Software Engineer',
    company: 'Aswath Software Pvt Ltd.',
    duration: 'Dec 2024 - Present',
    current: true,
    project: 'Aswath Education',
    description: 'An online education platform offering a range of educational courses, learning modules, and interactive content for students.',
    modules: [],
    responsibilities: [
      'Developing and maintaining Frontend components using React.js, Material UI, and Redux',
      'Built reusable and responsive UI components to deliver seamless learning experiences',
      'Working on CI/CD pipelines using Jenkins for seamless deployment to the server',
      'Collaborated with the backend team to integrate APIs for dynamic course content',
      'Using GitHub and Bitbucket for version control and collaborative development',
      'Managed code via BitBucket and handled deployments using Jenkins CI/CD pipelines'
    ],
    technologies: ['React.js', 'Redux', 'Material UI', 'Jenkins', 'Git', 'Bitbucket', 'JavaScript', 'RESTful APIs']
  },
  {
    id: 2,
    position: 'Software Engineer',
    company: 'Tanasvi Technologies Pvt Ltd.',
    duration: 'Jan 2022 - Jan 2024',
    current: false,
    project: 'My Career Build',
    description: 'A platform for online training, job search, and career guidance.',
    modules: [
      { name: 'My Career Path', description: 'Helps users explore step-by-step career progressions' },
      { name: 'Online Training', description: 'Conducts live training sessions via Google Meet' },
      { name: 'Job Posting', description: 'Enables companies to post jobs and hire via bidding' },
      { name: 'Job Searching', description: 'Allows candidates to search for jobs by updating their profile' }
    ],
    responsibilities: [
      'Translated customer requirements into effective technical solutions',
      'Developed frontend using HTML5, CSS3, JavaScript (ES6), React.js, Material-UI, and React-Bootstrap',
      'Built reusable components and implemented Redux for state management',
      'Interacted with the backend team to test and consume APIs',
      'Ensured responsive, cross-browser compatible UI using React-Bootstrap and media queries',
      'Regularly maintained and enhanced existing systems by fixing bugs and adding features'
    ],
    technologies: ['React.js', 'Redux', 'JavaScript ES6', 'HTML5', 'CSS3', 'Material-UI', 'React-Bootstrap', 'RESTful APIs']
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in building scalable and user-friendly web applications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:ml-auto'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute top-0 left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg z-10"
                  >
                    <HiOfficeBuilding className="w-6 h-6 text-white" />
                    {exp.current && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all ml-12 md:ml-0"
                  >
                    {/* Header */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 justify-start md:justify-end">
                        <HiCalendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">
                          {exp.duration}
                          {exp.current && (
                            <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </span>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="flex items-center mb-2 justify-start md:justify-end">
                        <HiCode className="w-5 h-5 mr-2 text-primary" />
                        <h4 className="font-semibold">Project: {exp.project}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {exp.description}
                      </p>
                    </div>

                    {/* Modules if any */}
                    {exp.modules.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-left">Key Modules:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                          {exp.modules.map((module, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-700 p-3 rounded-lg">
                              <h5 className="font-medium text-primary text-sm">{module.name}</h5>
                              <p className="text-xs text-gray-600 dark:text-gray-400">{module.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div className="text-left">
                      <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="text-primary mr-2 mt-1">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}