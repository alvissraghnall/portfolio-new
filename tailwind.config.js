const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#edf2f8',
        secondary: '#313bac',
        'deep-black': '#030303',
        'light-gray': '#e4e4e4',
        'normal-gray': '#6b7688',
        'normal-brown': '#46364a',
        blanc: '#ffffff',
      },
      screens: {
        'xs': '450px',
        ...defaultTheme.screens,
        '3xl': '1600px',
        '4xl': '2000px'
      },
      fontFamily: {
        "poppins": "Poppins", 
        "dm-sans": "DM Sans"
      }
    },
  },
  plugins: [],
}
