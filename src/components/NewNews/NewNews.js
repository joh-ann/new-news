import jKelce from '../../images/nh-62.png';
import tKelce from '../../images/nh-87.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NewNews({ author, title, description, publishedAt, urlToImage, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const kelceImage = isHovered ? jKelce : tKelce;

  return (
    <>
      <div className='new-news-card flex p-3 bg-white rounded-md max-w-5xl'>
        <img className='w-5/12 rounded-md object-cover h-auto mr-5 max-h-80' src={urlToImage}/>
        <div className='new-news-card-info flex-col'>
          <Link to={`/news/${index}`} 
            className='flex text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-center p-2 text-green-900'>{title}
          </Link>
          <h2 className='flex justify-end text-sm sm:text-base md:text-md lg:text-lg font-semibold mr-5 mb-5'>{publishedAt} - {author}</h2>
          <h2 className='flex pl-10 pr-10 justify-center items text-sm sm:text-base md:text-lg lg:text-xl'>{description}</h2>
            <div className='flex justify-end mr-2 text-sm sm:text-base md:text-md lg:text-lg mt-2'>
              <Link to={`/news/${index}`} 
                className='flex items-center text-white bg-green-900 p-2 rounded-xl gap-1' 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                Read more
              <img 
              className='w-7 h-8' 
              src={kelceImage} 
              alt="Kelce"/>
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default NewNews;