/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-pink": "#EC008C",
        "my-orange": "#FF7849",
        "my-white": "#FFFFFF",
        "my-gray": "#373737",
        "my-cream": "#FEF6E6",
        "my-bg-light-dark": "#212422",
        "my-p-txt": "#A2A2A2",
        // "my-footer-text": "#4D4D4D",
        "my-footer-text": "#1c1917",
        // "orange-500": "#FF7849",
        "orange-500": "#DA0060",
      },
    },
  },
  plugins: [],
};
