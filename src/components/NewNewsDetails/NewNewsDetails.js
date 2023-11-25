import { useParams } from 'react-router-dom';
import nhBg from '../../images/nh-bg.png';

function NewNewsDetails({ data }) {
  const { index } = useParams();
  const newsDetails = data[parseInt(index, 10)];

  if (!newsDetails) {
    return <p>News details not found!</p>;
  }

  return (
    <div className='flex flex-col items-center bg-repeat' style={{ backgroundImage: `url(${nhBg})`, height: `100vh` }}>
      <div className='new-news-details relative w-7/12 pt-10'>
        <img className='w-full h-auto' src={newsDetails.urlToImage} alt="News Image" />
        <div className='absolute bottom-0 left-0 right-0 w-full'>
          <h2 className='text-3xl font-bold text-center text-white bg-black bg-opacity-50 p-5'>{newsDetails.title}</h2>
        </div>
      </div>
      <div className='new-news-details-info w-7/12'>
        <p className='flex justify-end text-md'>{newsDetails.author}, {newsDetails.source.name}</p>
        <p className='text-lg mt-5'>{newsDetails.content}</p>
        <a className='flex justify-end mt-5' href={newsDetails.url} target="_blank" rel="noopener noreferrer">Read more on the original site</a>
      </div>
    </div>
  );
}

export default NewNewsDetails;