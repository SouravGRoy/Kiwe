/** @type {import('tailwindcss').Config} */
import filters from "tailwindcss-filters";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NeueMontreal: ["NeueMontreal-Regular", "sans-serif"],

        founders: ["Founders Grotesk", "sans-serif"],
        foundersCond: ["Founders Grotesk X-Condensed", "sans-serif"],
      },
    },
  },
  plugins: [
    filters, // Ensure this is included
  ],
};
