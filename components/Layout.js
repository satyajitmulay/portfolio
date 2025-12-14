import Navbar from './Navbar'
import { motion } from 'framer-motion'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </>
  )
}