import { useState, useEffect} from 'react'
import axios from "axios";
import React from "react";


function UpdateOwners({data,Close}) {

  const baseURL = 'http://localhost:3000/api/owners'
  const [Owners, set_Owners] = useState(
     data
 
  );
//   console.log('owner',Owners)
//   useEffect(() => {
    const updateOwner =(e)=>{
        e.preventDefault();
        axios.put(`${baseURL}/${Owners._id}`,Owners ).then((response) => {
            console.log(response);
            Close();
        });
   
       
    }
    const handelInput =(e)=>{

        set_Owners({...Owners,[e.target.name] : e.target.value})
    }
 
//   }, []);

  

  if (!Owners) return "No post!"
//   const [error, setError] = useState("") 
  return (

    



    <>
     <form className="p-2">
  <div className="form-row">
    <div className="form-group col-md-3">
      <label for="inputEmail4">Name</label>
      <input type="Text" onChange={handelInput} className="form-control" id="inputEmail4" name='name' placeholder="Name" value={Owners.name} />
    </div>
    <div className="form-group col-md-3">
      <label for="inputPassword4">Password</label>
      <input type="text"  className="form-control" id="inputPassword4" name='password' placeholder="Password"   />
    </div>
  </div>
  <div className="form-group">
    <label for="inputName">Email</label>
    <input type="email" onChange={handelInput} className="form-control" id="inputName" name='email' value={Owners.email} placeholder="email" />
  </div>
  

  <button type="submit" onClick={updateOwner} className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default UpdateOwners