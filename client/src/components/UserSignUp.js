import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserSignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // add "cancel" function to Context
  return (
    <main>
      <div className="form--centered">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" value=""></input>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" value=""></input>
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
            Sign Up
          </button>
          <button className="button button-secondary" onClick="">
            Cancel
          </button>
        </form>
        <p>
          Already have a user account? Click here to <Link to="/signin"></Link>
        </p>
      </div>
    </main>
  );
}
