import React from 'react'
import User from './User'

function Users(props) {
    const {users,actions} = props
  return (
    <>
       {users.map((user,idx)=>(
        <User actions = {actions} key={idx} user={user} idx ={idx}/>
     ))
     }
    </>
  )
}

export default Users
