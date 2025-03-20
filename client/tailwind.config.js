/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure this points to your template files
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ['Playfair Display', 'serif'],
        TitilliumWeb: ['Titillium Web', 'serif'],
        Raleway: ["Raleway", 'sans serif']
      }
    },
  },
  plugins: [],
};


