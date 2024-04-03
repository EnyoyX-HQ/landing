import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ex-deep-green': '#021C1D',
        'ex-yellow': '#E5E556',
      },
      fontFamily: {
        sans: ['var(--font-eksell-display)'],
      },
    },
  },
  plugins: [],
}
export default config
