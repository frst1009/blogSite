import React from 'react';

const Navbar = () => {
  return (
    <div className="py-3 px-8 z-10 animate-highlight top-0 w-full">
      <div className='container flex justify-between'><div className="text-m "><a href="/">VieW</a></div>
      <div className="flex gap-8">
        <a href="/" className='button'>Home</a>
        <a href="/about" className='button'>About</a>
      </div></div>
      
    </div>
  );
};

export default Navbar;
