import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Course1 from './courses/Course1.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
          <Link to="/" className="App-link">Home</Link>
          <Link to="/about" className="App-link">About</Link>
          <Link to="/blog" className="App-link">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/course/1" element={<Course1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
