// import React, { Component } from 'react'

//  class Form extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              name: "",
//              comments: "",
//              topic: "react"
//         }
//     }
//     nameHandler = e => {
//         this.setState({name:e.target.value})
//     }
//     commentsHandler = e => {
//         this.setState({comments:e.target.value})
//     }
//     topicHandler = e => {
//         this.setState({topic:e.target.value})
//     }
//     submitHandler = e => {
//         e.preventDefault()
//         alert(`${this.state.name}  ${this.state.comments} ${this.state.topic}`)
//     }
//     render() {   
//         return (
//             <form onSubmit={this.submitHandler}>
//                 <div>
//                     <label>name</label>
//                     <input type="text" value={this.state.name} onChange={this.nameHandler}/>
//                 </div>
//                 <div>
//                 <label>comments</label>
//                     <textarea  value={this.state.comments} onChange={this.commentsHandler}/>
//                 </div>
//                 <div>
//                     <label>Topic</label>
//                     <select value={this.state.topic} onChange={this.topicHandler}>
//                         <option value="react">react</option>
//                         <option value="angular">angular</option>
//                         <option value="java">java</option>
//                     </select>
//                     <button type='submit'>Submit</button>
//                 </div>
//             </form>
//         )
//     }
// }

// export default Form


import React,{ useState } from 'react'

function Form() {
    const [name, setName] = useState("")
    const [comments, setComments] = useState("")
    const [topic, setTopic] = useState("select topic")

    const nameHandler = event => {
        setName(event.target.value)
    }
    const commentsHandler = event => {
        setComments(event.target.value)
    }
    const topicHandler = event => {
        setTopic(event.target.value)
    }
    const submitHandler = event => {
        event.preventDefault()
        alert(`${name} - ${comments} - ${topic}`)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>name</label>
                    <input type="text" value={name} onChange={nameHandler}/>
                </div>
                <div>
                <label>comments</label>
                    <textarea  value={comments} onChange={ commentsHandler}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={topicHandler}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="java">java</option>
                    </select>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
