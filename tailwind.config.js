/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'vercel-bg': '#000000',
        'vercel-card': '#111111',
        'vercel-border': '#333333',
        'vercel-text': '#888888',
        'vercel-light': '#ffffff',
        'vercel-accent': '#0070f3',
      },
    },
  },
  plugins: [],
}