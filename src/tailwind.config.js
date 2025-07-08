/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind-config")

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
        "sidebar-sage": "rgb(159, 184, 173)",
        "content-light": "rgb(230, 232, 230)",
        "content-medium": "rgb(206, 208, 206)",
        "text-onyx": "rgb(63, 64, 63)",
        "text-sage": "rgb(71, 88, 65)",
        "border-gray": "rgb(206, 208, 206)",
        "accent-red": "rgb(184, 50, 50)",
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
