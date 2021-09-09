import React from 'react';
import { useParams } from 'react-router-dom';

function DeleteCourse(props) {
  const { context } = props;
  const { id } = useParams();
  const authUser = context.authenticatedUser;
  return (
    <main>
      <div className="wrap">
        <h2>Delete</h2>
        <p>Are you sure you want to delete this course?</p>
        <form onSubmit={deleteCourse}>
          <button className="button" type="submit">
            Delete
          </button>
          <button className="button button-secondary" onClick={cancel}>
            Cancel
          </button>
        </form>
      </div>
    </main>
  );

  function deleteCourse(e) {
    e.preventDefault();
    context.data
      .deleteCourse(id, authUser)
      .then(() => {
        props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        props.history.push('/error');
      });
  }

  function cancel() {
    props.history.push('/');
  }
}

export default DeleteCourse;
