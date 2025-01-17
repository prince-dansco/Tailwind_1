/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      ssm:"320px",
      sm:"640px",
      md:"760px",
      lg:"1024px"
    },
    extend: {},
  },
  plugins: [],
}