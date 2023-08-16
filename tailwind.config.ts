import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "blue": 'hsl(227, 92%, 58%)',
        "gunmetal": 'hsl(215, 31%, 21%)',
        "dark-electric-blue": 'hsl(215, 17%, 45%)',
        'border-color': 'hsl(200, 24%, 88%)',
      },
      fontFamily:{
        inter: ["--font-inter"]
      }
    },
  },
  plugins: [],
}
export default config
