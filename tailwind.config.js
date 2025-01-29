export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
  extend: {
    animation: {
      slide: "slide 2src infinite",
    },
    keyframes: {
      slide: {
        "0%, 100%": { opacity: "1" },
        "50.1%, 100%": { opacity: "0" },
      },
    },
  },
};
