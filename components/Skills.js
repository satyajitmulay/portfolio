import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiGit,
  SiGithub,
  SiBitbucket,
  SiJenkins,
  SiPostman,
  SiTypescript,
  SiAmazonaws,
  SiMysql,
  SiFastapi
} from 'react-icons/si'
import { DiResponsive } from "react-icons/di";
import { FaTasks } from "react-icons/fa";     // for Agile (Scrum)


const skillCategories = [
  {
    title: 'Frontend Technologies',
    icon: '💻',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34C26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ]
  },
  {
    title: 'UI Frameworks',
    icon: '🎨',
    skills: [
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Material-UI', icon: SiMui, color: '#0081CB' },
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Bitbucket', icon: SiBitbucket, color: '#0052CC' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'AWS', icon: SiAmazonaws, color: '#232F3E' },
    ]
  },
  {
    title: 'Other Skills',
    icon: '⚡',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'REST APIs', icon: SiFastapi, color: '#FF6B6B' },
      { name: 'Responsive Design', icon: DiResponsive, color: '#4ECDC4' },
      { name: 'Agile (Scrum)', icon: FaTasks, color: '#FF6B6B' },
    ]
  }
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    {skill.icon ? (
                      <skill.icon 
                        className="w-8 h-8 mb-2" 
                        style={{ color: skill.color }}
                      />
                    ) : (
                      <div 
                        className="w-8 h-8 mb-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    )}
                    <span className="text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}