// import React from 'react'
// class Profile extends React.Component {
//   state = {
//     page: null,
//     links: []
//   }
//   componentDidMount () {
//     const { handle } = this.props.location.pathname
//     // const { handle } = this.props.match.params
//     console.log(this.props)
//     var url = "https://en.wikipedia.org/w/api.php";

//     var params = {
//         action: "query",
//         format: "json",
//         titles: handle,
//         prop: "links"
//     };


//     url = url + "?origin=*";
//     Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
//     var arr = []
//     fetch(url)
//         .then(function(response){return response.json();})
//         .then(function(response) {
//             var pages = response.query.pages;
//             for (var p in pages) {
//                 for (var l of pages[p].links) {
//                     console.log(l.title);
//                     this.state.titles.push(l.title)
//                 }
//             }
//             return arr

//           })
//           .then(this.setState({links: this.state.titles}))

//     }

//     render() {
//       return(
//         this.state.links.map(links =>  {
//           return(

//             <ul>

//           <button>{links.links}</button>
//             </ul>
//           )
//         }
//         )
//   )
// }

// }

// export default Profile
import React, {Component} from 'react'
import axios from 'axios'
// class Profile extends React.Component{
  // state = {
  //   page: null,
  //   linker: []
  // }
  // return (
    // const { handle } = this.props.match.params

    // var url = "https://en.wikipedia.org/w/api.php"

    // var params = {
    //     action: "query",
    //     format: "json",
    //     titles: 'wikipedia',
    //     prop: "links"

    // };

    // url = url + `?origin=${params.titles}`
    // Object.keys(params).forEach(url);
    // Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    const profile = () => {
      var arr=[]
      var url = "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=links&titles=White%20House"
    // return(
    axios.get(url, {
            params: {
        // datatype: 'jsonp',
        origin: '*',
        headers: {"Access-Control-Allow-Origin": "*"}
    }})
        .then(res=>res)
        .then(res=>res)
        .then(res =>{
          for(var i = 0; i < 10; i++){
            // document.getElementById('damn').innerHTML +=Object.values(res.data.query.pages)[0].links[i].title
            arr.push(Object.values(res.data.query.pages)[0].links[i].title)
        }
        console.log(arr)
        })
        // .then(res => console.log(Object.values(res.data.query.pages)[0].links[0].title))

//         .then(res=>{
//           for(var i in res){
//                               return(
// <div key={i}>{i}</div>
//                     // <div id="iwlinks">{i.data.parse.links}</div>
//                   )
//           }
//         })
            // var pages = response.parse.links.map(res => res[2]);
            // for (var p in pages) {
            //     // for (var l of Object.keys(pages[p].links)) {
            //       console.log(p)
            //       return(

            //         <div>{p}</div>
            //       )

                    // console.log(l.title);
                    // arr.push(l.title)
                // }
          //   }
          //   // return arr

          // })
          // .then(this.setState({linker: arr}))
        // .then(document.getElementById('damn').innerHTML=this.state.linker.map(links =>  <li>{links.links}</li>))
        // .then(res => window.location =`localhost:3001/${arr[0]}`)
        .catch(function(error){console.log(error);})
        // console.log(this.state)
        // return arr


    }



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




  // render() {
  //   return(<div></div>)
//     for (var p in pages) {
//       for (var l of pages[p].links) {
//     return (
//       <div >
//       <ul>
//       {            document.getElementById('damn').innerHTML+=<li>{l.title}</li>
//                     // console.log(l.title);
//                     // arr.push(l.title)
//                 }

//       </ul>
//       </div>

//     )
//   }
// }
// }
export default profile
