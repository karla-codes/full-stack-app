import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
  const { context } = props;
  const authUser = context.authenticatedUser;

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          {authUser ? (
            <ul className="header--signedin">
              <li>
                Welcome, {authUser.firstName} {authUser.lastName}
              </li>
              <li>
                <NavLink to="/signout">Sign Out</NavLink>
              </li>
            </ul>
          ) : (
            <ul className="header--signedout">
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/signin">Sign In</NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
