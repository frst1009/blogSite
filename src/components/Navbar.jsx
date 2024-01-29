import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Your Site Name</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Navbar;
