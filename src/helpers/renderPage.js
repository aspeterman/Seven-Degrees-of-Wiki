import axios from 'axios'
// import React from "react";
// import PropTypes from "prop-types";
// import { withRouter } from "react-router";
// import getRandom from './getRandom'
import countClicks from './countClicks'

//   const renderStartingPage = () => {

//     // function getParams(page) {
// //       const searchParams = document.getElementById('pages')
// //       // const searchParams = document.getElementById('pages')
// //       return {
// //         page: searchParams || '',
// //       };
// //     }
// //     // const { page } = props;
// //     // const { query } = getParams(page);
// //     var arr=[]
// //     var apiEndpoint = "https://wikimedia.org/w/api.php";

// //         var params = `action=parse&format=json&page=${document.getElementById('origin').innerText}`;
// // // var params = `action=parse&format=json&page=${document.getElementById('pages').innerText}` ||`action=parse&format=json&page=Wikipedia`;

// // /**
// //  * Send the request to get the images
// //  */
// // axios.get(apiEndpoint + "?" + params + "&origin=*")

// //     .then(response => response)
// //     .then(data => {
// //       const resData = Object.values(data.data.parse.text);
// // console.log(resData)



// //       document.getElementById('wiki').innerHTML = resData;
// //       document.getElementById('wiki').onClick=(console.log(data.data));
// //       // getLinks()
// //       // ShowTheLocationWithRouter()
// //     })

//     // if(!document.getElementById('origin').textContent) alert('generate data first')
//     // else {

// // var rand = Math.floor(Math.random(arr.length))

//     // axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=wikipedia`, {

//       // buildArticleURL = function(article) {

//       //   // return "https://" + this.hostname + "/wiki/" + encodeURIComponent(article.replace(/ /g, "_"));

//       // }



//     axios.get(`https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${document.getElementById('origin').innerText}`, {
//       params: {
//         datatype: 'jsonp',
//         origin: '*',
//         headers: {"Access-Control-Allow-Origin": "*"}
//       }
//     })
//     .then(response => response)
//     .then(data => {
//       const resData = Object.values(data.data.parse.text);


//       document.getElementById('wiki').innerHTML = resData;
//       // ShowTheLocationWithRouter()
//     })
//     countClicks()
//   }
import cheerio from 'cheerio'

async function renderStartingPage(language, slug) {
  const url = `https://${language}.wikipedia.org/w/api.php?action=parse&format=json&redirects=true&prop=text&page=${encodeURIComponent(
    slug
  )}`;
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Failed to fetch page "${slug}": ${response.statusCode}`);
  const page = (await response.json()).parse;
  if (!page) throw new Error(`Page not found: "${slug}"`);
  return {
    slug,
    title: page.title,
    id: page.pageid,
    content: page.text["*"]
  };
}
function getFirstLink(content) {
  const $ = cheerio.load(content);
  const links = $("p a")
    .map((_, el) => $(el).attr("href"))
    .toArray()
    .filter(href => href.startsWith("/wiki") && href.indexOf(":") < 0);
  return links.length && decodeURI(links[0].replace(/^\/wiki\//, ""));
}

async function createPageChain(language, start) {
  const pages = [];
  let nextPage = start;

  while (true) {
    console.log(nextPage);
    pages.push(nextPage);
    const page = await renderStartingPage(language, nextPage);
    const firstLink = getFirstLink(page.content);
    if (!firstLink || pages.indexOf(firstLink) >= 0) return pages;
    nextPage = firstLink;
  }
}


export default renderStartingPage