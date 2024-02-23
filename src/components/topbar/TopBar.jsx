import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://www.instagram.com/pilgrim.up.north/' target='_blank' rel="noopener noreferrer" aria-label="Visit my Instagram profile">
          <i className="topIcon fab fa-instagram"></i>
        </a>
      </div>
      <div className='topCenter'>
        <ul className="topList">
          <li className="topListItem"><Link className='link' to="/">HOME</Link></li>
          <li className="topListItem"><Link className='link' to="/about">ABOUT</Link></li>
          <li className="topListItem"><Link className='link' to="/contact">CONTACT</Link></li>
          <li className="topListItem"><Link className='link' to="/write">WRITE</Link></li>
        </ul>
      </div>
      <div className='topRight'></div>
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  );
}


