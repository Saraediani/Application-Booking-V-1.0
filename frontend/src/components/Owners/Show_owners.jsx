import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import AddOwners from './Add_owner';
import UpdateOwners from './Update_owner';




function ShowOwner() {

  const baseURL = "http://localhost:3000/api/owners";

  let [Owners, setOwners] = useState([])
  
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const [owner, set_Owner] = useState();

  async function getDAta(){

    let res = await axios.get(baseURL)


    let cli = await res.data
    if(cli.data){
      setOwners(cli.data.owners);
    }
    
  }


  useEffect( () => {
    getDAta()
    }, [Update, owner]);

  const handleCloseU = () => setUpdate(false);
  const handleUpdate = (Owner) => {
    set_Owner(Owner);
    setUpdate(true);
  }

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);

  function deleteOwner(id) {
    axios
      .delete(`${baseURL}/${id}`)
      .then(() => {
        alert("Owner deleted!");
        set_Owner();    
        window.location = "/dashboard/owners" 

        });
  }

const data = Owners.map((Owner, index) => {
  
  return(
    <tr key={index}>

      <td> <p>{Owner.name}</p> </td>
      <td> <p>{Owner.email}</p> </td>
      <td> <p>{Owner.password}</p></td>
      <td><Button size="sm" variant="info" onClick={()=>handleUpdate(Owner)}>
            <GrIcons.GrUpdate size="10"  /><p className="m-1"  >Update</p>
          </Button></td>
      <td><Button size="sm" variant="danger" onClick={()=>deleteOwner(Owner._id) }>
            <BsIcons.BsFillTrashFill size="10"  /><p className="m-1" >Delete</p>
          </Button></td> 
      
  </tr> 
  )
})



  return (
    <>
    <table className="table table-striped">
  <thead>
    <tr>
    
    
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
      <th scope="col">
      <Button size="sm"  className='menu-bars' variant="primary" onClick={handleAdd}>
            <BiIcons.BiUserPlus size="20"  /><p className="m-1" >Add User</p>
          </Button>
      </th>

    </tr>
  </thead>
  <tbody>
    
    {data}
   
     
  </tbody>
</table>

      <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <AddOwners data={owner} Close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={Update} onHide={handleCloseU}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <UpdateOwners   data={owner} Close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default ShowOwner