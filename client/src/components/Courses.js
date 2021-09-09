import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Courses(props) {
  const [courses, setCourses] = useState([]);
  const { context } = props;

  const authUser = context.authenticatedUser;

  useEffect(() => {
    context.data
      .getCourses()
      .then(data => setCourses(data))
      .catch(err => {
        console.log(err);
        this.props.history.push('/error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // for each course, return anchor tag with course info
  const coursesArr = courses.map(course => {
    return (
      <Link
        to={`/courses/${course.id}`}
        className="course--module course--link"
        key={course.id}
      >
        <h2 className="course--label">{course.title}</h2>
        <h3 className="course--title">{course.description}</h3>
      </Link>
    );
  });

  function isUserAuthenticated() {
    if (authUser) {
      return (
        <Link
          to="/courses/create"
          className="course--module course--add--module"
        >
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
        </Link>
      );
    } else {
      return (
        <Link to="/signin" className="course--module course--add--module">
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
        </Link>
      );
    }
  }

  return (
    <div className="wrap main--grid">
      {coursesArr}
      {isUserAuthenticated()}
    </div>
  );
}

export default Courses;
