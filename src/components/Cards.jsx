import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Cards() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
            const data = response.data;
            setArticles(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchArticles();
      }, []);
      // useEffect(() => {
      //   axios.get('http://localhost:3000/api/book')
      //     .then(res => {
      //       setBooks(res.data);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // }, []);
    
    

  return (
    <div className='grid grid-cols-3 gap-10 my-12 mx-24 '>
      {articles.map((article)=>( 
        <div key={article.id} className=' text-gray-200 rounded-xl bg-[#e19238]/4 hover:scale-110 duration-500 hover:border-2 hover:border-purple-400 hover:shadow-md hover:shadow-gray-700'>
          <img src={article.url} alt="" className='w-full h-56 rounded-t-lg' />
        <div className='h-12 px-3 py-1'>
          <span className="flex flex-row text-md uppercase"> {article.title.length > 10
                            ? article.title.substring(0, 20)
                            : article.title}</span>
        <span className="flex flex-row text-xs">{article.title.length > 10
                            ? article.title.substring(0, 20)
                            : article.title}</span></div></div>
      ))}
       </div>
  )
}

export default Cards