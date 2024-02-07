/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{js,jsx}',
'./src/pages/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          '0%': {
            backgroundColor: "rgba(270, 175, 80, 0.5)",
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

