import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkColor: "#222831",
        secondDarkColor: "#31363F",
        customBlue: "#76ABAE",
        lightColor: "#EEEEEE",
      },
    },
  },
  plugins: [],
} satisfies Config;
