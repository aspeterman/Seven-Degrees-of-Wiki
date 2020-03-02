import axios from 'axios'
import PropTypes from "prop-types";


var count = 7
function getHREF(e, inputId) {

  count--
  document.getElementsByTagName("a")?
  axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById(e.target.innerHTML)}`, {
    params: {
      datatype: 'jsonp',
      origin: '*'
    }
  })
  .then(response => response)
  .then(data => {
    const resData = Object.values(data.data.parse.text);
    // console.log(resData);
    document.getElementById('wiki').innerHTML = resData;
  })
  : console.log('thats not a link');

    alert(inputId);

}

function countClicks(inputId) {
  count--
  // document.getElementById('wiki').onclick(getHREF());
  console.log(count)
  document.getElementById('counter').innerHTML = `Moves left: ${count}`
  if(count<=0) {
    alert('You failed! Try again?')
    document.getElementById('wiki').innerHTML=''
    count=7
  }
  // getHREF()

  // console.log(window.location.href)
  console.log(PropTypes.location)
}

export default countClicks;