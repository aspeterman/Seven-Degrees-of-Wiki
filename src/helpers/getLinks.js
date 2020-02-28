const axios = require('axios')
const uri = "https://www.wikipedia.com/w/api.php?action=query&format=json&generator=alllinks&galfrom="
const getLinks = function() {
  axios.get(`${uri} + bob`).then(result=>console.log(result.data.query.pages)).catch(err=>console.error(err))
}

export default getLinks