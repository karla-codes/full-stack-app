import React, { useEffect } from 'react';
import { Redirect } from 'react-router';

function UserSignOut(props) {
  const { context } = props;
  useEffect(() => {
    context.actions.signOut();
  });

  return <Redirect to="/" />;
}

export default UserSignOut;
