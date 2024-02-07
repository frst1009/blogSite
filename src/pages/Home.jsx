import React from "react";

const Home = () => {
  return (
    <>
      <div className="text-center bg-[url(./assets/2.gif)] bg-cover bg-center bg-no-repeat py-20 -mt-28 -mb-8 flex-grow flex justify-center align-center flex-col text-pink-50">
        <h1 className="mb-3 text-4xl font-bold">
          Welcome to <span className="italic">VieW</span>
        </h1>
        <p className="mb-3 font-medium text-2xl">
          Discover amazing content and more...
        </p>
        <div>
          <button
            onClick={() => (window.location.href = "/blogs")}
            className="button py-4 px-8 m-auto border-2 ease-in duration-100 border-gray-300 rounded-xl hover:border-2 hover:bg-purple-900/50 hover:border-amber-600 hover:scale-110 hover:shadow-indigo-800/50 hover:shadow-md hover:font-bold"
          >
            Explore Blogs
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
