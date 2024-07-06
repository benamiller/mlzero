import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const courses = [
  { id: 1, name: 'Introduction to Machine Learning', time: '2 weeks', knowledge: 'Basics of ML' },
  { id: 2, name: 'Deep Learning Fundamentals', time: '3 weeks', knowledge: 'Neural Networks' },
  { id: 3, name: 'Applied Machine Learning', time: '4 weeks', knowledge: 'Real-world applications' },
  { id: 4, name: 'Machine Learning at Scale', time: '5 weeks', knowledge: 'Large-scale projects' }
];

function CourseTimeline() {
  const [visibleCourse, setVisibleCourse] = useState(0);
  const { ref, inView, entry } = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      const index = courses.findIndex(course => course.id === entry.target.dataset.id);
      setVisibleCourse(index);
    }
  }, [inView, entry]);

  return (
    <div ref={ref} className="timeline">
      {courses.map((course, index) => (
        <div key={course.id} data-id={course.id} className={`timeline-item ${index === visibleCourse ? 'visible' : 'hidden'}`}>
          <h3>{course.name}</h3>
          <p>Time to complete: {course.time}</p>
          <p>Knowledge gained: {course.knowledge}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseTimeline;