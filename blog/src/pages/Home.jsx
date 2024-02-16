import React from "react";

function Home() {
  
  return (
    <>
      <div className="text-center bg-[url(./assets/2.gif)] bg-cover bg-center bg-no-repeat -mt-20 flex-grow flex justify-center align-center flex-col text-pink-50 ">
        <h1 className="mb-3 text-2xl font-bold md:text-3xl">
          Welcome to <span className="italic">VieW</span>
        </h1>
        <p className="mb-3 text-lg font-medium md:text-xl">
          Discover amazing content and more...
        </p>
        <div>
          <button
            onClick={() => (window.location.href = "/blogs")}
            className="button text-sm py-3 px-6 m-auto border-2 ease-in duration-500 border-gray-300 rounded-xl hover:border-2 hover:bg-purple-900/50 hover:border-amber-600 hover:scale-110 hover:shadow-indigo-800/50 hover:shadow-md hover:font-bold md:py-4 md:px-8 md:text-base"
          >
            Explore Blogs
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
