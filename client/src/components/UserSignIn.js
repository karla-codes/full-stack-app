import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserSignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // need to add authentication when signing in

  const cancel = e => {
    e.preventDefault();
    this.props.history.push('/courses');
  };

  return (
    <main>
      <div className="form--centered">
        <h2>Sign In</h2>
        <form>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value=""
          ></input>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value=""></input>
          <button className="button" type="submit">
            Sign In
          </button>
          <button className="button button-secondary" onClick={cancel}>
            Cancel
          </button>
        </form>
        <p>
          Don't have a user account? Click here to
          <Link to="/users">sign up</Link>!
        </p>
      </div>
    </main>
  );
}
