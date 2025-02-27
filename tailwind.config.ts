import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Add this for custom colors not reflecting
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {//setting up custom colors
        primary: "#0F172A", // Dark Navy
        secondary: "#334155", // Muted Grayish-Blue
        accent: "#28A745", // Bright Yellow
        background: "#020617", // True Dark Mode
        text: "#E2E8F0", // Light Gray for Read
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // Uses the Poppins font
      },//custom font family

    },
  },
  plugins: [],
} satisfies Config;
//tailwind config.js for customization