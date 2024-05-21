/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#393E46',
        tertiary: '#00FFFF',
        quaternary: '#DDDDDD',
      },
    },
  },
  plugins: [],
}

// Current color palette: https://colorhunt.co/palette/070f2b1b1a55535c919290c3