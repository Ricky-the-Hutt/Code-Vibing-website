/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        background: {
          light: '#FDFDFD',
          dark: '#212737',
        },
        copy: {
          light: '#282728',
          dark: '#EAEDF3',
        },
        accent: {
          DEFAULT: '#006CAC',
          dark: '#EAEDF3', // In dark mode, links are often similar to text or white
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.copy.light'),
            fontFamily: theme('fontFamily.mono').join(', '),
            a: {
              color: theme('colors.accent.DEFAULT'),
              textDecoration: 'none',
              borderBottomWidth: '1px',
              borderBottomStyle: 'dashed',
              borderBottomColor: theme('colors.accent.DEFAULT'),
              textUnderlineOffset: '4px',
              '&:hover': {
                borderBottomStyle: 'solid',
              },
            },
            h1: { color: theme('colors.copy.light') },
            h2: { color: theme('colors.copy.light') },
            h3: { color: theme('colors.copy.light') },
            strong: { color: theme('colors.copy.light') },
            code: { color: theme('colors.copy.light') },
          },
        },
        invert: {
          css: {
            color: theme('colors.copy.dark'),
            a: {
              color: theme('colors.copy.dark'), // Dark mode links are white/light
              borderBottomColor: theme('colors.copy.dark'),
            },
            h1: { color: theme('colors.copy.dark') },
            h2: { color: theme('colors.copy.dark') },
            h3: { color: theme('colors.copy.dark') },
            strong: { color: theme('colors.copy.dark') },
            code: { color: theme('colors.copy.dark') },
            li: { color: theme('colors.copy.dark') },
            'ul > li::marker': { color: theme('colors.copy.dark') },
            'ol > li::marker': { color: theme('colors.copy.dark') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
