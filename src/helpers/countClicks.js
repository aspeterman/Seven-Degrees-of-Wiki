import axios from 'axios'



var count = 7


function countClicks(e) {
  count--
  // var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
  var apiEndpoint = "https://en.wikipedia.org/w/api.php"
  var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;

  axios.get(apiEndpoint + "?" + params + "&origin=*")

      .then(response => response)
      .then(data => {
        const resData = Object.values(data.data.parse.text);
        console.log(resData)


        document.getElementById('damn').innerHTML = resData;
        // ShowTheLocationWithRouter()
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