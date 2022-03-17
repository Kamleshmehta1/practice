import React from 'react'
import { useParams } from 'react-router-dom'

function MyComponent() {
    let{id} = useParams()
    return (
        <div>{id}</div>
    )
}

export default MyComponent