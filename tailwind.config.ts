import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          1: '#ffffff'
        },
        one: '#a0a0a0',
        two: {
          1: '#0D6EFD'
        },
        dark: '#191919',
        light: '#efefef',
      },
    },
  },
  plugins: [],
}
export default config
