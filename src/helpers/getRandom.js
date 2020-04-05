import axios from 'axios'

class getRandom {
  handleClick(props) {
  // console.log(this.state)
    axios.all([
      axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
      params: {
        // action: '',
        datatype: 'jsonp',
        origin: '*'
      }
    }),
    axios.get("https://en.wikipedia.org//w/api.php?action=query&format=json&prop=mapdata%7Cpageviews&list=random&meta=&rnnamespace=0", {
      params: {
        // action: '',
        datatype: 'jsonp',
        origin: '*'
      }
    })
    ])
    .then(axios.spread((firstCall, secondCall) => {
      var start = firstCall.data.query.random[0].title
      // document.getElementById('origin').innerHTML = start
      // path.push(start)
      var end = secondCall.data.query.random[0].title
      props.start = start
      props.end = end
      props.count = 0
      // path.push(end)
      // document.getElementById('end').innerHTML = end
    })
      )
    }
  }
    export default getRandom