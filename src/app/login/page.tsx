"use client"
import React from 'react'
import Cookies from "js-cookie";
import { useRouter, redirect } from 'next/navigation'

export default function Page() {

  const router = useRouter()

  function handleClick() {
    Cookies.set("isAuthenticated", "true", { expires: 365, path: "/" });
  }

  return (
    <div>
      <button onClick={handleClick}>LOGIN</button>
    </div>
  )
}
