/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/scenes/**/*.{js,jsx,ts,tsx,mdx}',
    './src/sections/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#06080f',
        cyanGlow: '#64f6ff',
        neonViolet: '#8b5cf6',
      },
      boxShadow: {
        glow: '0 0 30px rgba(100, 246, 255, 0.35)',
      },
    },
  },
  plugins: [],
};
