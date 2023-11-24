function NewNews({ author, title, description, publishedAt, urlToImage }) {
  return (
    <>
      <div className='new-news-card'>
        <img className='' src={urlToImage}/>
        <h2>{author}</h2>
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h2>{publishedAt}</h2>
      </div>
    </>
  )
}

export default NewNews;