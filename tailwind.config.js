/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      "soft-blue": "hsl(231, 69%, 60%)",
      "soft-red": "hsl(0, 94%, 66%)",
      "grayish-blue": "hsl(229, 8%, 60%)",
      "dark-blue": "hsl(229, 31%, 21%)",
    },
    extend: {},
  },
  plugins: [],
};
