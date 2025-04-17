import React from 'react';
import Post2 from './Post2';
import error from '../assets/no-post-image.jpg';
import { Link } from 'react-router-dom';

const Home = ({searchresults}) => {
  return (
    <div className='home'>
    {searchresults.length ? (
      <Post2 posts={searchresults} />
    ) : (
      <div>
      <p style={{ margin: "2rem" , textAlign:'center'}}>No posts to display</p>
       <img src={error} alt="error-page" classname="error-image" style={{ width: '300px', height: 'auto', marginTop: '20px',marginLeft:'650px'}}
       ></img>
      
      
      <p style={{ margin: "2rem" , textAlign:'center'}}> Click <Link to="/post"> Here </Link> to create a post</p>

       </div>
    )}
  </div>
  )
}

export default Home