"use client"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '@/data/store'
import { getAllProducts } from '@/data/authSlice'


export default function Home() {

  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.counter.products)
  const isProductLoading = useSelector((state: RootState) => state.counter.isLoading)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <main>

      {
        isProductLoading? <>LOADING........</>
        :
        products.map(x => <div key={x.id}>{x.title}</div>)
      }

    </main>
  )
}
