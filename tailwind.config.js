/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [
    function ({ addVariant }) {
      addVariant("child-span", "&  span");
    },
  ],
  theme: {
    extend: {},
  },
};
