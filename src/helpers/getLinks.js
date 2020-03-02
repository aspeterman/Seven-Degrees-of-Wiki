const axios = require('axios')
var $ = require('jquery')
// const uri = "https://www.wikipedia.com/w/api.php?action=query&format=json&generator=alllinks&galfrom="
// const getLinks = function() {
//   axios.get(`${uri} + ${document.getElementById('start').innerText}`).then(result=>console.log(result.data.query.pages)).catch(err=>console.error(err))
// }
function getLinks(inputId) {
  axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=hello`, {
  // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementsByTagName('a').innerText}`, {
    params: {
      datatype: 'jsonp',
      // origin: '*'
    }
  })
  .then(response => response)
  .then(data => {
    const resData = Object.values(data.data.parse.links);
    const links = resData[0].value
    console.log(links);
    // document.getElementById('wiki').innerHTML = resData;
  })
}


// getLinks()
// export default getLinks
