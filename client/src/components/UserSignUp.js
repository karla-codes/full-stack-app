import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Form from './Form';

/**
 *
 * Renders form that allows a new user to sign up
 */
function UserSignUp(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  return (
    <Form
      submit={submit}
      cancel={cancel}
      errors={errors}
      text="Sign Up"
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
      .then(data => {
        if (data.length) {
          setErrors(data);
        } else if (data) {
          // Once user is registered successfully, log them in and send to welcome page
          context.actions.signIn(emailAddress, password).then(() => {
            props.history.goBack();
          });
          console.log('User was successfully signed up!');
        } else {
          props.history.push('/error');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // - Cancel
  function cancel() {
    props.history.push('/');
  }
}

export default UserSignUp;
