import React from 'react'

export default function page({ params }: { params: { kuchBhi: string, aurEk: string } }) {
  return (
    <div>page - {params.kuchBhi}</div>
  )
}
