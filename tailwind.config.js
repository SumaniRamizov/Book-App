/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        brown: '#453831',
        orange: '#FF4900',
        card: '#1F2024',
        textcolor: '#F8EFBA'
      }
    },
  },
  plugins: [],
}

