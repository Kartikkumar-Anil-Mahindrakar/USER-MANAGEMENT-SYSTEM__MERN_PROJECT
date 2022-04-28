import React from 'react'

function Button(props) {
  const {text,userId,role,action,setRole,setUser} = props
  const handlerequest = ()=>{
    if(role === 'add'){
      togglepanel();
      setRole('add')
    }else if(role === 'update'){
      togglepanel();
      setRole('update')
      setUser(userId)
    }else if(role === 'delete'){
      action(userId)
      console.log('User deleted with id'+userId)
    }
  }

  const togglepanel = ()=>{
    const addupdatepannel = document.querySelector('.addupdatepannel')
    addupdatepannel.style.display === 'none'?addupdatepannel.style.display = 'flex':addupdatepannel.style.display = 'none';
    // console.log('click')
}
  // console.log(action)
  return (
    <div>
      <button onClick={()=>handlerequest()} className='new-user-btn'>{text}</button>
    </div>
  )
}

export default Button
