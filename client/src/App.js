import './App.css';
import React from 'react';
// import { Router, Route, Switch } from 'react-router';
import Courses from './components/Courses';

// main container Component
function App() {
  // set up routes

  return <Courses />;
  // const [data, setData] = useState('');
  // useEffect(() => {
  //   fetch('http://localhost:5000/api/courses')
  //     .then(res => res.json())
  //     .then(resData => {
  //       setData(resData.courses);
  //       console.log(data);
  //     })
  //     .catch(err => console.log('Error fetching data', err));
  // }, [data]);
  // return (
  //   <div className="App">
  //     <ul>
  //       {data.map(course => (
  //         <li>{course.title}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default App;
