import React from 'react'
import Users from './Users'
import '../App.css'

function TableContent(props) {
    const {users,actions} = props;
  return (
    <>
       <table  className='users-table'>
        <thead>
        <tr>
          <th>Sr no</th>
          <th>Name</th>
          <th>@Email</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        </thead>
      <tbody> 
      <Users actions={actions} users={users}/>
     </tbody>
     </table>
    </>
  )
}

export default TableContent
