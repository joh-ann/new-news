import NewNews from '../NewNews/NewNews';
import nhBg from '../../images/nh-bg.png';

function AllNewNews({ data }) {

  const newsList = data.map((article, index) => (
      <NewNews
        author={article.author}
        title={article.title}
        description={article.description}
        publishedAt={article.publishedAt}
        urlToImage={article.urlToImage}
        index={index}
        key={index}
      />
  ));

  return (
    <>
      <div className='news-list flex flex-col items-center gap-5 p-3 bg-repeat' style={{ backgroundImage: `url(${nhBg})` }}>
        { newsList }
      </div>
    </>
  )
}

export default AllNewNews;