const apiKey = process.env.REACT_APP_NEWS_API_KEY;

const handleErrors = (res) => {
  if (!res.ok) {
    switch(res.status) {
      case 404:
        throw new Error("Sorry, this page does not exist");
      case 500:
        throw new Error('Sorry, the server encountered an error and could not complete your request.');
      default:
        throw new Error('Oops! An error occured, please return home.');
    }
  }
  return res.json();
}

export function fetchSportsData() {
  console.log(apiKey)
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`)
  .then(handleErrors)
  .catch(error => console.error("Error in Network Request", error));
}
