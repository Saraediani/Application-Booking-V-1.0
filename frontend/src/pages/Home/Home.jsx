import React from 'react'
import Hero from '../../components/Home/Hero';
import Banner from '../../components/Home/Banner';
import { Link } from 'react-router-dom';
import FeaturedRooms from '../../components/Home/FeaturedRooms';
import Navbar from '../../components/Home/Navbar';


function Home() {
    return (
        <>
        <Navbar />
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 500 MAD ">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner>
      
        <FeaturedRooms/>
    
        
        </>

    )
}
export default Home;