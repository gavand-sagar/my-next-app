import Link from 'next/link'
import React from 'react'
import BasicNav from './BasicNav.module.css'
export default function BasicNavBar() {
  return (
    <div className={BasicNav.myNav}>
        <Link href={'/home'}>Home</Link>
        <Link href={'/products'}>Products</Link>
        <Link href={'/login'}>Login</Link>
    </div>
  )
}
