import Header from '../Header/Header';
import AllNewNews from '../AllNewNews/AllNewNews';
import { useState, useEffect } from 'react';
import { fetchSportsData } from '../../apiCalls';
import mockData from '../../mockData';
import NewNewsDetails from '../NewNewsDetails/NewNewsDetails';
import { Route, Routes } from 'react-router-dom';
import NewHeights from '../NewHeights/NewHeights';

function App() {
  const [data, setData] = useState(mockData);
  console.log(data)

  useEffect(() => {
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AllNewNews data={data}/>}/>
        <Route path='/news/:index' element={<NewNewsDetails data={data}/>}/>
      </Routes>
    </>
  )
}

export default App;
