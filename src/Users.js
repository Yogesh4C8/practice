import React,{useState,useEffect} from 'react'

import {Table, Button,Form,Row,Col,InputGroup,FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
function Users(props) {
    // console.log(props)
    const {users,setUsers} = props
    const fetchedUsers = users
    // console.log(">>>>",users)
    const [searchUser, setSearchUser] = useState("");
    const [isFilterCompleted, setIsFilterCompleted] = useState(false);
    // const deleteUserHandler = (key) => {
    //     const newusers=[...users];
    //     newusers.splice(key,1)
        
    //     setUsers(newusers)
    //     console.log(newusers)
    // }



    // useEffect(() => {
        const searchUserHandler = (e) => {
            setSearchUser(e.target.value)
            setUsers(users)
        }

        const searchFilter = () => {
              const searchedUser = users.filter(user => {
                return user.userId === searchUser || user.name.toLowerCase() === searchUser.toLowerCase() || user.userCode.toLowerCase() === searchUser.toLowerCase()
            })
            setUsers(searchedUser)
            console.log("searchedUser -------",searchedUser)
            console.log("fetched users-------",fetchedUsers)
            setIsFilterCompleted(true)
        }
        const enterHandler = (event) => {
            // event.preventDefault();
            if (event.key === "Enter") {
                event.preventDefault();
                searchFilter()
            }
        }
    // }, [users,searchUser,searchUserCode]);


    
//    useEffect(() => {
//     const searchUserHandler = (e) => {
//             setSearchUser(e.target.value)
//             setUsers(users)
//         }
//         const searchFilter = () => {
//                 // setSearchUser(searchUser.toLowerCase())
//                 // console.log("ttttttttt",searchUser.toLowerCase())
//                   const searchedUser = users.filter(user => {
//                     return user.userId === searchUser || user.name.toLowerCase() === searchUser.toLowerCase() || user.userCode.toLowerCase() === searchUser.toLowerCase()
//                 })
//                 setUsers(searchedUser)
//             }
            // const enterHandler = (event) => {
            //     event.preventDefault();
            //     if (event.key === "Enter") {
            //         event.preventDefault();
            //         searchFilter()
            //     }
            // }
//        window.addEventListener("change",searchUserHandler)
//        window.addEventListener("click",searchFilter)
//        window.addEventListener("keydown",enterHandler)
   
//        return() => {
//         window.removeEventListener(onChange,searchUserHandler)
//         window.removeEventListener(onClick,searchFilter)
//        }
//    }, []);
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
                            Search User
                        </Form.Label>
                        <InputGroup onKeyPress={enterHandler}>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Search User" value={searchUser} onChange={searchUserHandler}  autoComplete='off'/>
                            <InputGroup.Text onClick={searchFilter}   id='searchBtn'><FiSearch /></InputGroup.Text>
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
                    {isFilterCompleted} ?
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
                     :
                        {fetchedUsers.map((user,i) => (
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
