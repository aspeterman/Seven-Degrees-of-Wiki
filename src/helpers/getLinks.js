// const axios = require('axios')
// var $ = require('jquery')
// // const uri = "https://www.wikipedia.com/w/api.php?action=query&format=json&generator=alllinks&galfrom="
// // const getLinks = function() {
// //   axios.get(`${uri} + ${document.getElementById('start').innerText}`).then(result=>console.log(result.data.query.pages)).catch(err=>console.error(err))
// // }
// function getLinks(inputId) {
//   axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=hello`, {
//   // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementsByTagName('a').innerText}`, {
//     params: {
//       datatype: 'jsonp',
//       // origin: '*'
//     }
//   })
//   .then(response => response)
//   .then(data => {
//     const resData = Object.values(data.data.parse.links);
//     const links = resData[0].value
//     console.log(links);
//     // document.getElementById('wiki').innerHTML = resData;
//   })
// }


// // getLinks()
// // export default getLinks

const getLinks = () => {

var url = "https://en.wikipedia.org/w/api.php";

var params = {
    action: "query",
    format: "json",
    titles: null,
    prop: "links"

};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
var arr = []
fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        for (var p in pages) {
            for (var l of pages[p].links) {
                console.log(l.title);
                arr.push(l.title)
            }
        }
        return arr
    })
    // .then(document.getElementById('damn').innerHTML=arr.map(ed =>  <li>{ed}</li>))
    // .then(res => window.location =`localhost:3001/${arr[0]}`)
    .catch(function(error){console.log(error);});
    console.log(arr)
    return arr

  }
export default getLinks