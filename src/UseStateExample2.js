import React,{useState} from 'react'

function UseStateExample2() {
   const [name, setName] = useState({fname:'',lname:''});
   const [isSubmitted, setIsSubmitted] = useState(false);
   
   const fnameHandler = (e) => {
       setName({...name,fname:e.target.value})
   }
   const lnameHandler = (e) => {
       setName({...name,lname:e.target.value})
   }
    const submitHandler = (e) => {
        setIsSubmitted(true)
        e.preventDefault()
        setTimeout(() =>{setIsSubmitted(false)},2000)
    }
    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <label htmlFor='fname-field'> First Name</label>
                    <input type="text" value={name.fname} onChange={fnameHandler} name='fname-field'/>
                </div>
                <div>
                    <label htmlFor='lname-field'> Last Name</label>
                    <input type="text" value={name.lname} onChange={lnameHandler} name='lname-field'/>
                </div>
                <button type='submit'>Submit</button>
            </form>
            {isSubmitted && <><h2>first name: {name.fname}</h2>
            <h2>last name: {name.lname}</h2></>}
            
        </div>
    )
}

export default UseStateExample2
