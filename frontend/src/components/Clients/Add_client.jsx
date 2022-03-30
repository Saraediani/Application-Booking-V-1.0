import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Clients.css'


function Add_client() {

  const baseURL = 'http://localhost:3000/api/clients'
  const [Add_clients, set_addclients] = useState({
    email: "",
    name:"",
    adresse:"",
    phone:"",
    password:""
  })

  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    set_addclients({ ...Add_clients, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseURL, Add_clients);
      console.log(response.data);
  
      window.location = "/clients" 
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
      <label htmlFor="inputEmail4">Email</label>
      <input type="email"
            placeholder='Email'
            name='email'
            onChange={handleChage}
            value={Add_clients.email}
            required className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-3">
      <label htmlFor="inputPassword4">Password</label>
      <input  type="password"
            placeholder="Password"
            name="password"
            onChange={handleChage}
            value={set_addclients.password}
            required className="form-control" id="inputPassword4" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Name</label>
    <input type="text"
            name="name"
            placeholder="Name"
            onChange={handleChage}
             className="form-control"  />
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress2">Phone</label>
    <input type="text" placeholder="phone"
            name="password"
            onChange={handleChage}
            value={set_addclients.phone} className="form-control" id="inputPhone" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Adress</label>
      <input type="text" placeholder="Password"
            name="adress"
            onChange={handleChage}
            value={set_addclients.adresse} className="form-control" id="inputAdress" />
    </div>

  </div>
  {error && <div className="error_msg"> (errror)</div>}

  <button type="submit" className="btn btn-primary">Add</button>
</form>
      
    </>
  )
}

export default Add_client
