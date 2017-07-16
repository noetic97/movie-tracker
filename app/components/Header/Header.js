import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = (props) => {

  const name = props.userData.data ? props.userData.data.name : null

  const loginSignupBtns = (

    <div className="login-signup-btns">
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
      <NavLink to='/create-user'>
        <button>Signup</button>
      </NavLink>
    </div>

  )

  const logoutContainer = (

    <div className="logout-container">
      <span className="welcomeMsg">Welcome back, {name}</span>
      <button className="logout-btn" onClick={() => props.logUserOut()}>Logout</button>
    </div>

  )

  return (
    <header className="header">
      <div className="header-top">
        <h1 className="logo">MOVIE TRACKER</h1>
        {props.loggedIn ? logoutContainer : loginSignupBtns}
      </div>
      <nav>
        <NavLink className="nav-link"
        to="/">New Releases</NavLink>
        <NavLink className="nav-link"
        to="/favorites">Favorite Movies</NavLink>
      </nav>
    </header>
  )
}

export default Header
