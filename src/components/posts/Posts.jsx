
import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Posts.css";
import Post from '../post/Post';

export default function Posts() {
  return (
    <div className='posts'>
       <Link  to="/single-post"> 
         <Post />
       </Link>
       
    </div>
  );
}




