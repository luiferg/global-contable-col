'use client'
import NavBar from './components/NavBar'
import './globals.scss'

import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Global Contable Colombia',
  description: 'La contabilidad de tu empresa de la mano de expertos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={dm_sans.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
