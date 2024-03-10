import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.9rem",
      },
      colors: {
        primary: "#183544",
        secondary: "#ff531d",
        gray: "rgba(102,102,102,0.7)",
        grayBlue: "#334862",
        dark: "#3A3A3A",
        dark2: "rgba(0,0,0,0.54)",
        yellow: "#faca51",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
