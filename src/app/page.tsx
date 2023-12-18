"use client"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState, AppDispatch } from '@/data/store'
import { getAllProducts } from '@/data/authSlice'
import ProductItem from './products/ProductItem'
export default function Home() {

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.counter.products)
  const isProductLoading = useSelector((state: RootState) => state.counter.isLoading)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <main>
      {
        isProductLoading ? <img src='./ruko.jpeg'/>
          :
          products.map(x => <ProductItem key={x.id} product={x}></ProductItem>)
      }

    </main>
  )
}
