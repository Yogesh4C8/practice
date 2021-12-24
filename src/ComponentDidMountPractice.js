import React, { Component } from 'react'

export class ComponentDidMountPractice extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {this.setState({todos:data})})
        // console.log(this.state.todos)
    }
    
    render() {
        return (
            <div>
                {this.state.todos.map(todo => 
                    <h2 key={todo.id}>todo title - {todo.title}</h2>
                )}
            </div>
        )
    }
}

export default ComponentDidMountPractice
