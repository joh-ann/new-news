import Header from '../Header/Header';
import AllNewNews from '../AllNewNews/AllNewNews';
import { useState, useEffect } from 'react';
import { fetchSportsData } from '../../apiCalls';
import mockData from '../../mockData';
import NewNewsDetails from '../NewNewsDetails/NewNewsDetails';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  console.log(data)

  useEffect(() => {
    fetchSportsData()
    .then((data) => {
        const filteredData = data.articles.filter((article) => article.urlToImage);
        setData(filteredData);
    })
    .catch((error) => {
      console.error('Error in Network Request', error);
      setError(error.message);
    });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', timeZoneName: 'short' };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AllNewNews data={data} formatDate={formatDate}/>}/>
        <Route path='/news/:index' element={<NewNewsDetails data={data} formatDate={formatDate}/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App;
