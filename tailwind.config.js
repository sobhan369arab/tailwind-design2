/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {colors:{
      'Skyblue':'#3FBDF1',
      'Mustard':'#F5BD33',
      'Charcoal':'#2E2E2E',
      'Whisper':'#F9F9F9',
    },
  },
  },
  plugins: [],
}