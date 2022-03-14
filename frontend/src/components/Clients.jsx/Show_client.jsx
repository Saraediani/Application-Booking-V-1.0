import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUserSwitch } from 'react-icons/ai'




function Show_client() {

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
      <th scope="col">
      <Link to='/Add_client' className='menu-bars'>
            <AiOutlineUserSwitch size="15"  /><p className="m-1">Add User</p>
          </Link>
      </th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
    </tr>
  </tbody>
</table>
      
    </>
  )
}

export default Show_client
