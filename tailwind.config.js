/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#1a365d',
          600: '#153051',
          700: '#102545',
          800: '#0b1a2e',
          900: '#050d17',
        },
        accent: {
          300: '#e6c06a',
          400: '#d4a54a',
          500: '#b8860b',
          600: '#9a7209',
          700: '#7c5c07',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
