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
        serif: ["Crimson Text", "serif"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        "sidebar-beige": "rgb(85, 70, 55)", // Much darker beige for sidebar
        "content-beige": "rgb(245, 235, 220)", // Slightly darker beige for content background
        "card-beige": "rgb(240, 230, 215)", // Card background
        "text-dark": "rgb(40, 35, 30)", // Dark text for light backgrounds
        "text-medium": "rgb(60, 50, 40)", // Medium text
        "text-light": "rgb(80, 65, 50)", // Light text
        "border-beige": "rgb(220, 210, 195)", // Border color
        "accent-red": "rgb(180, 50, 50)", // Red for active states
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
