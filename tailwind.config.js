/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FEA47F",
        accentDark: "#FD7272",
      },
      container: {
        center: true,
        padding: "15px",
      }
    },
  },
  plugins: [],
}