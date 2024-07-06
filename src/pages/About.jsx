import React from 'react';
import CourseTimeline from '../components/CourseTimeline';

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to our application! We are dedicated to providing the best experience for our users.</p>
      <p>Our team is composed of talented individuals passionate about technology and innovation. We strive to bring you cutting-edge features and an intuitive interface.</p>
      <p>Thank you for choosing our application. We hope you find it useful and enjoyable!</p>
      <CourseTimeline />
    </div>
  );
}

export default About;