/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,jsx}',
'./src/pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily:{
space:["Space Grotesk"],
chakra:['Chakra Petch'],
      },
      keyframes: {
        highlight: {
          '0%': {
            backgroundColor: "rgba(217, 119, 6, 0.4)",
            color: "white",
          },
          '50%': {
            backgroundColor: "transparent",
            color: "white",
          },
          '100%': {
            backgroundColor: "transparent",
            color: "white",
          }
        }
      },
      animation: {
  highlight: "highlight 3s infinite alternate ease-in-out",
      }
    },
  },
  plugins: [],
}

