/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flip: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        flip: "flip 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
