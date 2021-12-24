// import React, { Component } from 'react'

// export class Counter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }
    
//     render() {
//         const handleClick = () => {
//             this.setState({count:this.state.count-1})
//         }
//         return (
//             <div>
//                 {this.props.message.map(prop => (
//                 <h1>{prop}</h1>
//             ))}
//                 <h1>count:{this.state.count}</h1>
//                 <button onClick={() => this.setState({count:this.state.count+1})}>Increment</button>
//                 <button onClick={() => handleClick()}>Deccrement</button>
//             </div>

//         )
//     }
// }

// export default Counter
import React,{ useState } from 'react'

function Counter(props) {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount(count-1)
    }
    return (
        <div>
            {props.message.map(prop => (
                <h1>{prop}</h1>
            ))}
            count:{count}<br />
            <button onClick={() => setCount(count+1)}>Increment</button><br/>
            <button onClick={() => handleClick()}>Decrement</button>
        </div>
    )
}

export default Counter
