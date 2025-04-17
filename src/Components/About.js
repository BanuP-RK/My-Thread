import React from 'react';
import error from '../assets/thread-logo.jpg'

const About = () => {
  return (
    <div className='about-section'>
        <h2>Get in touch with us</h2>
      <p>MYThread is a minimal social media app designed for one core purpose — posting your thoughts.
Users can create short posts, add images, and share what’s on their mind. No distractions, no clutter — 
just you and your posts in a clean, scrollable format.Whether it’s an idea, an update, or a random thought,
 SimpleThread gives you a space to express it easily.
✨ Post. View. Repeat</p>
      <h6>@ My-Thread Developed by BANU.R.K</h6>
      <h6>mythread@outlook.in</h6>
       <img src={error} alt="error-page" classname="error-image" style={{ width: '300px', height: 'auto', marginTop: '20px'}}></img>
    </div>
  )
}

export default About