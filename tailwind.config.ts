import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: "#004BFF",
        light: "#ffffff",
        primary: "#68CD73",
        secondary: "#2D2D2D",
        bareBlue: "#C8E1F9",
        bawd: "#5B585B",
        tdark: "#2D2D2D",
        tek: "#7EB4EA",
      },
    },
  },
  plugins: [],
}
export default config
