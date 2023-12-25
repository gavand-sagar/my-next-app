import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from '../products/ProductItem'

export default async function Page() {
   let res = await axios.get("https://dummyjson.com/products/1")

    return <div>TEST_PAGE {res.data.id}
        <ProductItem product={res.data}/>
    </div>
    
}
