import React, {useState} from 'react'


function UseStateExample() {
    const [randomNumbers, setRandomNumbers] = useState([])
    const addNumber = () => {
        setRandomNumbers([...randomNumbers, {id:randomNumbers.length, value:Math.floor(Math.random()*10)}])
    }
    return (
        <div>
            <button onClick={addNumber}>Add</button>
            <ul>
                {randomNumbers.map(randomNumber => <li key={randomNumber.id}>{randomNumber.value}</li>)}
            </ul>
        </div>
    )
}

export default UseStateExample
