/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: "rgb(var(--bg)  / <alpha-value>)",
        fg: "rgb(var(--fg)  / <alpha-value>)",
        border: "rgb(var(--border)  / <alpha-value>)",
        muted: "rgb(var(--muted)  / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
