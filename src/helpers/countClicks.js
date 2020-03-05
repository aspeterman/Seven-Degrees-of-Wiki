import axios from 'axios'
import renderStartingPage from './renderPage';
import React from 'react'


var count = 7


function countClicks(e) {
  count--
  var arr = []
  var result = []
  // var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
  var apiEndpoint = "https://en.wikipedia.org/w/api.php"
  var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;

  axios.get(apiEndpoint + "?" + params + "&origin=*")
// axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=links&list=alllinks%7Cquerypage&plnamespace=0&qppage=DisambiguationPages&page=wiki')
      .then(response => response)
      .then(data => {
        const resData = Object.values(data.data.parse.text);
        // console.log(resData)
        //  data.data.parse.links.map(x=> arr.push(Object.values(x)))
        //  console.log(arr)
        //  result.push(arr.map(y=>y[2]))
        //  console.log(result)
          // console.log(Object.values(x)))


        document.getElementById('wiki').innerHTML = resData;
        // ShowTheLocationWithRouter()
        // renderStartingPage()
      })

  console.log(count)
  // document.getElementById('counter').innerHTML = `Moves left: ${count}`

  if(count<=0) {
    alert('You failed! Try again?')
    // document.getElementById('wiki').innerHTML=''
    count=7
  }

}

export default countClicks;