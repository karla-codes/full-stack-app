import './styles/global.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Courses from './components/Courses';
// import CourseDetail from './components/CourseDetail';
// import CreateCourse from './components/CreateCourse';
// import UpdateCourse from './components/UpdateCourse';
// import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
// import UserSignOut from './components/UserSignOut';
import withContext from './Context/Context';

// components w/Context
const CoursesWithContext = withContext(Courses);
const UserSignUpWithContext = withContext(UserSignUp);

// main container Component
function App() {
  // set up routes
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={CoursesWithContext} />
        {/* <Route path="/courses/create" component={CreateCourse} /> */}
        {/* <Route path="/courses/:id/update" component={UpdateCourse} /> */}
        {/* <Route path="/courses/:id" component={CourseDetail} /> */}
        {/* <Route path="/signin" component={UserSignIn} /> */}
        <Route path="/signup" component={UserSignUpWithContext} />
        {/* <Route path="/signout" component={UserSignOut} /> */}
      </Switch>
    </Router>
  );
}

export default App;
