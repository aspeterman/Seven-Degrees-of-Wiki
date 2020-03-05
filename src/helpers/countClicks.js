import axios from 'axios'
import renderStartingPage from './renderPage';
import React from 'react'


var count = 7


function countClicks(start) {
  count--
//   var arr = []
//   var result = []
//   // var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
//   var apiEndpoint = "https://en.wikipedia.org/w/api.php"
//   var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;

//   axios.get(apiEndpoint + "?" + params + "&origin=*")
// // axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&list=alllinks%7Cquerypage&plnamespace=0&qppage=DisambiguationPages&page=wiki')
//       .then(response => response)
//       .then(data => {
//         const resData = Object.values(data.data.parse.text);

// props = {{match}}
//         document.getElementById('wiki').innerHTML = resData;

//       })

  console.log(count)
  // document.getElementById('counter').innerHTML = `Moves left: ${count}`

  if(count<=0) {
    alert('You failed! Try again?')
    // document.getElementById('wiki').innerHTML=''
    count=7
  }

}

export default countClicks;