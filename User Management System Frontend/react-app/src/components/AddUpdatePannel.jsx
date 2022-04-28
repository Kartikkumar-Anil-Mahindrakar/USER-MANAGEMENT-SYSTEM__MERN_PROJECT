import React, { useEffect } from 'react'
import '../App.css'

function AddUpdatePannel(props) {
    const {title,user,actions,role}=props
    const {name,email,gender,status} = user;
    const togglepanel = ()=>{
        const addupdatepannel = document.querySelector('.addupdatepannel')
        addupdatepannel.style.display === 'none'?addupdatepannel.style.display = 'flex':addupdatepannel.style.display = 'none';
        // console.log('click')
    }

    
    const handleClose = ()=>{
        togglepanel();
        
       
    }

    const handleSubmit = ()=>{
        togglepanel();
        const name = document.getElementById('exampleInputName1');
        const email = document.getElementById('exampleInputEmail1');
        const gender = document.querySelector( 'input[name="flexRadioDefault1"]:checked').value==='true';   
        // const gender = document.getElementsByName('flexRadioDefault1').value;
        const status = document.querySelector( 'input[name="flexRadioDefault2"]:checked').value==='true';   
        // if(name && email && gender && status ){
            const postdata= {
                "name":name.value,
                "email":email.value,
                "gender":gender,
                "status":status
            }
            if(role==='add'){
                actions[1](postdata);
            }else{
                actions[0](user._id,postdata)
            }
            
             
            return ;
        // }else{
            // console.log("please fill all places")
        // }
       
    }
  return (
    <div className='addupdatepannel'>
        {/* <form  classNameName='addupdatepannel'>
            <label for="name">Name</label>
            <input type="text" name="name"/>

            <label for="email">Email</label>
            <input type="email" name="email"/>

            <label>Gender</label>
            <input type="radio" name='gender' />
            <input type="radio" name='gender' />

            <label>Status</label>
            <input type="radio" name='status' />
            <input type="radio" name='status' />
        </form>
         */}
         <h1 >{`${role} ${title}`}</h1>
         <form >

            <div className="mt-3 ">
                <label htmlFor="exampleInputName1" className="form-label">Name </label>
                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"  defaultValue={name || ''}/>
            </div>
            <div className="mt-3 ">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={email || ''}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <label htmlFor="exampleInputGender1" className="form-label">Gender</label>
            <div className="form-check">
                
                <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault1" value={false} defaultChecked={!gender}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault2" value={true} defaultChecked={gender} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                </label>
            </div>

            <label htmlFor="exampleInputGender1" className="form-label">Status</label>
            <div className="form-check">
                
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3"value={false} defaultChecked={!status}/>
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                    Active
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" value={true} defaultChecked={status}/>
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                    InActive
                </label>
            </div>
            <div className='text-center '>
                <button onClick={()=>handleSubmit()} type="button" className="btn btn-primary">Submit</button> <button type="button" onClick={()=>handleClose()} className="btn btn-danger">Close</button>            
            </div>
         </form>
    </div>
  )
}

export default AddUpdatePannel
