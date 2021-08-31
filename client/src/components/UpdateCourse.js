import React, { useState } from 'react';

function UpdateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
  // Needs to be wrapped in Context
  return (
    <main>
      <div className="wrap">
        <h2>Update Course</h2>
        <form>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input
                id="courseTitle"
                name="courseTitle"
                type="text"
                value="current course title"
              ></input>
              <p>By {/*author name */}</p>
              <label htmlFor="courseDescription">Course description</label>
              <textarea id="courseDescription" name="courseDescription">
                {/* current description */}
              </textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input
                id="estimatedTime"
                name="estimatedTime"
                type="text"
                value="current value"
              ></input>
              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded">
                {/* current materials needed*/}
              </textarea>
            </div>
          </div>
          <button className="button" type="submit">
            Update Course
          </button>
          <button className="button button-secondary" onClick="">
            Cancel
          </button>
        </form>
      </div>
    </main>
  );
}
