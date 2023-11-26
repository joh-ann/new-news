const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export function fetchSportsData() {
  console.log(apiKey)
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch data. Please try again later.');
    }
    return response.json();
  })
  .catch((error) => {
    console.error('Error in Network Request', error);
    throw new Error('Failed to fetch data. Please try again later.');
  })
}
