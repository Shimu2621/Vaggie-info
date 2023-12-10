import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { TiLockClosedOutline } from "react-icons/ti";;
import { MdPersonOutline } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-wrapper container'>
          <nav className='navbar-details'>
                <button className='nav-btn'><span className='nav-span'>&#8801;</span>  All Departments <span className='nav-span'>&#x25BC;</span></button>
        
                <h6 className='home'>Home</h6>
                <h6 className=''>Shop</h6>
                <h6 className=''>Blog</h6>
                <h6 className=''>Portfolio</h6>
                <h6 className=''>Pages</h6>
                <h6 className=''>Contacts</h6>
                
                <div className='nav-icon'>
                    <div className='icon'><MdPersonOutline /></div>
                    <div className='icon'><IoMdHeartEmpty /></div>
                    <div className='icon'><TiLockClosedOutline /></div>
                </div>
                
          </nav>
        </div>
    </div>
  )
}

export default Navbar