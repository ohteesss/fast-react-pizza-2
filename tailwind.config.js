/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono, monospace"],
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      colors: {
        pizza: "#123456",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
