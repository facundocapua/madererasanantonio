/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#fff5ed',
          100: '#ffe9d5',
          200: '#fed0aa',
          300: '#fdae74',
          400: '#fb7e37',
          500: '#f95f16',
          600: '#ea440c',
          700: '#c2310c',
          800: '#9a2812',
          900: '#7c2412',
          950: '#430f07'
        }
      }
    }
  },
  plugins: []
}
