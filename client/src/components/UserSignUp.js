import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Form from './Form';

function UserSignUp(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // add "cancel" function to Context
  // POST route: /api/users
  return (
    <Form
      submit={submit}
      cancel={cancel}
      errors={errors}
      submitButtonText="Sign Up"
      elements={() => (
        <React.Fragment>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={change}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={change}
          ></input>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={emailAddress}
            onChange={change}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={change}
          ></input>
        </React.Fragment>
      )}
    />
    /* <main>
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
    </main> */
  );

  function change(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'firstName') {
      return setFirstName(value);
    } else if (name === 'lastName') {
      return setLastName(value);
    } else if (name === 'emailAddress') {
      return setEmailAddress(value);
    } else if (name === 'password') {
      return setPassword(value);
    }
  }

  // - submit
  function submit() {
    const { context } = props;

    const user = {
      firstName,
      lastName,
      emailAddress,
      password,
    };

    context.data
      .createUser(user)
      .then(errors => {
        if (errors.length) {
          setErrors(errors);
        } else {
          // Once user is registered successfully, log them in and send to welcome page
          // context.actions.signIn(emailAddress, password).then(() => {
          //   props.history.push('/authenticated')
          // })
          console.log('User was successfully signed up!');
        }
      })
      .catch(err => {
        console.log(err);
        // render NotFound Component
        // props.history.push('/error')
      });
  }

  // - Cancel
  function cancel() {
    props.history.push('/');
  }
}

export default UserSignUp;
