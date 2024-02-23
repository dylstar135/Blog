import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Write from '../write/Write';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      <Header />
      <div className='home'>
        <Write addPost={addPost} />
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}


