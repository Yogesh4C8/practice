import React,{useState,useEffect} from 'react'
import AddUserForm from './AddUserForm';
import {Table, Button,Form,Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import {Link, useHref} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
function Users(props) {
    console.log(props)
    const {users,setUsers} = props
    console.log(">>>>",users)
    const [searchUser, setSearchUser] = useState("");
    const [searchUserCode, setSearchUserCode] = useState("");
    // const deleteUserHandler = (key) => {
    //     const newusers=[...users];
    //     newusers.splice(key,1)
        
    //     setUsers(newusers)
    //     console.log(newusers)
    // }
    // useEffect(() => {
        const searchUserHandler = (e) => {
            setSearchUserCode("")
            setSearchUser(e.target.value)
            setUsers(users)
        }
        const searchUserCodeHandler = (e) => {
            setSearchUser("")
            setSearchUserCode(e.target.value)
            setUsers(users)
        }
        const searchFilter = () => {
            const searchedUser = users.filter(user => {
                return user.name === searchUser
            })
            
            setUsers(searchedUser)
        }
        const searchFilterByCode = () => {
            const searchedUserCode = users.filter(user => {
                return user.userCode === searchUserCode
            })
           
            setUsers(searchedUserCode)
        }
    // }, [users,searchUser,searchUserCode]);
   
    //here
    const deleteUserHandler = (key) => {
        const newUsers = users.filter(user => {
            return key !== user.userId
        })
        console.log(newUsers)
        setUsers(newUsers)
    }
    return (
        <div className="m-5">
            <h2>Users List</h2>
            <Form>
                <Row className="align-items-center justify-content-between">
                   <Col>
                   <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden >
                            Search User by Name
                        </Form.Label>
                        <InputGroup >
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Search User by Name" value={searchUser} onChange={searchUserHandler} autocomplete='off'/>
                            <InputGroup.Text onClick={searchFilter}><FiSearch /></InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col sm={3} className="my-1">
                        <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden >
                            Search User by User Code
                        </Form.Label>
                        <InputGroup >
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Search User by User Code" value={searchUserCode} onChange={searchUserCodeHandler} autocomplete='off'/>
                            <InputGroup.Text onClick={searchFilterByCode}><FiSearch /></InputGroup.Text>
                        </InputGroup>
                    </Col>
                   </Col>
                    <Col xs="auto" className="my-1">
                        <Link to="./AddUser"><Button variant="primary">Add User</Button></Link>
                    </Col>
                </Row>
            </Form>
            
            {/* <Link to="./AddUser"><Button variant="primary">Add User</Button></Link> */}
        
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>User Code</th>
                    </tr>
                </thead>
                <tbody>
                     {users.map((user,i) => (
                            <tr key={user.userId}>
                                {/* {console.log(user)} */}
                                <td>{user.userId}</td>
                                <td>{user.name}</td>
                                <td>{user.userCode}</td>
                                {/* <td><Button variant="danger" onClick={() => deleteUserHandler(i)}>Delete</Button></td> */}
                                <td><Button variant="danger" onClick={() => deleteUserHandler(user.userId)}>Delete</Button></td>
                            </tr>
                     ))}
                </tbody>
      </Table>
        </div>
  
    )
     
}

export default Users
