import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="logo">MOVIE TRACKER</h1>
        <div className="login-signup-btns">
          <button>Login</button>
          <button>Signup</button>
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
