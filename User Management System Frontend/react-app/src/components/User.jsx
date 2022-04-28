import React from 'react'
import Button from './Button'
import '../App.css'

function User(props) {
    const {user,idx, actions} = props

  return (
    <>
      <tr key={idx}>
          <td>{idx}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.gender?'Female':'Male'}</td>
          <td>{user.status?'Active':'InActive'}</td>
          <td className='action-btns'>
              <Button action = {actions[0]} setUser={actions[2]} userId={user._id} setRole = {actions[3]} role='update' text={'UPDATE'}/><Button role='delete' userId={user._id} action={actions[1]} text={'DELETE'}/>
              
          </td>
        </tr>
    </>
  )
}

export default User
