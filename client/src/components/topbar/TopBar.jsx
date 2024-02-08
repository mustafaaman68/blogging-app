import React from 'react'
import './topBar.css'
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
export default function TopBar() {
  return (
    <div className='top'>
    <div className="topLeft">
    <FaInstagram />
    <CiTwitter />
    <FaPinterest />
    <CiFacebook />

</div>
<div className="topCenter">

    <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">About</li>
        <li className="topListItem">Write</li>
        <li className="topListItem">Logout</li>
    </ul>
    </div>
    <div className="topRight">
    <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
{/* search tool lana hai */}
<CiSearch />
    </div>
</div>  
  
   
    
  )
}
