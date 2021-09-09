import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Form from './Form';

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
          context.actions.signIn(emailAddress, password).then(() => {
            props.history.push('/');
          });
          console.log('User was successfully signed up!');
        }
      })
      .catch(err => {
        console.log(err);
        props.history.push('/error');
      });
  }

  // - Cancel
  function cancel() {
    props.history.push('/');
  }
}

export default UserSignUp;
