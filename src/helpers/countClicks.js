var count = 7
function countClicks() {
  document.getElementById('wiki').onclick(count--);
  console.log(count)
  document.getElementById('counter').innerHTML = `Moves left: ${count}`
  if(count<=0) {
    alert('You failed! Try again?')
    document.getElementById('wiki').innerHTML=''
  }
}

export default countClicks;