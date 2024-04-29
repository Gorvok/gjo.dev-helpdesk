import './globals.css'
import { Rubik } from 'next/font/google'

// Components
import Navbar from "@/app/components/Navbar";

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'GJO.Dev Helpdesk',
  description: 'Helpdesk for Gjo.Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
