import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#070809",
          900: "#0c0d11",
          850: "#101116",
          800: "#15161c",
        },
        pulse: {
          lime: "#c4f74a",
          blue: "#74a4ec",
          violet: "#9a93c6",
          magenta: "#cf8fa8",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      screens: {
        xs: "420px",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
