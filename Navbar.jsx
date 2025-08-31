import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../assets/contact.png'


const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopmenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Client</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Clients</Link>

            </div>
            <button className="desktopmenuBtn">
                <img src={contactImg} alt="" className="desktopmenuImg" />Contact Me
            </button>
        </div>
    )
}
export default Navbar;

//change the logo after completion 