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
        sans: ['var(--font-newsreader)', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        serif: ['var(--font-newsreader)', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        background: {
          light: '#FDFDFD', // Keeping original white as requested
          dark: '#1F1E1D',  // New dark background
        },
        copy: {
          light: '#1F1E1D', // New dark text for light mode
          dark: '#F0EEE6',  // New light text for dark mode
        },
        accent: {
          DEFAULT: '#006CAC',
          dark: '#F0EEE6',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.copy.light'),
            fontFamily: theme('fontFamily.serif').join(', '),
            a: {
              color: theme('colors.copy.light'),
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              '&:hover': {
                textDecoration: 'none',
              },
            },
            h1: { color: theme('colors.copy.light'), fontFamily: theme('fontFamily.serif').join(', ') },
            h2: { color: theme('colors.copy.light'), fontFamily: theme('fontFamily.serif').join(', ') },
            h3: { color: theme('colors.copy.light'), fontFamily: theme('fontFamily.serif').join(', ') },
            strong: { color: theme('colors.copy.light') },
            code: { color: theme('colors.copy.light') },
            blockquote: { color: theme('colors.copy.light') },
          },
        },
        invert: {
          css: {
            color: theme('colors.copy.dark'),
            a: {
              color: theme('colors.copy.dark'),
            },
            h1: { color: theme('colors.copy.dark') },
            h2: { color: theme('colors.copy.dark') },
            h3: { color: theme('colors.copy.dark') },
            strong: { color: theme('colors.copy.dark') },
            code: { color: theme('colors.copy.dark') },
            li: { color: theme('colors.copy.dark') },
            blockquote: { color: theme('colors.copy.dark') },
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
