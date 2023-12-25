import Link from 'next/link'
import React from 'react'
import BasicNav from './BasicNav.module.css'
import { Button, Paper } from '@mui/material'
export default function BasicNavBar() {
  return (
    <Paper className={BasicNav.myNav}>
        <Link href={'/home'}>
          <Button>Home</Button>
        </Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/login'}>Login</Link>
    </Paper>
  )
}
