import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a list of all courses
 */
function Courses(props) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { context } = props;

  useEffect(() => {
    context.data
      .getCourses()
      .then(data => {
        if (data) {
          setLoading(false);
          setCourses(data);
        } else {
          props.history.push('/error');
        }
      })
      .catch(err => {
        console.log(err);
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
        <h2 className="course--label">Course</h2>
        <h3 className="course--title">{course.title}</h3>
      </Link>
    );
  });

  function isLoading() {
    if (loading) {
      return null;
    } else {
      return (
        <div className="wrap main--grid">
          {coursesArr}
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
        </div>
      );
    }
  }

  return isLoading();
}

export default Courses;
