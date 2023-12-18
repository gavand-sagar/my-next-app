"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import { Product } from './product.type';
import { Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { axiosInstance } from '@/services/axiosService';
import Panel from './Panel';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type MyResponse = {
    products: Product[]
}

export default function Page() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        axiosInstance.get<MyResponse>("/products?limit=20")
            .then(response => {
                setProducts(response.data.products)
            })
            .catch(() => {

            })
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 130 },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 90,
        }
    ];

    return (
        <div>
            <Link href='/orders'>ORDES</Link>
            <Panel message1={""} message2={""} />
            <Typography sx={{ position: 'sticky', top: 0 }} variant='h3'>All Products</Typography>
            <hr />
            {
                <DataGrid
                    rows={products}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            }
        </div>
    )
}

