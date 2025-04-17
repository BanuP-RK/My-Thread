import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="posthome">
        {post.image && (
      <img 
    src={post.image} 
    alt={post.title} 
    style={{ width: '200px', height: '300px',marginLeft:'50px'}} 
  />
)}
      <h2 style={{textAlign:'center'}}>{post.title}</h2>
      <Link to={`/post/${post.id}`} style={{ color: 'black',textAlign:'center',listStyleType:'none',textDecoration:'none'}}>
        <p style={{fontSize:'1rem',fontWeight:'300',color:'black',textAlign:'justify',textDecoration:'none',listStyleType:'none'}}>{post.body}</p>
        <p style={{fontSize:'0.7rem',fontWeight:'lighter',color:'gray'}}>Created on : {post.dateandtime}</p>
      </Link>
    
    </div>
  );
};

export default Post;
