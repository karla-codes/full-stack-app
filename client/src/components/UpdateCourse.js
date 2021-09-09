import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import NotFound from './NotFound';
import Forbidden from './Forbidden';

function UpdateCourse(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [materialsNeeded, setMaterialsNeeded] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [courseAuthorID, setCourseAuthorID] = useState('');

  const authUser = props.context.authenticatedUser;
  const { id } = useParams();

  useEffect(() => {
    props.context.data
      .getCourse(id)
      .then(data => {
        if (data.message) {
          console.log(data.message);
          setNotFound(true);
          setLoading(false);
        } else {
          setLoading(false);
          setTitle(data.title);
          setDescription(data.description);
          setEstimatedTime(data.estimatedTime);
          setMaterialsNeeded(data.materialsNeeded);
          setCourseAuthorID(data.userId);
        }
      })
      .catch(err => {
        console.log(err);
        props.history.push('/error');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function canUserUpdateCourse() {
    if (authUser.id !== courseAuthorID) {
      return <Forbidden />;
    } else {
      return (
        <div className="wrap">
          <h2>Update Course</h2>
          <DisplayErrors errors={errors} />
          <form onSubmit={submit}>
            <div className="main--flex">
              <div>
                <label htmlFor="courseTitle">Course Title</label>
                <input
                  id="courseTitle"
                  name="courseTitle"
                  type="text"
                  value={title}
                  onChange={change}
                ></input>
                <p>
                  By {authUser.firstName} {authUser.lastName}
                </p>
                <label htmlFor="courseDescription">Course description</label>
                <textarea
                  id="courseDescription"
                  name="courseDescription"
                  value={description}
                  onChange={change}
                ></textarea>
              </div>
              <div>
                <label htmlFor="estimatedTime">Estimated Time</label>
                <input
                  id="estimatedTime"
                  name="estimatedTime"
                  type="text"
                  value={estimatedTime === null ? '' : estimatedTime}
                  onChange={change}
                ></input>
                <label htmlFor="materialsNeeded">Materials Needed</label>
                <textarea
                  id="materialsNeeded"
                  name="materialsNeeded"
                  value={materialsNeeded === null ? '' : materialsNeeded}
                  onChange={change}
                ></textarea>
              </div>
            </div>
            <button className="button" type="submit">
              Update Course
            </button>
            <button className="button button-secondary" onClick={cancel}>
              Cancel
            </button>
          </form>
        </div>
      );
    }
  }

  function doesCourseExist() {
    if (notFound) {
      return <NotFound />;
    } else {
      return canUserUpdateCourse();
    }
  }

  function isLoading() {
    if (loading) {
      return null;
    } else {
      return doesCourseExist();
    }
  }

  function render() {
    return isLoading();
  }

  return <main>{render()}</main>;

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
      setTitle(value);
    } else if (name === 'courseDescription') {
      setDescription(value);
    } else if (name === 'estimatedTime') {
      setEstimatedTime(value);
    } else if (name === 'materialsNeeded') {
      setMaterialsNeeded(value);
    }
  }

  function submit(e) {
    e.preventDefault();

    const { context } = props;

    const updatedCourse = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      id: authUser.id,
    };

    context.data
      .updateCourse(updatedCourse, id)
      .then(errors => {
        if (errors.length) {
          setErrors(errors);
        } else {
          console.log(updatedCourse);
          props.history.push(`/courses/${id}`);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  function cancel() {
    props.history.push(`/courses/${id}`);
  }
}

export default UpdateCourse;
