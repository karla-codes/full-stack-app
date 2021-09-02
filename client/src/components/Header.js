import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  // wrap in Context
  const { context } = props;
  const authUser = context.authenticatedUser;
  // check if user is authenticated

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          {authUser ? (
            <ul className="header--signedin">
              <li>Welcome, {authUser.firstName}</li>
              <li>
                <NavLink to="/signout">Sign Out</NavLink>
              </li>
            </ul>
          ) : (
            <ul className="header--signedout">
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
              </li>
            </ul>
          )}
          {/* If authenticatedUser === false */}
          {/* else */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
