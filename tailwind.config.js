/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-beige': '#f3f0e8',
        'smoke-gray': '#2b2928',
        'mossy-green': {
          DEFAULT: '#4c4c40',
          light: '#6b7a65',
          dark: '#3a4138',
        },
        'fog-gray': '#887a72',
        'tree': '#8fa878',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
