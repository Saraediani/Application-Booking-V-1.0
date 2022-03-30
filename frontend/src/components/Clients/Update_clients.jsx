import { useState, useEffect} from 'react'
import axios from "axios";
import React from "react";

function Update_clients({data,Close}) {  
  
  
  
  const [Clients, set_Clients] = useState(
    data
    
    );
    
  const token = JSON.parse(localStorage.getItem('name'));

    const baseURL = `http://localhost:3000/api/clients/`
  
      const updateClient =(e)=>{
          e.preventDefault();
          axios.put(`${baseURL}/${Clients._id}`, Clients, { headers: {"Authorization" : `Bearer ${token}`} }).then((response) => {
              console.log(response);
              Close();
          });
     
         
      }
    
      const handelInput =(e)=>{
  
          set_Clients({...Clients, [e.target.name] : e.target.value})
          console.log(Clients)
      }

  
    
  
  
    if (!Clients) return "No client!"

  return (

    



    <>
     <form className="p-2"  onSubmit={updateClient}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label htmlFor="Email">Email</label>
      <input type="email" onChange={handelInput}  className="form-control" value={Clients.email}  />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="Password">Password</label>
      <input type="password" onChange={handelInput}  className="form-control" value={Clients.password} />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" onChange={handelInput}  className="form-control" value={Clients.name}  />
  </div>
  <div className="form-group">
    <label htmlFor="Phone">Phone</label>
    <input type="text" onChange={handelInput}  className="form-control" value={Clients.phone}   />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="Adress">Adress</label>
      <input type="text" onChange={handelInput}  className="form-control" value={Clients.adresse}  />
    </div>

  </div>

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_clients
