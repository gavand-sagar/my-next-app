import React from 'react'

interface Layout {
    children: React.ReactNode
}

export default function layout(props: Layout) {
    console.log(props)
    return (
        <div>
            <h1>Header</h1>
            {
                props.children
            }
            <h4>Footer</h4>
        </div>
    )
}
