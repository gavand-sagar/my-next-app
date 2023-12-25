"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import MainHoc from '@/main/MainHoc'
import { Provider } from 'react-redux'
import { store } from '@/data/store'
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
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
        {/* <MainHoc >
          {
            children
          }
        </MainHoc> */}
      </body>
    </html>
  )
}
