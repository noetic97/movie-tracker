import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <h1>MOVIE TRACKER</h1>

        <button>Login</button>
        <button>Signup</button>
      </div>
      <NavLink to="/">New Releases</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  )
}

export default Header
