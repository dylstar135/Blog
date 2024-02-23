import React from 'react'
import "./Header.css"
import headerImage from "../../Assets/PXL_20221031_163656889_exported_7636.jpg"

export const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleLarge'>Pilgrim Up North</span>
      </div>
      <img className='headerImage' src={headerImage} alt="me and ant"/>
    </div>
  );
};
