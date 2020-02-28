var axios = require('axios')
var rp= require('request-promise');
var options={
    methode: 'GET',
    uri:'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Africa/daily/2017042700/2018051700',
    json:true
};
const getWikis = () => {
  rp(options)
      .then(function(parseBody){
      var data=[];
      for(var i=0 ;i<parseBody.items.length;i++){
          data.push([parseBody.items[i].timestamp,parseBody.items[i]]);
      }
      console.log(data);
      })
      .catch(function (err){
  });
}

export default getWikis