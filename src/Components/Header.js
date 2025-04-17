import React from 'react';
import '../App.css'

const Header = ({title}) => {
  return (
    <div>
        <header className='header-section'><h1>{title} </h1></header>
    </div>
  )
}

export default Header