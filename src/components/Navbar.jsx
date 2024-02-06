import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between py-3 px-5 bg-slate-700 top-0 w-full">
      <div className="text-m bg-blue-300"><a href="/">Blogs</a></div>
      <div className="bg-blue-300 flex gap-8">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Navbar;
