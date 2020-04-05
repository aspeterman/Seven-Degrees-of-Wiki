import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import countClicks from '../helpers/countClicks'
class Profile extends React.Component {
  state = {
    page: null,
    links: []
  }
  componentDidMount () {
    const { handle } = this.props.match.params
    console.log(this.props)
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        format: "json",
        titles: handle,
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
                  document.getElementById('wiki').innerHTML+=l.title
                    console.log(l.title);
                    arr.push(l.title)
                }
            }
            return arr

          })
          .then(this.setState({links: arr}))
        // .then(document.getElementById('content').HTML+=this.state.links.map(links =>  {
        //   return(
        //     <ul>

        //   {/* <li>{links.arr}</li> */}
        //     </ul>
        //   )
        // }
        // ))

        // .then(document.getElementById('content').HTML+=this.state.links.map(links =>  <li>{links.arr}</li>))
        // .then(res => window.location =`localhost:3001/${arr[0]}`)
        // const article = this.props.match.url.slice(1)
        // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${handle}`, {
        //   params: {
        //     // datatype: 'jsonp',
        //     origin: '*',
        //     headers: {"Access-Control-Allow-Origin": "*"}
        //   }
        // })
        // .then(response => response)
        // .then(data => {
        //   console.log(this.props)
        //   const resData = Object.values(data.data.parse.text);
        //   // document.getElementById('article-head').innerHTML = resData
        //   document.getElementById('content').innerHTML =  resData;
        // }).catch(err => console.log(err))
        // .catch(function(error){console.log(error);});
        // // console.log(this.state)
        // countClicks()



    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${handle}`,{
    // // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('pages').innerText}`,{
    //   method: 'GET',
    //   // mode: 'no-cors',
    //   origin: '*',
    //   type: 'jsonp',
    //   headers: {"Access-Control-Allow-Origin": "*"}

    // })
    //   .then((page) => {
    //     this.setState(() => ({ page }))
    //   })
    //   .then(response => response)
    //   .then(data => {
    //     const resData = Object.values(data.data.parse.text);
    //     console.log(resData);


    //     document.getElementById('content').innerHTML = resData;
    //   })

    }

    render() {
      return(
        this.state.links.map(links =>  {
          return(

            <ul>

          <input>{links.arr}</input>
            </ul>
          )
        }
        )
  )
}

}

export default Profile