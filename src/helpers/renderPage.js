import axios from 'axios'
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import getLinks from './getLinks'

  const renderStartingPage = (props) => {
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     article : '',
    //     url: ''
    //   };
    // }
    function getParams(page) {
      const searchParams = document.getElementById('pages')
      // const searchParams = document.getElementById('pages')
      return {
        page: searchParams || '',
      };
    }
    const { page } = props;
    const { query } = getParams(page);

    var apiEndpoint = "https://commons.wikimedia.org/w/api.php";
var params = `action=parse&format=json&page=${document.getElementById('pages').innerText}` ||`action=parse&format=json&page=Wikipedia`;

/**
 * Send the request to get the images
 */
axios.get(apiEndpoint + "?" + params + "&origin=*")
    // .then(function(response){return response.json();})
    // .then(function(response) {
    //       var allimages = response.query.allimages; // Process the output to get the image names
    //       Object.keys(allimages).forEach(function(key) {
    //            console.log(allimages[key].name);
    //       });
    .then(response => response)
    .then(data => {
      const resData = Object.values(data.data.parse.text);

      console.log(resData)


      document.getElementById('wiki').innerHTML = resData;
      // getLinks()
      // ShowTheLocationWithRouter()
    })

    // if(!document.getElementById('origin').textContent) alert('generate data first')
    // else {

// var rand = Math.floor(Math.random(arr.length))

    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=wikipedia`, {
    // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('origin').innerText}`, {
    // // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&title=${query}`, {
    //   params: {
    //     datatype: 'jsonp',
    //     // origin: '*',
    //     headers: {"Access-Control-Allow-Origin": "*"}
    //   }
    // })
    // .then(response => response)
    // .then(data => {
    //   const resData = Object.values(data.data.parse.text);
    //   console.log(resData);


    //   document.getElementById('wiki').innerHTML = resData;
    //   // ShowTheLocationWithRouter()
    // })
    // .then(getLinks)
  // }
}
export default renderStartingPage