import React from 'react'
import Hero from '../../components/Home/Hero'
import Banner from '../../components/Home/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../../components/Home/RoomsContainer';
import Navbar from '../../components/Home/Navbar';

const Rooms = () => {
    return (
        <>
        <Navbar />
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        <RoomsContainer/>
    </div>
        </>
    )
}

export default Rooms
