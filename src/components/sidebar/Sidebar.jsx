import React from 'react'
import "./Sidebar.css"
import aboutImage from "../../Assets/Mirror pic.jpg"

export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="aboutImage" src={aboutImage} alt="me and ant in a mirror" />
        <p>Me and Ant taking the selfie of the century. This was taken inbetween us camping Pen-y-Ghent summit and makinig for Whernside summit. 
          Had to make sure we looked the part.</p>
       </div>
       <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Beginnings</li>
            <li className="sidebarListItem">Gear</li>
            <li className="sidebarListItem">Adventures</li>
        </ul>
       </div>
       <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <a href='https://www.instagram.com/pilgrim.up.north/' target='_blank' rel="noopener noreferrer" aria-label="Visit my Instagram profile">
    <i className=" sidebarIcon fab fa-instagram"></i>
  </a>
        </div>
       </div>
    </div>
  )
}
