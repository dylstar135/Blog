import React from 'react';
import { Link } from 'react-router-dom'; 
import "./post.css";
import Post from '../post/Post';

export default function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div className='posts'>
      {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}> 
          <Post title={post.title} imageUrl={post.imageUrl} />
        </Link>
      ))}
    </div>
  );
}
