import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
        },
      },
      fontSize: {
        sm: "var(--font-size-small)",
        base: ["16px", "24px"],
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
      },
    },
  },
  plugins: [],
};
export default config;
