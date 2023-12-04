import React from 'react'
import { Paper, Box } from '@mui/material'
import ProductDetails from './ProductDetails'
import Link from 'next/link'

export default function Page({ params }: any) {
  return (
    <Paper sx={{ height: '100vh' }}>
      <ProductDetails params={params} />
    </Paper>
  )
}
