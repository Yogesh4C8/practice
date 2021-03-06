import React,{useState} from 'react'
import {Form, Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import './AddUserForm.css'



function AddUserForm(props) {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [userCode, setUserCode] = useState("");
    let navigate = useNavigate()
    const userIdHandler = (e) => {
        setUserId(e.target.value)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    const userCodeHandler = (e) => {
        setUserCode(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(userCode,name,userId)
        console.log(props.users)
        props.setUsers([...props.users,{"userCode":userCode,"name":name,"userId":userId}])
        console.log(props.users)
        navigate("/", { state: { from: { pathname: "/addUser" } } })
    }
    return (
        <Form className='container m-5' onSubmit={submitHandler}>
            <h2>Add user Details</h2>
            
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>User Id</Form.Label>
                            <Form.Control type="text" placeholder="Enter user Id" value={userId} onChange={userIdHandler}/>
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={nameHandler}/>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3">
                            <Form.Label>User Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter User Code" value={userCode}  onChange={userCodeHandler}/>
                        </Form.Group>
                    </div>
                    <Button variant="primary" type="submit">
                        Add User
                    </Button>
                </div>
            </div>
            
        </Form>
    )
}

export default AddUserForm
// id, user-id, name, user-code