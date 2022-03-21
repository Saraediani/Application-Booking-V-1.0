import React, { useState, useEffect } from 'react'
import axios from "axios";
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import Add_client from './Add_client';
import Update_client from './Update_clients';




function Show_client() {

  const baseURL = "http://localhost:3000/api/clients";

  let [Clients, setClients] = useState([])
  const [client, set_client] = useState();
  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);
  const handleCloseU = () => setUpdate(false);

  async function getDAta(){

    let res = await axios.get(baseURL)
    let cli = await res.data
    if(cli.data){
      setClients(cli.data.clients);
    }
    }

  const deleteData = (id, e) =>{

    axios.delete(`http://localhost:3000/api/clients/${id}`).then(() => {
    
      alert("Post deleted!");
      setClients(null)
  })
  }


 useEffect( () => {
  getDAta()
  }, [Update, client]);

  
  const handleUpdate = (client) => {
    set_client(client)
    setUpdate(true)
    };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);


const data = Clients.map((Client, index) => {
  return(

    <tr key={index}>
      <td > <p>{Client._id}</p> </td>
      <td > <p>{Client.name}</p> </td>
      <td > <p>{Client.email}</p> </td>
      <td > <p>{Client.adresse}</p></td>
      <td > <p>{Client.phone}</p></td>
      <td><Button size="sm"  variant="info" onClick={()=>handleUpdate(Client)}>
            <GrIcons.GrUpdate size="10"  /><p className="m-1"  >Update</p>
          </Button></td>
      <td><Button size="sm"  variant="danger" onClick={()=> deleteData(Client._id)}>
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
    
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Adress</th>
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

        <Add_client />

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

        <Update_client data={client} close={handleCloseU} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Show_client
