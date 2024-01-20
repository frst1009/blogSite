import React from 'react';
import './home.css';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="hero">
      <h1>Welcome to Your Blog</h1>
      <p>Discover amazing content and more...</p>
      <button>Explore Blogs</button>
      <Footer/>
    </div>
  );
};

export default Home;
