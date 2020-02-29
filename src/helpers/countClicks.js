import axios from 'axios'

var count = 7
function getHREF(e) {
  e.preventDefault()

  count--
  document.getElementsByTagName("a")?   axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById(e.target.id).innerText}`, {
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
  }) : console.log('thats not a link')
}

function countClicks() {
  document.getElementById('wiki').onclick(getHREF);
  console.log(count)
  document.getElementById('counter').innerHTML = `Moves left: ${count}`
  if(count<=0) {
    alert('You failed! Try again?')
    document.getElementById('wiki').innerHTML=''
  }

}

export default countClicks;