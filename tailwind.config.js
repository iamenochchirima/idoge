/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'retro': ['Retro', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
          },
      },
      screens: {
        ts: "360px",
        xs: "375px",
        ss: "620px",
        sm: "770px",
        md: "900px",
        mid: "1024px",
        lg: "1200px",
        xl: "1700px",
      },
    },
    plugins: [],
  }
  