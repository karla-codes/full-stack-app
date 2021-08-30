import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/courses')
      .then(res => {
        setCourses(res.data.courses);
        console.log(courses);
      })
      .catch(err => console.log('Error fetching data', err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrap main--grid">
      {/* for each course, return anchor tag with course info */}
      {courses.map(course => {
        return (
          <a
            className="course--module course--link"
            href={'/courses/' + course.id}
          >
            <h2 className="course--label">{course.title}</h2>
            <h3 className="course--title">{course.description}</h3>
          </a>
        );
      })}

      {/* Link to add new course */}
      <a className="course--module course--add--module" href="create-course">
        <span className="course--add--title">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 13 13"
            className="add"
          >
            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
          </svg>
          New Course
        </span>
      </a>
    </div>
  );
}

export default Courses;
