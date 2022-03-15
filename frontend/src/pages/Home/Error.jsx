import React from 'react'
import Hero from '../../components/Home/Hero'
import Banner from '../../components/Home/Banner';
import { Link } from 'react-router-dom';
import {FaRegMeh} from 'react-icons/fa';
import Navbar from '../../components/Home/Navbar';


export default function Error() {
    return (

        <>
        <Navbar />
        
        <>
        <Hero hero="roomsError" />
        <Banner title="ERROR 404 NOT FOUND" subtitle="You are lost !! Its dark everywhere">
                <FaRegMeh className="lost"></FaRegMeh>
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        </>
        </>

    )
}
