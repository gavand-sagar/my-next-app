import { Inter } from 'next/font/google'
import './globals.css'
import MainHoc from '@/main/MainHoc'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}><MainHoc>{children}</MainHoc></body>
    </html>
  )
}
