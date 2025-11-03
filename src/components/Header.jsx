import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <h1 className="logo">The Handpan Companion</h1>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
            <li><NavLink to="/book" className={({isActive}) => isActive ? 'active' : ''}>Book</NavLink></li>
            <li><NavLink to="/interviews" className={({isActive}) => isActive ? 'active' : ''}>Interviews</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
