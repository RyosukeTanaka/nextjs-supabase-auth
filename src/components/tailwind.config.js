const forms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'class'
  plugins: [forms],
};
