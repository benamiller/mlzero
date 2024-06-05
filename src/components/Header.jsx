import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to Our Application</h1>
      <nav>
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
