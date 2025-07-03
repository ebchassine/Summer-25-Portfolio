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
        // serif: ["Times New Roman", "serif"],
        serif: ["Georgia", "serif"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        "sidebar-dark": "rgb(25, 25, 30)",
        "content-dark": "rgb(40, 40, 45)",
        "card-dark": "rgb(50, 50, 55)",
        beige: "rgb(245, 235, 215)",
        "beige-muted": "rgb(220, 210, 190)",
        "beige-light": "rgb(200, 190, 170)",
        "border-dark": "rgb(60, 60, 65)",
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
