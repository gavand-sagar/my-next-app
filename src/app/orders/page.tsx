'use client'
import React, { useState } from 'react'

export default function Page() {

    const [counter, setCoutner] = useState<number>(0)

    return (
        <div>

            {counter}
        </div>
    )
}
