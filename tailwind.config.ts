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
          950: "#05050c",
          900: "#08070f",
          850: "#0b0a16",
          800: "#11101f",
        },
        pulse: {
          lime: "#c4f74a",
          blue: "#5b9dff",
          violet: "#a98bff",
          magenta: "#f25fd0",
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
