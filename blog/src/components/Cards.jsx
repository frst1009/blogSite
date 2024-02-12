import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
function Cards() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
            const data = response.data;
            setArticles(data);
          } catch (error) {
            console.error(error);
          }  setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
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
    
      if (isLoading) {
        return <Loading/>;
      }

  return (
    <div className='grid grid-cols-3 gap-10 my-12 mx-24'>
      {articles.map((article)=>(  <Link to={`/content`}>
        <div key={article.id} className=' text-gray-200 rounded-xl bg-[#e19238]/4 hover:scale-110 duration-500 hover:shadow-sm hover:shadow-purple-900 relative'>
          <img src="https://www.w3schools.com/howto/img_5terre.jpg" alt="" className='w-full h-52 rounded-t-lg overflow-hidden bg-cover' />
        <div className=' h-16 px-2 py-1 flex justify-between'>
          <div className='font-chakra'><span className="flex flex-row font-semibold text-sm uppercase"> {article.title.length > 10
                            ? article.title.substring(0, 20)
                            : article.title}</span>
        <span className="flex flex-row text-xs italic">{article.title.length > 10
                            ? article.title.substring(0, 20)
                            : article.title}</span></div>
                            <div className="text-xs italic font-chakra absolute bottom-1 flex">
                              <span className='underline decoration-sky-500'>
                                Created by: Dr.Strange
                                {/* {article.title.length > 5
                            ? article.title.substring(0, 5)
                            : article.title} */}
                            </span> <span className=' ml-20'>Date: 11.02.2024</span> </div>
                            </div></div></Link>
      ))}
       </div>
  )
}

export default Cards