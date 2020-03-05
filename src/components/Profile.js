import React, {Component} from 'react'
import axios from 'axios'
import countClicks from '../helpers/countClicks'
import getLinks from '../helpers/getLinks'
class Profile extends React.Component {
  state = {
    page: null,
    linker: []
  }
  componentDidMount () {
    const { handle } = this.props.match.params

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
          .then(this.setState({linker: arr}))
        .then(document.getElementById('damn').innerHTML=this.state.linker.map(links =>  <li>{links.arr}</li>))
        // .then(res => window.location =`localhost:3001/${arr[0]}`)
        .catch(function(error){console.log(error);});
        console.log(this.state)
        // countClicks()
        return arr



    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${handle}`,{
    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('pages').innerText}`,{
    //   method: 'GET',
    //   mode: 'no-cors',
    //   // origin: '*',
    //   type: 'jsonp',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   }
    // })
    //   .then((page) => {
    //     this.setState(() => ({ page }))
    //   })
    //   .then(response => response)
    //   .then(data => {
    //     const resData = Object.values(data.data.parse.text);
    //     console.log(resData);


    //     document.getElementById('wiki').innerHTML = resData;
    //   })
    }



  render() {
    return (
      // <div onClick={countClicks}>
      <div>
      <ul>

      </ul>
      </div>
    )
  }
}

export default Profile