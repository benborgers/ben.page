import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        // Put Georgia before Apple's New York in Safari. I think Georgia looks better.
        serif: ["Georgia", ...defaultTheme.fontFamily.serif],
        handwriting: ["Caveat"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
