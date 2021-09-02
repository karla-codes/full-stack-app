import './styles/global.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Courses from './components/Courses';
// import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
// import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
// import UserSignOut from './components/UserSignOut';
import withContext from './Context/Context';
import PrivateRoute from './PrivateRoute';
import UserSignOut from './components/UserSignOut';

// components w/Context
const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

// main container Component
function App() {
  // set up routes
  return (
    <Router>
      <HeaderWithContext />

      <Switch>
        <Route exact path="/" component={CoursesWithContext} />
        <PrivateRoute
          path="/courses/create"
          component={CreateCourseWithContext}
        />
        <PrivateRoute
          path="/courses/:id/update"
          component={UpdateCourseWithContext}
        />
        {/* <Route path="/courses/:id" component={CourseDetail} /> */}
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
      </Switch>
    </Router>
  );
}

export default App;
