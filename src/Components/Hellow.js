import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Hellow() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        console.log("updates");
    }, [])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export default Hellow