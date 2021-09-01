import React from 'react';

export default function Form(props) {
  // const { actions } = this.props.context;
  const { submit } = props;
  const { elements } = props;

  function handleSubmit(e) {
    e.preventDefault();
    submit();
  }

  return (
    <main>
      <div className="form--centered">
        <form onSubmit={handleSubmit}>
          {elements()}
          <button className="button" type="submit">
            Sign Up
          </button>
          <button className="button button-secondary" onClick="">
            Cancel
          </button>
        </form>
      </div>
    </main>
  );
}
