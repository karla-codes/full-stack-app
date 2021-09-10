import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 * Form for UserSignIn and UserSignUp components
 */
export default function Form(props) {
  const { submit, text, cancel, errors } = props;
  const { elements } = props;

  function handleSubmit(e) {
    e.preventDefault();
    submit();
  }

  function handleCancel(e) {
    e.preventDefault();
    cancel();
  }

  function displayCTA() {
    if (text === 'Sign In') {
      return (
        <p>
          Don't have a user account? Click here to
          <Link to="/signup"> Sign Up</Link>!
        </p>
      );
    } else {
      return (
        <p>
          Already have a user account? Click here to
          <Link to="/signin"> Sign In</Link>!
        </p>
      );
    }
  }

  return (
    <main>
      <div className="form--centered">
        <h2>{text}</h2>
        <DisplayErrors errors={errors} />
        <form onSubmit={handleSubmit}>
          {elements()}
          <button className="button" type="submit">
            {text}
          </button>
          <button className="button button-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
        {displayCTA()}
      </div>
    </main>
  );
}

function DisplayErrors({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div className="validation--errors">
        <h3>Validation Errors</h3>
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  return errorsDisplay;
}
