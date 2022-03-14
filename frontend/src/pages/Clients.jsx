import React from 'react'
import Navbar from '../components/Navbar'
import Showclient from '../components/Clients.jsx/Show_client'
import './Pages.css'


const index = () => {
  return (
    <>
      <Navbar />
      <div className='clients'>
      <h1>Clients</h1>
      </div>

      <div className='col-md-10 text-center m-auto'>

      <Showclient />
      </div>
    </>
  )
}

export default index