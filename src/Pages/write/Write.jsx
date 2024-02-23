import React, { useState } from 'react';
import "./write.css";
import writeImg from "../../Assets/Mirror pic.jpg";

export default function Write({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new post object with the title and content
    const newPost = {
      title: title,
      content: content
    };
    // Call the addPost function passed as a prop with the new post
    addPost(newPost);
    // Clear the form inputs
    setTitle('');
    setContent('');
  };

  return (
    <div className='write'>
        <img className="writeImg" src={writeImg} alt="mirror pic" />
        <form className='writeForm' onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                  <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input
                  type="text"
                  placeholder='Title'
                  className='writeInput'
                  autoFocus={true}
                  value={title}
                  onChange={handleTitleChange}
                />
            </div>
            <div className="writeFormGroup">
                <textarea
                  placeholder='Tell your story...'
                  type="text"
                  className='writeInput writeText'
                  value={content}
                  onChange={handleContentChange}
                ></textarea>
            </div>
            <button type="submit" className="writeSubmit">Publish</button>
        </form>
    </div>
  );
}

