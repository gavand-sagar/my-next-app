import React from 'react'
import ProductDetails from './[id]/ProductDetails'
import {Paper} from '@mui/material'
import Link from 'next/link'
export default function page() {
  return (
    <Paper sx={{height:'100vh'}}>
      <a href='/home/2'>NOrmal lin=k</a>
      <Link href={'/home/2'}>Home/2</Link>
        <Link href={'/home'}>Home</Link>
        <Link href={'/products'}>Home</Link>
          <ProductDetails/>
    </Paper>
  )
}
