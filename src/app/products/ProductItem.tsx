import { Grid, ImageListItem, Paper, Typography } from '@mui/material'
import React from 'react'
import { Product } from './product.type'
import Image from 'next/image'
type PropTYPE = {
  product: Product
}

export default function ProductItem({ product }: PropTYPE): React.ReactNode {
  return (
    <Paper elevation={3} sx={{ display: "inline-block", height: '400px', width: '200px', margin: '10px' }}>
      <Grid container direction={'column'} alignItems={'center'} gap={'10px'}>
        <Typography>{product.title}</Typography>
        <img src={product.thumbnail} width={'150px'} height={'200px'} />
        <Typography>{product.brand}</Typography>
        <Typography>${product.price}</Typography>
      </Grid>
    </Paper>
  )
}


// const ProductItem = ({ product }: PropTYPE): React.ReactNode => {
//   return (
//     <Paper elevation={3} sx={{ display: "inline-block", height: '400px', width: '200px', margin: '10px' }}>
//       <Grid container direction={'column'} alignItems={'center'} gap={'10px'}>
//         <Typography>{product.title}</Typography>
//         <img src={product.thumbnail} width={'150px'} height={'200px'} />
//         <Typography>{product.brand}</Typography>
//         <Typography>${product.price}</Typography>
//       </Grid>
//     </Paper>
//   )
// }

// export default ProductItem


