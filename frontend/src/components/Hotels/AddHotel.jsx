import React, { useState } from "react";
import axios from "axios";


function AddHotel() {


  let token = JSON.parse(localStorage.getItem('name'));
console.log(token);
  const baseURL = 'http://localhost:3000/api/hotels'
  const [AddHotel, setAddHotel] = useState({
    name:"",
    type:"",
    description:"",
    address:""
  })
  const [images, setImages] = useState([]);

  const handelImages = (e) => {
    const uploadsImages = Array.from(e.target.files)
    setImages(uploadsImages)
    setAddHotel({...AddHotel, hotelImage: uploadsImages})
  }

  const {name, type, description, address} = AddHotel

  const [error, setError] = useState("") 

  const handleChage = ({ currentTarget: input }) => {
    setAddHotel({ ...AddHotel, [input.name]: input.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(AddHotel);
    try {
      const response = await axios.post(baseURL, AddHotel, { headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }});
      console.log(response.data);

      window.location = "/Hotels" 
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
            <label htmlFor="inputName">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
              value={name}
              onChange={handleChage}
            />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="inputDescription">Description</label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="Description"
              placeholder="........"
              value={description}
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputType">Type</label>
          <input
            name="type"
            type="text"
            className="form-control"
            id="inputType"
            placeholder="Type"
            value={type}
            onChange={handleChage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputImage">Image</label>
          <input
            type="file"
            name="images"
            className="form-control"
            id="inputImage"
            placeholder="Image"
            value={images}
            onChange={handelImages}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Adress</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="inputAdress"
              value={address}
              onChange={handleChage}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
  }

export default AddHotel;
