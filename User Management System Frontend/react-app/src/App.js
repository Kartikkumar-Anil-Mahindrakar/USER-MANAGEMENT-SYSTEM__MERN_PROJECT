import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Users from './components/Users';
import TableContent from './components/TableContent';
import Navbar from './components/Navbar';
import Button from './components/Button';
import AddUpdatePannel from './components/AddUpdatePannel';



function App() {
  const [users,setUsers] = useState([]);
  const [currentUser,setCurrentUser] = useState({});
  const [panelRole,setpanelRole] = useState('add');

  const getUsers = async ()=>{
    const url = 'http://localhost:3000/getUsers'
    try {
      
      const response = await fetch(url)
      if (!response.ok) {
        const message = `An error has occured: ${response.status} - ${response.statusText}`;
        throw new Error(message);
      }
      const user = await response.json();
      // console.log(user[0])
      setUsers(user)
    } catch (error) {
      console.log(error)  
    }
  }

  const addUser = async (postData)=>{
    // console.log(postData)
    const url = 'http://localhost:3000/addUser'
    try {
      
      const response = await fetch(url,{
        method:'post',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(postData)
      })
      if (!response.ok) {
        const message = `An error has occured: ${response.status} - ${response.statusText}`;
        throw new Error(message);
      }
      const user = await response.json();
      console.log('Successfully Added User :'+user)
      users.push(user);
      setUsers([...users])
    } catch (error) {
        console.log(error)
    }
  }
  const updateUser = async (userId,postData)=>{
    // console.log(userId,postData)
    const url = `http://localhost:3000/updateUser/${userId}`
    try {
      
      const response = await fetch(url,{
        method:'put',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(postData)
      })
      // console.log(response)
      if (!response.ok) {
        const message = `An error has occured: ${response.status} - ${response.statusText}`;
        throw new Error(message);
      }
      // const user = await response.json();
      console.log('Successfully Updated User :'+userId)
      // users.push(user);
      const id = users.findIndex((ele)=>{
        return ele._id === userId
      })
      const user = users.find((ele)=>{
        return ele._id===userId;
      })

      postData.__v = user.__v
      postData._id = user._id
      users[id] = postData

      setUsers([...users])

      } catch (error) {
          console.log(error)
      }
  }

  const deleteUser = async (userId)=>{
    const url = `http://localhost:3000/deleteUser/${userId}`
    try {
      
    const response = await fetch(url,{
      method:'delete'
    })
    if (!response.ok) {
      const message = `An error has occured: ${response.status} - ${response.statusText}`;
      throw new Error(message);
    }
    // const deletedUser = await response.json()
    // console.log(deletedUser)
    const newUsers = users.filter(user=>{
      return user._id !== userId
    })
    setUsers(newUsers)
    } catch (error) {
        console.log(error)
    }
  }

  const setUser=(userId)=>{
    const user = users.find((ele)=>{
      return ele._id === userId
    })
    setCurrentUser(user)
  }

  useEffect(()=>{
    getUsers()
    // console.log(users)
  },[])


  return (
    <>
    <AddUpdatePannel user = {currentUser} role={panelRole} actions = {[updateUser,addUser]} title="User Form"/>
    <div className="App">
      
      <Navbar/>
      <div className='new-user-and-table'>
        <Button action={addUser} setRole={setpanelRole} role='add' text={'New User 🧑🏻‍💼'}/>
        <TableContent actions={[updateUser,deleteUser,setUser,setpanelRole]} users = {users} />
      </div>
      
    </div>
    </>
  );
}


export default App;
