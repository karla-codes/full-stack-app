import React, { useState } from 'react';

function CreateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');

  {
    /* Needs to be wrapped in Context */
  }

  return (
    <main>
      <div className="wrap">
        <h2>Create Course</h2>
        {/* Only display if errors === true */}
        <div className="validation--errors">
          <ul>{/* Validation errors go here */}</ul>
        </div>
        <form>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                value=""
              ></input>
              <p>By {/*enter author name */}</p>
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
          <button className="button" type="submit">
            Create Course
          </button>
          <button className="button button-secondary" onClick="">
            Cancel
          </button>
        </form>
      </div>
    </main>
  );
}
