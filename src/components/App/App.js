import Header from '../Header/Header';
import AllNewNews from '../AllNewNews/AllNewNews';
import { useState, useEffect } from 'react';
import { fetchSportsData } from '../../apiCalls';

function App() {

  useEffect(() => {
    fetchSportsData()
    .then(data => console.log(data))
  }, []);

  return (
    <>
      <Header />
      <AllNewNews />
    </>
  )
}

export default App;
