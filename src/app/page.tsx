"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Typography } from '@mui/material'
export default function Home() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter();
  useEffect(() => {
    setTimeout(()=>{
      if (Cookies.get('isAuthenticated')) {
        setIsAuthenticated(true)
        router.push('/home')
      }else{
        router.push('/login')
      }
    },3000)
  }, [])

  return (
    <main className={styles.main}>

      {
        isAuthenticated || <Typography variant='h1'>Authenticating</Typography>
      }

    </main>
  )
}
