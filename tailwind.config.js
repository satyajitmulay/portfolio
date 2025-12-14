/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',  // Add this if you have a src folder
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#2563eb',
          secondary: '#1e40af',
          dark: '#0f172a',
          light: '#f8fafc',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          slideUp: {
            '0%': { transform: 'translateY(100px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }