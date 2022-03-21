import React from 'react'

function UpdateHotels() {
  return (
    <>
     <form className="p-2">
  <div className="form-row">
    <div className="form-group col-md-3">
      <label for="inputName">Name</label>
      <input type="Name" className="form-control" id="inputName" placeholder="Name" />
    </div>
    <div className="form-group col-md-3">
      <label for="inputDescription">Description</label>
      <input type="text" className="form-control" id="Description" placeholder="........" />
    </div>
  </div>
  <div className="form-group">
    <label for="inputType">Type</label>
    <input type="type" className="form-control" id="inputType" placeholder="Type" />
  </div>
  <div className="form-group">
    <label for="inputImage">Image</label>
    <input type="file" className="form-control" id="inputImage" placeholder="Image" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">Adress</label>
      <input type="text" className="form-control" id="inputAdress" />
    </div>

  </div>

  <button type="submit" className="btn btn-warning">Update</button>
</form>
      
      
    </>
  )
}

export default UpdateHotels
