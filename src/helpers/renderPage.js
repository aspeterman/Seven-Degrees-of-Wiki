import axios from 'axios'

const renderStartingPage = () => {
  if(!document.getElementById('origin').textContent) alert('generate data first')
  else {
  axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('origin').innerText}`, {
  // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&title=hello&text=%7B%7BProject%3ASandbox%7D%7D&prop=text&contentmodel=wikitext`, {
    params: {
      datatype: 'jsonp',
      origin: '*'
    }
  })
  .then(response => response)
  .then(data => {
    const resData = Object.values(data.data.parse.text);
    console.log(resData);
    document.getElementById('wiki').innerHTML = resData;
  })
}}

export default renderStartingPage