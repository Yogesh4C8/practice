// import React from 'react'
// import Person from './Person'

// function PersonList() {
//     const persons = [
//         {id:1,name:"yogesh",skill:"react"},
//         { id:2, name:"ganesh", skill:"angular"},
//         { id:3, name:"ravi", skill:"java" }
//     ]

//     return (
//         <div>
//             {persons.map((person) =>(
//              <Person person={person} key={person.id} />
//             ))}
//         </div>
//     )
// }

// export default PersonList

import React, { Component } from 'react'
import Person from './Person'
export class PersonList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            persons:[
                {id:1,name:"yogesh",skill:"react"},
                { id:2, name:"ganesh", skill:"angular"},
                { id:3, name:"ravi", skill:"java" }
            ]
        
        }
    }
    
    render() {
        return (
            <div>
                {this.state.persons.map((person) =>(
             <Person person={person} key={person.id} />
            ))}
            </div>
        )
    }
}

export default PersonList
