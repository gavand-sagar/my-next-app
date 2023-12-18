import { Container, Grid, ImageListItem, Paper, Typography, colors } from '@mui/material'
import React from 'react'
import { Product } from './product.type'
import Image from 'next/image'
import Link from 'next/link'
type PropTYPE = {
  product: Product
}

export default function ProductItem({ product }: PropTYPE): React.ReactNode {
  return (
    <Container>
      <Grid justifyContent={'space-between'} className='product-row' container direction={'row'} alignItems={'center'} gap={'10px'}>
        <Image src={product.thumbnail} width={50} alt='image' height={50} />
        <Typography color={"primary"} variant='h5'>{product.title}</Typography>
        <Typography color={"primary"} variant='h6'>{product.brand}</Typography>
        <Typography color={"primary"} variant='h6'>${product.price}</Typography>
        <Link href={'/products/' + product.id}>More Details</Link>
      </Grid>
    </Container>
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


