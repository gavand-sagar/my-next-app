import React from 'react'
import { Paper,Box } from '@mui/material'
import ProductDetails from './ProductDetails'
import Link from 'next/link'

export default function Page({params}:any) {
  return (
    <Paper sx={{height:'100vh'}}>
      <a href='/home/2'>NOrmal lin=k</a>
      <br/>
      <Link href={'/home/2'}>Home/2</Link>
      <br/>
        <Link href={'/home'}>Home</Link>
      <br/>
        <Link href={'/products'}>Home</Link>
      <br/>
          <ProductDetails params={params}/>
    </Paper>
  )
}
