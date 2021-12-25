
import React,{useState} from 'react'
import './App.css';
// import UseEffectExample from './UseEffectExample';
// import ComponentDidMountPractice from './ComponentDidMountPractice';
// import Form from './Form';
// import ComponentWillUnmountDemo from './ComponentWillUnmountDemo'
// import UseStateExample from './useStateExample';
// import UseStateExample2 from './UseStateExample2';
// import PersonList from './PersonList';
// import Counter from './Counter';
// import { VscArrowRight } from "react-icons/vsc"
// import {AiOutlineMenu} from "react-icons/ai"

import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button,Dropdown,DropdownButton} from 'react-bootstrap'
import AddUserForm from './AddUserForm';
import Users from './Users';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([{"userId":"11282","name":"YOGESH","userCode":"yogi"},{"userId":"1122","name":"ravi","userCode":"rav122"},{"userId":"11283","name":"ganesh","userCode":"gh"}]);
  return (
    // <AddUserForm />
    <Router>
      <Routes>
        <Route path="/" element={<Users users={users} setUsers={setUsers}/>} />
        <Route path="addUser" element={<AddUserForm users={users} setUsers={setUsers}/>}/>
      </Routes>
    </Router>
//     <div className="App">
//       {/* <Counter message={["helloo","897",98]}/> */}


//   <Button variant="primary">Button1</Button>
//   <Button variant="secondary" className="mx-2">Button #2</Button>
//   <Button variant="success">Button #3</Button>
//   <VscArrowRight />
//   <AiOutlineMenu />
//   <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
  

//     </div>
    // <PersonList />
    // <Form />
    // <ComponentDidMountPractice />
    // <ComponentWillUnmountDemo />
    // <UseStateExample />
    // <UseStateExample2 />
    // <UseEffectExample />

  );
}

export default App;
