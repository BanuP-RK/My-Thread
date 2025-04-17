import React from 'react';
import error from '../assets/image-not-found.webp'

const Missing = () => {
  return (
    <div className='missing-page'>
      <h2> 404 Page Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <h4>Visit Our Page</h4>
      <img src={error} alt="error-page" classname="error-image" style={{ width: '300px', height: 'auto', marginTop: '20px'}}></img>
    </div>
  );
}

export default Missing;