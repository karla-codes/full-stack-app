import './styles/global.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import withContext from './Context/Context';
import PrivateRoute from './PrivateRoute';
import UserSignOut from './components/UserSignOut';
import Forbidden from './components/Forbidden';
import DeleteCourse from './components/DeleteCourse';

// components w/Context
const HeaderWithContext = withContext(Header);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const DeleteCourseWithContext = withContext(DeleteCourse);

// main container Component
function App() {
  // set up routes
  return (
    <Router>
      <HeaderWithContext />

      <Switch>
        <Route exact path="/" component={CoursesWithContext} />
        <PrivateRoute
          path="/courses/:id/update"
          component={UpdateCourseWithContext}
        />
        <PrivateRoute
          path="/courses/create"
          component={CreateCourseWithContext}
        />
        <Route path="/courses/:id/delete" component={DeleteCourseWithContext} />
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <Route path="/forbidden" component={Forbidden} />
      </Switch>
    </Router>
  );
}

export default App;
