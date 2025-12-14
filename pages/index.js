import dynamic from 'next/dynamic'
import SEO from '@/components/SEO'
import Hero from '@/components/Hero'

// Dynamic imports for better performance
const About = dynamic(() => import('@/components/About'))
const Skills = dynamic(() => import('@/components/Skills'))
const Experience = dynamic(() => import('@/components/Experience'))
const Education = dynamic(() => import('@/components/Education'))
const Contact = dynamic(() => import('@/components/Contact'))

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}