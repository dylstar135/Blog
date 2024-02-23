import React from 'react'
import "./single.css"
import Sidebar from '../../../components/sidebar/Sidebar'
import SinglePost from '../../../singlePost/SinglePost'

export default function single() {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />
    </div>
  )
}
