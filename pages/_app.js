import '../styles/globals.css'  // THIS IS THE CRITICAL IMPORT!
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className={`${inter.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}