import React from 'react'
import { Product } from './product.type'
interface propType{
    message1:string;
    message2:string;
}
export default function Panel(props: propType) {
    return (
        <div>
            <div>Panel{props.message1}</div>
            <div>Panel{props.message2}</div>
        </div>
    )
}
