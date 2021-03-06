import React, { useState } from 'react';
import { Redirect } from 'react-router';

/**
 * Renders a form that allows user to create a new course
 */
function CreateCourse(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
  const [errors, setErrors] = useState([]);

  const { context } = props;
  const authUser = context.authenticatedUser;

  function isAuthUser() {
    if (authUser) {
      return (
        <main>
          <div className="wrap">
            <h2>Create Course</h2>
            <DisplayErrors errors={errors} />
            <form onSubmit={submit}>
              <div className="main--flex">
                <div>
                  <label htmlFor="courseTitle">Course Title</label>
                  <input
                    id="courseTitle"
                    name="courseTitle"
                    type="text"
                    onChange={change}
                  ></input>
                  <p>
                    By {authUser.firstName} {authUser.lastName}
                  </p>
                  <label htmlFor="courseDescription">Course description</label>
                  <textarea
                    id="courseDescription"
                    name="courseDescription"
                    onChange={change}
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="estimatedTime">Estimated Time</label>
                  <input
                    id="estimatedTime"
                    name="estimatedTime"
                    type="text"
                    onChange={change}
                  ></input>
                  <label htmlFor="materialsNeeded">Materials Needed</label>
                  <textarea
                    id="materialsNeeded"
                    name="materialsNeeded"
                    onChange={change}
                  ></textarea>
                </div>
              </div>
              <button className="button" type="submit">
                Create Course
              </button>
              <button className="button button-secondary" onClick={cancel}>
                Cancel
              </button>
            </form>
          </div>
        </main>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }

  return isAuthUser();

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

  function change(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'courseTitle') {
      return setTitle(value);
    } else if (name === 'courseDescription') {
      return setDescription(value);
    } else if (name === 'estimatedTime') {
      return setEstimatedTime(value);
    } else if (name === 'materialsNeeded') {
      return setMaterialsNeeded(value);
    }
  }

  function submit(e) {
    e.preventDefault();

    const newCourse = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId: authUser.id,
    };

    context.data
      .createCourse(newCourse, authUser)
      .then(errors => {
        if (errors) {
          setErrors(errors);
        } else {
          props.history.push('/');
        }
      })
      .then()
      .catch(err => {
        console.log(err);
        props.history.push('/error');
      });
  }

  function cancel() {
    props.history.push('/');
  }
}

export default CreateCourse;
