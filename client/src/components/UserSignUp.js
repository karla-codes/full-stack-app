import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Form from './Form';

function UserSignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // add "cancel" function to Context
  // POST route: /api/users
  return (
    <Form
      submit={submit}
      errors={errors}
      elements={() => (
        <React.Fragment>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value=""
            onChange={change}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value=""
            onChange={change}
          ></input>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value=""
            onChange={change}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value=""
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
      return setEmail(value);
    } else if (name === 'password') {
      return setPassword(value);
    }
  }

  // - submit
  function submit() {
    const { context } = this.props;
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    context.data
      .createUser(user)
      .then(errors => {
        if (errors.length) {
          setErrors({ errors });
        } else {
          context.actions.signIn(email, password).then(() => {
            this.props.history.push('/authenticated');
            console.log(
              `${firstName} is successfully signed up and authenticated!`
            );
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push('/error');
      });
  }
}

export default UserSignUp;
