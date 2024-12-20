import localFont from 'next/font/local'

export const hackFont = localFont({
  src: [
    {
      path: '../../public/fonts/HackNerdFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HackNerdFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HackNerdFont-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/HackNerdFont-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-hack',
})