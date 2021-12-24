import React from 'react'

function Person({person}) {
    
    const {id,name,skill} = person;
    
    return (
        <h2>
           {id}. My name is {name}, I know {skill} 
        </h2>
    )
}

export default Person
