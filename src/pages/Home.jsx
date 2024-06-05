import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const courses = [
    { id: 1, name: 'Introduction to Machine Learning', progress: 20, description: 'Learn the basics of ML.' },
    { id: 2, name: 'Deep Learning Fundamentals', progress: 50, description: 'Dive deeper into neural networks.' },
    { id: 3, name: 'Applied Machine Learning', progress: 75, description: 'Apply ML techniques to real-world problems.' },
    { id: 4, name: 'Machine Learning at Scale', progress: 30, description: 'Learn to handle large-scale ML projects.' }
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleCourse = (id) => {
    setSelectedCourse(selectedCourse === id ? null : id);
  };

  return (
    <div className="home-page">
      <h1>Machine Learning Courses</h1>
      <div className="courses-container">
        {courses.map(course => (
          <div key={course.id} className={`course-card ${selectedCourse === course.id ? 'expanded' : ''}`} onClick={() => toggleCourse(course.id)}>
            <h2>{course.name}</h2>
            {selectedCourse === course.id && (
              <div className="course-details">
                <p>{course.description}</p>
                <div className="progress-bar" style={{ '--progress-width': `${course.progress}%` }}></div>
              </div>
            )}
            <Link to={`/course/${course.id}`} className="course-link">Go to Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
