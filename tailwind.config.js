

/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: ["./App.tsx", "./screens/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}