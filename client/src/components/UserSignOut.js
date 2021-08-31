import React, { useEffect } from 'react';
import { Redirect } from 'react-router';

function UserSignOut() {
  // wrap in Context
  return <Redirect to="/courses" />;
}
