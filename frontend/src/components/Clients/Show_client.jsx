import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BiIcons  from "react-icons/bi";
import { Button, Modal,  } from 'react-bootstrap';
import Add_client from './Add_client';


function Show_client() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button to='' className='menu-bars' variant="primary" onClick={handleShow}>
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
      <td><Button variant="info">
            <BiIcons.BiUserPlus size="10"  /><p className="m-1" >Update</p>
          </Button></td>
      <td><Button variant="danger">
            <BiIcons.BiUserPlus size="10"  /><p className="m-1" >Delete</p>
          </Button></td>
    </tr>
   
  </tbody>
</table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <Add_client />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Show_client
