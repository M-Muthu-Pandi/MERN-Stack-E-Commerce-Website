/** @type {import('tailwindcss').Config} */
const tailwindScrollbarHide = require("tailwind-scrollbar-hide");
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {},
};
export const plugins = [tailwindScrollbarHide];
