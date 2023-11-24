import NewNews from '../NewNews/NewNews';

function AllNewNews({ data }) {

  const newsList = data.map((article, index) => (
      <NewNews
        author={article.author}
        title={article.title}
        description={article.description}
        publishedAt={article.publishedAt}
        urlToImage={article.urlToImage}
        key={index}
      />
  ));

  return (
    <>
      <div className='news-list grid grid-cols-4 m-10 gap-5'>
        { newsList }
      </div>
    </>
  )
}

export default AllNewNews;