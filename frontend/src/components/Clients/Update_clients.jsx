import { useState, useEffect} from 'react'


function Update_clients() {

  const baseURL = 'http://localhost:3000/api/clients'
  const [Add_clients, set_addclients] = useState({
    email: "",
    name:"",
    adresse:"",
    phone:"",
    password:""
  })

  const [error, setError] = useState("") 
  return (

    



    <>
     <form className="p-2">
  <div className="form-row">
    <div className="form-group col-md-3">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div className="form-group col-md-3">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Name</label>
    <input type="text" className="form-control" id="inputName" placeholder="1234 Main St" />
  </div>
  <div className="form-group">
    <label for="inputAddress2">Phone</label>
    <input type="text" className="form-control" id="inputPhone" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">Adress</label>
      <input type="text" className="form-control" id="inputAdress" />
    </div>

  </div>

  <button type="submit" className="btn btn-primary">Update</button>
</form>
      
      
    </>
  )
}

export default Update_clients
