/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101223',
        secondary: '#5B5D6B',
        ternary: '#ED5E8A',
        quaternary: '#D2D4DA',
        quinary: '#366C9B',
      }
    },
  },
  plugins: [],
};
