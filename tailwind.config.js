// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables toggleable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Modern Blue
        darkBg: '#0f172a',  // Slate 900
      }
    },
  },
  plugins: [],
}

