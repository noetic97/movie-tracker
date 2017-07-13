import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="logo">MOVIE TRACKER</h1>
        <div className="login-signup-btns">
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
          <NavLink to='/create-user'>
            <button>Signup</button>
          </NavLink>
        </div>
      </div>
      <nav>
        <NavLink className="nav-link" to="/">New Releases</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
