import React, { useState, useEffect } from "react";
import axios from "axios";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import { Button, Modal } from "react-bootstrap";
import AddHotel from "./AddHotel";
import UpdateHotel from "./UpdateHotel";

function ShowHotel() {
  let token = JSON.parse(localStorage.getItem("name"));

  const baseURL = "http://localhost:3000/api/hotels";

  const [Hotels, set_Hotels] = useState([]);

  async function getDAta() {
    let res = await axios.get(baseURL);
    let hot = await res.data;
    if (hot.data) {
      set_Hotels(hot.data.hotels);
    }
  }

  useEffect(() => {
    getDAta();
  }, []);

  const deleteData = (id, e) => {
    axios
      .delete(`http://localhost:3000/api/hotels/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        getDAta();
      });
  };

  const [Add, setAdd] = useState(false);
  const [Update, setUpdate] = useState(false);

  const [hotelId, setId] = useState([]);
  const handleCloseU = () => setUpdate(false);

  const handleUpdate = (id) => {
    setId(id);
    setUpdate(true);
  };

  const handleClose = () => setAdd(false);
  const handleAdd = () => setAdd(true);

  const data = Hotels.map((Hotel, index) => {
    return (
      <tr key={index}>
        <td>{Hotel.name}</td>
        <td>{Hotel.description}</td>
        <td>{Hotel.type}</td>
        <td>{Hotel.hotelImage}</td>
        <td>{Hotel.address}</td>
        <td>
          <Button
            size="sm"
            variant="info"
            onClick={() => handleUpdate(Hotel._id)}
          >
            <GrIcons.GrUpdate size="10" />
            <p className="m-1">Update</p>
          </Button>
        </td>
        <td>
          <Button size="sm" variant="danger" value="{Hotel._id}">
            <BsIcons.BsFillTrashFill size="10" />
            <p className="m-1" onClick={() => deleteData(Hotel._id)}>
              Delete
            </p>
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Image</th>
            <th scope="col">Address</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
            <th scope="col">
              <Button
                size="sm"
                className="menu-b"
                variant="primary"
                onClick={handleAdd}
              >
                <BiIcons.BiUserPlus size="20" />
                <p className="m-1">Add Hotel</p>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>

      <Modal show={Add} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <AddHotel />

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

        <UpdateHotel id={hotelId} />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseU}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowHotel;
