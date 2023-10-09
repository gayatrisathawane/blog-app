import React, { useEffect, useState } from "react";
import './PostRead.css';
import data from './../../confi/data.json';
import { useParams,Link } from 'react-router-dom';


const PostRead = () => {
   const { id } = useParams(); 
   const [post ,setPost]=useState({})

   useEffect(()=>{
    data.forEach((blog)=>{
      if(blog.id == id){
         setPost(blog)
      }
    })

   },[id])

   return(
      <>
      <div className="postread-container">
         <h1 className="post-title color"> {post.title} </h1>
         <p className="post-subtitle"> {post.subtitle} </p>
         <img src={post.url} className="post-img" />
         <p className="fs-3">{post.body}</p>
         <p className="quotes-heading fs-3 fw-bold color">{post.quotestitle}</p>
         <p className="quotes-desc fs-3 color ">{post.quotes}</p>
         < p className="decspost"> {post.description} </p>
         {/* <h5>{post.body}</h5> */}
      </div>
          <Link to="/posts/" className="text-decoration-none"><button className="btn-go-back" > Go Back </button></Link> 
      </>
   )
}

export default PostRead;
