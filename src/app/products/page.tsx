"use client"
import axios from 'axios'
import React, { useEffect,useState } from 'react'
import ProductItem from './ProductItem';
import { Product } from './product.type';
import { Typography } from '@mui/material';
import { axiosInstance } from '@/services/axiosService';
import Link from 'next/link';

type MyResponse = {
    products:Product[]
}

export default function Page() {
    const[products,setProducts] = useState<Product[]>([]);
    useEffect(() => {        
        axiosInstance.get<MyResponse>("/products?limit=20")
        .then(response=>{
            setProducts(response.data.products)
        })
        .catch(()=>{

        })
    }, [])

    return (
        <div>
        <Link href={'/home/2'}>Home/2</Link>
        <Link href={'/home'}>Home</Link>
        <Link href={'/products'}>Home</Link>

        <Typography sx={{position:'sticky',top:0,background:'white'}} variant='h3'>All Products</Typography>
        <hr/>
        {
            products.map(x=> <ProductItem key={x.id} product={x}/>)
        }
        </div>
    )
}
