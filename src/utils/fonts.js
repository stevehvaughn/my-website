import { Open_Sans } from 'next/font/google'
import { Bitter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import { Inter } from 'next/font/google'

export const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter'
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})