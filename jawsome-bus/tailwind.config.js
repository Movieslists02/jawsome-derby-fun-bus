/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(40 20% 20%)",
        input: "hsl(40 20% 20%)",
        ring: "hsl(45 90% 55%)",
        background: "hsl(0 0% 3%)",
        foreground: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(45 90% 55%)",
          foreground: "hsl(0 0% 0%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 8%)",
          foreground: "hsl(0 0% 65%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 7%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
      fontFamily: {
        heading: ["Impact", "Arial Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}