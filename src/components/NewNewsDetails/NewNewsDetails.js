import { useParams, useNavigate } from 'react-router-dom';
import nhBg from '../../images/nh-bg.png';

function NewNewsDetails({ data }) {
  const { index } = useParams();
  let navigate = useNavigate();
  const newsDetails = data[parseInt(index, 10)];

  if (!newsDetails) {
    return <p>News details not found!</p>;
  }

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col items-center bg-repeat' style={{ backgroundImage: `url(${nhBg})`, minHeight: `100vh`, height: `auto` }}>
      <div className='new-news-details relative w-7/12 pt-10'>
        <img className='w-full h-auto' src={newsDetails.urlToImage} alt="News Image" />
        <div className='absolute bottom-0 left-0 right-0 w-full'>
          <h2 className='text-3xl font-bold text-center text-white bg-black bg-opacity-50 p-5'>{newsDetails.title}</h2>
        </div>
      </div>
      <div className='new-news-details-info w-7/12 pb-5'>
        <p className='flex justify-end text-md'>{newsDetails.author}, {newsDetails.source.name}</p>
        <p className='text-lg mt-5'>{newsDetails.content}</p>
        <div className='new-news-details-footer flex justify-between mt-5'>
          <button onClick={handleGoBack} className='flex gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
          </svg>
            Go Back
          </button>
          <a href={newsDetails.url} className='flex gap-1' target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
            Read more on the original site
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewNewsDetails;