/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      boxShadow: {
        shimmershadow: "0 0 30px 30px rgba(255, 255, 255, 0.05)",
      },

      keyframes: {
        shimmer: {
          "0%": {
            transform: "translateX(-150%)",
          },
          "50%": {
            transform: "translateX(-60%)",
          },
          "100%": {
            transform: "translateX(150%)",
          },
        },
      },

      animation: {
        shimmer: "shimmer 2.5s infinite ",
      },
    },
    plugins: [],
  },
};
