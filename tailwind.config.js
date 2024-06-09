/** @type {import('tailwindcss').Config} */
import filters from "tailwindcss-filters";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    filters, // Ensure this is included
  ],
};
