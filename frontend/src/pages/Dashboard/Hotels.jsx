import React from 'react'
import Navbar from '../../components/Nav_dash'
import ShowHotel from '../../components/Hotels/ShowHotel'

import './Pages.css'

const Hotels = () => {
  return (
    <>
      <Navbar />
      <div className='hotels'>

      <h1>Hotels</h1>
      </div>

      <div className='table-agents col-md-10 text-center m-auto'>

     <ShowHotel />
     </div>
    </>
  )
}

export default Hotels
