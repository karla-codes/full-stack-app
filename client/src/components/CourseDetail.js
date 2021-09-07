import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function CourseDetail(props) {
  const [course, setCourse] = useState('');
  const [courseAuthor, setCourseAuthor] = useState('');

  const { context } = props;
  const authUser = context.authenticatedUser;
  const { id } = useParams();

  useEffect(() => {
    context.data
      .getCourse(id)
      .then(data => {
        setCourse(data);
        setCourseAuthor(data.User);
      })
      .catch(err => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isUserAuthenticated() {
    if (authUser) {
      if (authUser.id === courseAuthor.id) {
        return (
          <Link className="button" to={`/courses/${id}/update`}>
            Update Course
          </Link>
        );
      } else {
        return (
          <Link className="button" to="/forbidden">
            Update Course
          </Link>
        );
      }
    }
    return (
      <Link className="button" to="/signin">
        Update Course
      </Link>
    );
  }

  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
          {isUserAuthenticated()}
          <Link className="button button-secondary" to="/">
            Return to List
          </Link>
        </div>
      </div>
      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name">{course.title}</h4>
              <p>
                {courseAuthor.firstName} {courseAuthor.lastName}
              </p>
              <p>{course.description}</p>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              <p>{course.estimatedTime}</p>
              <h3 className="course--detail--title">Materials Needed</h3>
              <ul className="course--detail--list">
                <li>{course.materialsNeeded}</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default CourseDetail;
