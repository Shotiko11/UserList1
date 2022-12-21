import './App.css';
import React, {useState, useEffect} from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import { validate  } from './utils';
import Errortext from "./FormErrors"


const  App = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    age: 0,
  });


  const [users, setUsers] = useState([])
  const [formErrors, setFormErrors] = useState({})
  const onFormChange = (e) => {
    const {name, value} = e.target;
//dd

    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [name]: value,
      }
    })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const formErrs = validate (formValues);
      setFormErrors(formErrs)
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [formValues])
  
 const onAddUser = (e) => {
  e.preventDefault();
  setUsers((prevUsers) => [...prevUsers, {...formValues, id: new Date().toString() },
  ]);
  setFormValues({ name: "", surname: "", email: "", age: 0})
 };
  

 const onDeleteUser = (id) => {
  setUsers((prevUsers) => {
    const fileteredUsersList = prevUsers.filter((user) => user.id !== id);
    return fileteredUsersList;
  })
 }

 const onEditUser = (userInfo) => {
  setFormValues(userInfo)
 }


 return (
  <div>
  <UserForm formValues={formValues} onFormChange={onFormChange} onSubmit={onAddUser}/>
  <Errortext formErrors={formErrors}/>
  <UserList usersList={users} onDelete={onDeleteUser} onEditUser={onEditUser}/>
  </div>
 )
}

export default App;
