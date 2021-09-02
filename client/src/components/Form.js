import React from 'react';

export default function Form(props) {
  // const { actions } = this.props.context;
  const { submit, submitButtonText, cancel, errors } = props;
  const { elements } = props;

  function handleSubmit(e) {
    e.preventDefault();
    submit();
  }

  function handleCancel(e) {
    e.preventDefault();
    cancel();
  }

  return (
    <main>
      <DisplayErrors errors={errors} />
      <div className="form--centered">
        <form onSubmit={handleSubmit}>
          {elements()}
          <button className="button" type="submit">
            {submitButtonText}
          </button>
          <button className="button button-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </main>
  );
}

function DisplayErrors({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
        <h2>Validation Errors</h2>
        <div className="validation--errors">
          <ul>
            {errors.map(error => (
              <li>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}
