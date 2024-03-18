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
        padding: "1.5rem",
      },
      colors: {
        primary: "#183544",
        secondary: "#ff531d",
        white2: "#f7f7f7",
        gray: "rgba(102,102,102,0.7)",
        gray2: "#ddd",
        gray3: "rgba(102,102,102,0.85)",
        gray4: "#a8b2b7",
        gray5: "#334862",
        dark: "#3A3A3A",
        dark2: "rgba(0,0,0,0.54)",
        dark3: "#222",
        dark4: "#11252F",
        yellow: "#faca51",
      },
    },
  },
  plugins: [],
};
export default config;
