import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(resData => {
        setData(resData.courses);
        console.log(data);
      })
      .catch(err => console.log('Error fetching data', err));
  }, []);

  return (
    <div className="App">
      <ul>
        {data.map(course => (
          <li>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
