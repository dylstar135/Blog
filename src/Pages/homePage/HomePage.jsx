import React from 'react';
import { Header } from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';


export default function HomePage() {
  console.log("Rendering HomePage...");
  
  return (
    <>
      <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}


