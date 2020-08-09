import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css'

const Nav = () => {
  return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to = '/home'>Home</Link>
            </li>

            <li>
              <Link to = '/about'>About</Link>
            </li>

            <li>
              <Link to = '/moviecrud'>Movie List Editor</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Nav
