import React, { useState } from 'react';
import Form from './Form';

/**
 * Renders user sign in form
 */
function UserSignIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  return (
    <Form
      submit={submit}
      cancel={cancel}
      errors={errors}
      text="Sign In"
      elements={() => (
        <React.Fragment>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            onChange={change}
            value={username}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={change}
            value={password}
          ></input>
        </React.Fragment>
      )}
    />
  );

  function change(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'emailAddress') {
      return setUsername(value);
    } else if (name === 'password') {
      return setPassword(value);
    }
  }

  function submit() {
    const { context } = props;
    const { from } = props.location.state || { from: '/' };

    // if inputs are left blank, return error message
    if (username === '' || password === '') {
      setErrors(['Email address and password are required']);
    } else {
      context.actions
        .signIn(username, password)
        .then(user => {
          if (user === null) {
            setErrors(['Sign in was unsuccessfull']);
          } else {
            props.history.push(from);
            console.log(`${username} was signed in successfully!`);
          }
        })
        .catch(err => {
          console.log(err);
          props.history.push('/error');
        });
    }
  }

  function cancel() {
    props.history.push('/');
  }
}

export default UserSignIn;
