import React, { useState } from 'react';
function CreateCourse(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
  const [errors, setErrors] = useState([]);

  const { context } = props;
  const authUser = context.authenticatedUser;

  return (
    <main>
      <div className="wrap">
        <h2>Create Course</h2>
        {/* Validation errors go here */}
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
      .catch(err => console.log(err));
  }

  function cancel() {
    props.history.push('/');
  }
}

export default CreateCourse;
