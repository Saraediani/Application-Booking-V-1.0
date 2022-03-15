import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BiIcons  from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal,  } from 'react-bootstrap';
import Add_client from './Add_client';
import Update_client from './Update_clients';




function Show_client() {

  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);

  const handleCloseU = () => setUpdate(false);
  const handleUpdate = () => setUpdate(true);

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);

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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td>Mark</td>
      <td><Button size="sm" variant="info" onClick={handleUpdate}>
            <GrIcons.GrUpdate size="10"  /><p className="m-1"  >Update</p>
          </Button></td>
      <td><Button size="sm" variant="danger">
            <BsIcons.BsFillTrashFill size="10"  /><p className="m-1" >Delete</p>
          </Button></td>
    </tr>
   
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

        <Update_client />

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
