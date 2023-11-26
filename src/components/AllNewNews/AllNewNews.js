import NewNews from '../NewNews/NewNews';
import nhBg from '../../images/nh-bg.png';
import { useState } from 'react';

function AllNewNews({ data, formatDate }) {
  const [sortOption, setSortOption] = useState('');

  const sortedData = sortOption === 'New to Old'
    ? [...data].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    : sortOption === 'Old to New'
    ? [...data].sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
    : data;

  const newsList = sortedData.map((article, index) => (
      <NewNews
        author={article.author}
        title={article.title}
        description={article.description}
        publishedAt={formatDate(article.publishedAt)}
        urlToImage={article.urlToImage}
        index={index}
        key={index}
      />
  ));


  return (
    <>
      <div className='news-list flex flex-col items-center gap-5 p-3 bg-repeat' style={{ backgroundImage: `url(${nhBg})` }}>
        <div className='sort flex self-end w-1/6'>
          <label className='label mr-1 p-1 font-semibold'>Sort By:</label>
          <select className='rounded-xl pl-1 pr-1' onChange={(event) => setSortOption(event.target.value)}>
            <option hidden></option>
            <option>New to Old</option>
            <option>Old to New</option>
          </select>
        </div>
        { newsList }
      </div>
    </>
  )
}

export default AllNewNews;