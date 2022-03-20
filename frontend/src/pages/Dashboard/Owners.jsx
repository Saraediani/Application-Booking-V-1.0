import React from 'react'
import Navbar from '../../components/Nav_dash'
import ShowOwner from '../../components/Owners/Show_owners'
import './Pages.css'

const Owners = () => {
  return (
    <>
      <Navbar />
      <div className='owners'>

      <h1>Owners</h1>
      </div>

      <div className='col-md-10 text-center m-auto'>

      <ShowOwner/>
      </div>

    </>
  )
}

export default Owners