/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#13ec5b',
        positive: "#16a34a", // green-600
        negative: "#dc2626", // red-600
        'background-light': '#f6f8f6',
        'background-dark': '#102216',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    }
  },
  plugins: [require("@tailwindcss/forms")],
}

