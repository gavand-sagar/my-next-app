import React from 'react'
import ProductDetails from './[id]/ProductDetails'
import {Paper} from '@mui/material'
import Link from 'next/link'
export default function page() {
  return (
    <Paper sx={{height:'100vh'}}>
        <ProductDetails/>
    </Paper>
  )
}
