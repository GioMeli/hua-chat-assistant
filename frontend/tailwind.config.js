/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Tailwind Indigo-600
        secondary: "#6366F1", // Tailwind Indigo-500
        accent: "#EC4899", // Tailwind Pink-500
        background: "#F4F4F4", // Light gray background
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        18: "4.5rem", // Custom spacing value
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Better form styles
    require("@tailwindcss/typography"), // Rich text styles
  ],
};
