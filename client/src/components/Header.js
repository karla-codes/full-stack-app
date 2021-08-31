import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  // wrap in Context
  // check if user is authenticated
  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/courses">Courses</Link>
        </h1>
        <nav>
          {/* If authenticatedUser === false */}
          <ul className="header--signedout">
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/signiin">Sign In</NavLink>
            </li>
          </ul>
          {/* else */}
          <ul className="header--signedin">
            <li>Welcome, Joe Smith</li>
            <li>
              <NavLink to="/signout">Sign Out</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
