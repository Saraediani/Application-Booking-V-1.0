import React from 'react'
import Hero from '../../components/Home/Hero';
import Banner from '../../components/Home/Banner';
import { Link } from 'react-router-dom';
import Services from '../../components/Home/Services';
import FeaturedRooms from '../../components/Home/FeaturedRooms';
import Navbar from '../../components/Home/Navbar';


function Home() {
    return (
        <>
        <Navbar />
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 500 MAD ">
                <Link to="/rooms" className="btn btn-warning">
                      Our Rooms
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        
        </>

    )
}
export default Home;