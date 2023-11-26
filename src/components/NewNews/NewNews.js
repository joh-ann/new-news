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
        <img className='w-5/12 rounded-sm h-auto mr-5' src={urlToImage}/>
        <div className='new-news-card-info flex-col'>
          <h2 className='text-xl font-bold text-center p-2'>{title}</h2>
          <h2 className='flex justify-end text-sm font-bold mr-5 mb-5'>{publishedAt} - {author}</h2>
          <h2 className='flex pl-10 pr-10 justify-center items mb-4'>{description}</h2>
            <p className='flex justify-end mr-2'>
              <Link to={`/news/${index}`} 
                className='flex items-center' 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                Read more
              <img 
              className='w-10 h-12' 
              src={kelceImage} 
              alt="Kelce"/>
              </Link>
            </p>
        </div>
      </div>
    </>
  )
}

export default NewNews;