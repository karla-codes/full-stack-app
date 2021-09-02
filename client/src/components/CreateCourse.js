import React, { useState } from 'react';
import Form from './Form';

function CreateCourse(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
  const [errors, setErrors] = useState([]);

  const { context } = props;
  const authUser = context.authenticatedUser;

  return (
    <Form
      submit={submit}
      cancel={cancel}
      errors={errors}
      submitButtonText="Create Course"
      elements={() => (
        <React.Fragment>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                value=""
              ></input>
              <p>
                By {authUser.firstName} {authUser.lastName}
              </p>
              <label htmlFor="courseDescription">Course description</label>
              <textarea
                id="courseDescription"
                name="courseDescription"
              ></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                value=""
              ></input>
              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
            </div>
          </div>
        </React.Fragment>
      )}
    />
  );

  function submit() {}

  function cancel() {}
}

export default CreateCourse;
