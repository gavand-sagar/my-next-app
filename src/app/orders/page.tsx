//'use client'
import { axiosInstance } from '@/services/axiosService'
import React, { useState } from 'react'

export default async function Page() {

    const [counter, setCoutner] = useState<number>(0)

    const { data } = await axiosInstance.get<string[]>('/products/categories');

    return (
        <div>

            {data.map(x => <div key={x}>{x}</div>)}
        </div>
    )
}
