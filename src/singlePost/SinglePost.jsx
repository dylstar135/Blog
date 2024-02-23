import React from 'react'
import "./singlePost.css"
import singlePostImage from "../Assets/PXL_20221031_163656889_exported_7636.jpg"

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={singlePostImage} alt="" className="singlePostImage" />
        </div>
        <h1 className="singlePostTitle">Image post title practice
        <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i></div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: <b>Pilgrim Up North</b> </span>
        </div>
        <p className='singlePostDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus ipsa, perspiciatis dolor et sequi ducimus eum architecto, alias ad libero sunt molestias earum ipsam animi ipsum, molestiae omnis nisi.</p>
    </div>
  )
}
