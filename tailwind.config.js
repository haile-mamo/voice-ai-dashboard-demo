/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // ይህ በጣም አስፈላጊ ነው - ከፎልደሩ ውጭ ያሉትንም ፋይሎች እንዲያይ ያደርገዋል
    "../app/**/*.{js,ts,jsx,tsx,mdx}",
    "../components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#1d4ed8",
        },
      },
    },
  },
  plugins: [],
};