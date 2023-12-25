"use client"
import React, { useEffect, useState } from 'react'
import { Product } from './product.type';
import { Button, Rating, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { axiosInstance } from '@/services/axiosService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type MyResponse = {
    products: Product[]
}

export default function Page() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => { axiosInstance.get<MyResponse>("/products?limit=20")
            .then(response => {
                setProducts(response.data.products)
            })
            .catch(() => {

            })
    }, [])

    const columns: GridColDef<Product>[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 130 },
        {
            field: 'rating',
            headerName: 'Rating',
            type: 'number',
            width: 190,
            align: 'center',
            renderCell: (params) => {
                return <Rating readOnly value={params.row.rating}></Rating>
            },
        },
        {
            field: '',
            headerName: 'EDIT',
            type: 'number',
            width: 190,
            align: 'center',
            renderCell: (params) => {
                return <Button variant='contained' color='secondary' onClick={() => router.push('/products/' + params.row.id)}>EDIT</Button>
            },
        }
    ];

    return (
        <div>
            <Link href='/orders'>ORDES</Link>            
            <Typography sx={{ position: 'sticky', top: 0 }} variant='h3'>All Products</Typography>
            <hr />
            {
                <DataGrid
                    rows={products}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            }
        </div>
    )
}

