import React,{ useState,useEffect } from 'react'

function UseEffectExample() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = (e) => {
        console.log(`mouse moved`)
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener("mousemove",logMousePosition)
        return() => {
            console.log(`componentWilolUnmount()`)
            window.removeEventListener("mousemove",logMousePosition)
        }
    }, []);
    
    return (
        <div className='flex'>
            X - {x}   Y - {y}        
        </div>
    )
}

export default UseEffectExample
