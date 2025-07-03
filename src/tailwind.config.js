/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        "sidebar-beige": "rgb(101, 85, 70)", // Darker beige for sidebar
        "content-beige": "rgb(245, 235, 220)", // Lighter beige for content
        "card-beige": "rgb(235, 225, 210)", // Card background
        "text-dark": "rgb(40, 35, 30)", // Dark text for light backgrounds
        "text-medium": "rgb(60, 50, 40)", // Medium text
        "text-light": "rgb(80, 65, 50)", // Light text
        "border-beige": "rgb(200, 185, 170)", // Border color
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
