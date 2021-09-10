import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import NotFound from './NotFound';

/**
 * Renders specified course information
 * If authenticated user owns the course, a 'delete' and 'update' button will render
 */
function CourseDetail(props) {
  const [course, setCourse] = useState('');
  const [courseAuthor, setCourseAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const { context } = props;
  const authUser = context.authenticatedUser;
  const { id } = useParams();

  useEffect(() => {
    context.data
      .getCourse(id)
      .then(data => {
        if (data.message) {
          console.log(data.message);
          setNotFound(true);
          setLoading(false);
        } else {
          setLoading(false);
          setCourse(data);
          setCourseAuthor(data.User);
        }
      })
      .catch(err => {
        console.log(err);
        props.history.push('/error');
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isUserAuthenticated() {
    if (authUser) {
      if (authUser.id === courseAuthor.id) {
        return (
          <div className="wrap">
            <Link className="button" to={`/courses/${id}/update`}>
              Update Course
            </Link>
            <Link className="button" to={`/courses/${id}/delete`}>
              Delete Course
            </Link>
            <Link className="button button-secondary" to="/">
              Return to List
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="wrap">
        <Link className="button button-secondary" to="/">
          Return to List
        </Link>
      </div>
    );
  }

  function doesCourseExist() {
    if (notFound) {
      return <NotFound />;
    } else {
      return (
        <main>
          <div className="actions--bar">{isUserAuthenticated()}</div>
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
                  <ReactMarkdown>{course.description}</ReactMarkdown>
                </div>
                <div>
                  <h3 className="course--detail--title">Estimated Time</h3>
                  <p>{course.estimatedTime}</p>
                  <h3 className="course--detail--title">Materials Needed</h3>
                  <ReactMarkdown className="course--detail--list">
                    {course.materialsNeeded}
                  </ReactMarkdown>
                </div>
              </div>
            </form>
          </div>
        </main>
      );
    }
  }

  function isLoading() {
    if (loading) {
      return null;
    } else {
      return doesCourseExist();
    }
  }

  return <main>{isLoading()}</main>;
}

export default CourseDetail;
