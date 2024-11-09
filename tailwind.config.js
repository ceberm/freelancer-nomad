/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silk: '#EEE5D9',
        champagne: '#D2B68A',
        marble: '#1D2A44',
        onyx: '#B17A6D',
        velvet: '#222D52',
        pearl: '#F9F8F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [],
};
