import Header from '../Header/Header';
import AllNewNews from '../AllNewNews/AllNewNews';
import { useState, useEffect } from 'react';
import { fetchSportsData } from '../../apiCalls';
import mockData from '../../mockData';

function App() {
  const [data, setData] = useState(mockData);
  console.log(data)

  useEffect(() => {
  }, []);

  return (
    <>
      <Header />
      <AllNewNews />
    </>
  )
}

export default App;
