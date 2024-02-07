import React from 'react';

const Home = () => {
  return (<>
   <div className="text-center bg-[url('https://i.pinimg.com/originals/84/da/da/84dada0a5dcfd790700df3dd87897aef.gif')] bg-cover bg-center bg-no-repeat py-20 -mt-28 flex-grow flex justify-center align-center flex-col text-pink-50">
      <h1 className='text-xl mb-3'>Welcome to <span className='italic'>VieW</span></h1>
      <p className='mb-3'>Discover amazing content and more...</p>
      <div>
      <button onClick={() => window.location.href = '/blogs'} className='button py-4 px-8 m-auto border-2 ease-in duration-100 border-gray-300 rounded-xl hover:border-2 hover:border-amber-600 hover:scale-110 hover:shadow-violet-500 hover:shadow-md'>Explore Blogs</button>
      </div>
    </div>
      </>
  );
};

export default Home;
