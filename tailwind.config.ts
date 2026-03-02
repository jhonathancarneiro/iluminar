import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffaf02",
        secondary: "#0f3c53",
        accent: "#fbd25b",
        "background-light": "#fefeff",
        "background-dark": "#0f3c53",
      },
      fontFamily: {
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
