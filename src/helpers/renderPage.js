// renderStartingPage = (e) => {
//   // this.setState({count: this.state.count - 1})
//   this.setState({count: this.count++, start: "", end: ""})

//   const article = this.props.location.pathname.slice(6)
//     axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${article}`, {
//       params: {
//         // datatype: 'jsonp',
//         origin: '*',
//         headers: {"Access-Control-Allow-Origin": "*"}
//       }
//     })
//     .then(response => response)
//     .then(data => {
//       const resData = Object.values(data.data.parse.text);
//       // console.log(resData )
//       // document.getElementById('article-head').innerHTML = resData
//       document.getElementById('content').innerHTML =  resData;
//     }).catch(err => new TypeError(err))
//   }
