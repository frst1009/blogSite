import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className={location.pathname === "/" ? "px-24 z-10 animate-highlight top-0 w-full" : "px-24 z-10 top-0 w-full bg-amber-600/80 text-white"}>
      <div className='flex justify-between '>
        <div className="text-md rounded-lg border-2 my-3 font-bold"><a href="/" className='p-1'>VieW</a></div>
      <div className="flex gap-1">
       <div className='button font-bold transition ease-in duration-700 hover:border-b-4 hover:border-purple-400 p-3 hover:bg-indigo-800/50'><a href="/">Home</a></div> 
       <div className='button font-bold transition ease-in duration-700 hover:border-b-4 hover:border-purple-400 p-3 hover:bg-indigo-800/50'><a href="/about" >About</a></div> 
       {location.pathname=== "/content" ?  <div className='button font-bold transition ease-in duration-700 hover:border-b-4 hover:border-purple-400 p-3 hover:bg-indigo-800/50'><a href="/blogs" >Blogs</a></div> : ""}
      </div></div>
      
    </div>
  );
};

export default Navbar;
