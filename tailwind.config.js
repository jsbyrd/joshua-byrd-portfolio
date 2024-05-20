/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#070F2B',
        secondary: '#1B1A55',
        tertiary: '#535C91',
        quaternary: '#9290C3',
      }
    },
  },
  plugins: [],
}

// Current color palette: https://colorhunt.co/palette/070f2b1b1a55535c919290c3