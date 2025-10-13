/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Natural Accent Palette
        accent: {
          DEFAULT: '#2c2c2c',
          light: '#4a4a4a',
          dark: '#0a0a0a',
        },
        // Off-Black & Off-White - Natural Tones
        'off-black': '#0f0f0f',
        'off-white': '#fafaf9',
        black: '#0f0f0f',
        white: '#fafaf9',
        // Gray Scale - Natural Tones
        gray: {
          light: '#f5f5f4',
          DEFAULT: '#e7e7e5',
          medium: '#e7e7e5',
          dark: '#525252',
        },
        // Hover state
        hover: {
          accent: '#737373',
        },
      },
      fontFamily: {
        // Instrument Serif for everything
        sans: ['Instrument Serif', 'serif'],
        serif: ['Instrument Serif', 'serif'],
        heading: ['Instrument Serif', 'serif'],
        body: ['Instrument Serif', 'serif'],
      },
      animation: {
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-left-slow': 'fadeInLeftSlow 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeftSlow: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
