/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 3s ease-in-out infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}
