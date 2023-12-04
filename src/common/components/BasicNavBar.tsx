import Link from 'next/link'
import React from 'react'

export default function BasicNavBar() {
  return (
    <div style={{display:'flex',gap:'20px', justifyContent:'start'}}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/login'}>Login</Link>
    </div>
  )
}
