import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <div className="flex">
        <img src="/logo.png" alt="Hacker News Logo" className="logo" />
        <NavLink to="/" className="header-title">
          Hacker News
        </NavLink>
        <div className="flex container">
          <NavLink to="/" className="header-link">
            new
          </NavLink>
          <div className="divider">|</div>
          <NavLink to="/top" className="header-link">
            top
          </NavLink>
          <div className="divider">|</div>
          <NavLink to="/search" className="header-link">
            search
          </NavLink>
          <div className="divider">|</div>
          <NavLink to="/create" className="header-link">
            submit
          </NavLink>
        </div>
      </div>
      <div className="flex login">
        <NavLink to="/login" className="header-link">
          login
        </NavLink>
      </div>
    </div>
  )
}

export default Header
