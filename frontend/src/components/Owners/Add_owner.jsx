import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './owners.css'



function Add_owner() {

  const baseURL = 'http://localhost:3000/api/owners'
  const [Add_owners, set_addowners] = useState({
    email: "",
    name:"",
    password:""
  })

  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addowners({ ...Add_owners, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseURL, Add_owners);
      console.log(response.data);
  
      window.location = "/dashboard/owners" 
      } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500 
      ){
        setError(error.response.data.message)

      }
    }
  }


  return (
    <>
    <form className="p-2" onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-3">
      <label for="inputEmail4">Name</label>
      <input type="text"
            placeholder='Name'
            name='name'
            onChange={handleChage}
            value={Add_owners.name}
            required className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-6">
    <label for="inputEmail4">Email</label>
    <input type="email"
          placeholder='Email'
          name='email'
          onChange={handleChage}
          value={Add_owners.email}
          required className="form-control" id="inputEmail4" />
  </div>
    <div className="form-group col-md-3">
      <label for="inputPassword4">Password</label>
      <input  type="password"
            placeholder="Password"
            name="password"
            onChange={handleChage}
            value={set_addowners.password}
            required className="form-control" id="inputPassword4" />
    </div>
  </div>
  
 
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default Add_owner