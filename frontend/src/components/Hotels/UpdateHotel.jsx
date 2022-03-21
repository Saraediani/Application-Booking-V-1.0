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
    setAddHotel({ ...Hotel, name: data.name });
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
              className="form-control"
              id="Description"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputType">Type</label>
          <input
            type="type"
            className="form-control"
            id="inputType"
            value={Hotel.type}
            placeholder="Type"
          />
        </div>
        <div className="form-group">
          <label for="inputImage">Image</label>
          <input
            type="file"
            className="form-control"
            id="inputImage"
            placeholder="Image"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Adress</label>

<<<<<<< HEAD
            <input
              type="text"
              value={Hotel.address}
              className="form-control"
              id="inputAdress"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
=======
  </div>

  <button type="submit" className="btn btn-warning">Update</button>
</form>
      
      
>>>>>>> 57ca0c254ee04ddff19dca101ae691ced844364e
    </>
  );
}

export default UpdateHotels;
