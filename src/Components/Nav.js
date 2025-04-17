import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Nav = ({search,setsearch}) => {
  return (
    <div>
        <nav className='nav-section'>
        <form className='form-section'>
            <label htmlFor='Search' className='label'>Search</label>
            <input className='textbox' id="search" type='text' value={search} placeholder='search here' onChange={(e)=>setsearch(e.target.value)}>
            </input>
        </form>
        <ul className='unorderedlist'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/post">Post</Link></li>
            <li><Link to ="/About">About</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Nav