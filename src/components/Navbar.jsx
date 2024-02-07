import React from 'react';

const Navbar = () => {
  return (
    <div className="px-28 z-10 animate-highlight top-0 w-full">
      <div className='flex justify-between '>
        <div className="text-md rounded-lg border-2 my-3 font-bold"><a href="/" className='p-1'>VieW</a></div>
      <div className="flex gap-1">
       <div className='button font-bold transition ease-in duration-700 hover:border-b-4 hover:border-purple-400 p-3 hover:bg-indigo-800/50'><a href="/">Home</a></div> 
       <div className='button font-bold transition ease-in duration-700 hover:border-b-4 hover:border-purple-400 p-3 hover:bg-indigo-800/50'><a href="/about" >About</a></div> 
      </div></div>
      
    </div>
  );
};

export default Navbar;
