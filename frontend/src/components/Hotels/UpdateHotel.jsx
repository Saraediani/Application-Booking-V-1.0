import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateHotels(props) {
  let token = JSON.parse(localStorage.getItem("name"));

  const baseURL = `http://localhost:3000/api/hotels/${props.id}`;

  const [Hotel, setAddHotel] = useState({
    name: "",
    type: "",
    description: "",
    address: "",
  });

  async function getDAta() {
    let res = await axios.get(baseURL);
    let data = res.data.data.hotel;
    console.log(data);
    setAddHotel({ ...Hotel, ...data });
    console.log(Hotel);
  }

  useEffect(() => {
    getDAta();
  }, []);

  const handleChage = async ({ currentTarget: input }) => {
    setAddHotel({ ...Hotel, [input.name]: input.value });

    console.log(Hotel);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("name", Hotel.name);
    bodyFormData.append("type", Hotel.type);
    bodyFormData.append("description", Hotel.description);
    bodyFormData.append("address", Hotel.address);
    bodyFormData.append("hotelImage", Image);
    try {
      const res = await axios({
        method: "put",
        url: baseURL,
        data: Hotel,

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(() => {
        window.location = "/dashboard/hotels";
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label for="inputName">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="inputName"
              value={Hotel.name}
              onChange={handleChage}
            />
          </div>
          <div className="form-group col-md-3">
            <label for="inputDescription">Description</label>
            <input
              type="text"
              name="Description"
              className="form-control"
              id="Description"
              value={Hotel.description}
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputType">Type</label>
          <input
            type="text"
            name="type"
            className="form-control"
            id="inputType"
            value={Hotel.type}
            onChange={handleChage}
          />
        </div>
        <div className="form-group">
          <label for="inputImage">Image</label>
          <input
            type="file"
            name="image"
            className="form-control"
            id="inputImage"
            value={Image}
            onChange={handleChage}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Adress</label>

            <input
              type="text"
              name="address"
              value={Hotel.address}
              className="form-control"
              id="inputAdress"
              onChange={handleChage}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-warning">
          Update
        </button>
      </form>
    </>
  );
}

export default UpdateHotels;
