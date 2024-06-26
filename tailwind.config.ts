import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '1101px',
        xs: '490px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      transitionProperty: {
        height: 'max-height',
      },
      colors: {
        paragraph: '#083c2f',
        heading: '#01303a',
        section: '#394649',
        menu: '#3b4a47',
        button: {
          100: '#e7f874',
          200: '#b7c45c',
        },
      },
    },
  },
  plugins: [],
}
export default config
