import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CourseDetail() {
  const [course, setCourse] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/courses/2`)
      .then(res => {
        setCourse(res.data.course);
      })
      .catch(err => console.log('Error fetching data', err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          <a className="button" href={'/courses' + course.id}>
            Update Course
          </a>
          <a className="button button-secondary" href="/courses">
            Return to List
          </a>
        </div>
      </div>
      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name">{course.title}</h4>
              <p>Course Author</p>
              <p>Course Information</p>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>14 hours</p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ul className="course--detail--list">
                <li>List of items</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default CourseDetail;
