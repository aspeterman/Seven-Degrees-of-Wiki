const axios = require('axios')
// const uri = "https://www.wikipedia.com/w/api.php?action=query&format=json&generator=alllinks&galfrom="
// const getLinks = function() {
//   axios.get(`${uri} + ${document.getElementById('start').innerText}`).then(result=>console.log(result.data.query.pages)).catch(err=>console.error(err))
// }
function getLinks(e) {
  axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById(e.target.id).innerText}`, {
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
}


export default getLinks