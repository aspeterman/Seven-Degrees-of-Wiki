import axios from 'axios'
import Input from "@material-ui/core/Input";
import SearchIcon from '@material-ui/icons/Search';

var React = require('react');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      querySearch: '',
    };
  }
    handleSearch = (event) => {
      this.setState({querySearch: event.target.value});
      let noSpaceText = event.target.value.replace(/\s/,'%20');
      if(!noSpaceText) {
        this.props.onChange(null);
        return;
      }
      axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'opensearch',
          datatype: 'json',
          limit: 15,
          search: noSpaceText,
          origin: '*'
        }
      })
      .then((resp) => {
        this.props.onChange(resp.data);
      })
    }

  render() {
    return (
      <div>
      <form>
        <Input style={{margin: '10px 0px', width: '25%',  display: 'block'}}
        value={this.state.querySearch}
        onChange={this.handleSearch}
        type="text"
        placeholder="Search here" required /><i className="fa fa-search" aria-hidden="true"></i>
      </form>
      <form role="search" onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">
              <span className="fas fa-search"></span>
              <input type="search" className="search-input" aria-label="Search for a Wikipedia article..." placeholder="Search for a Wikipedia article..." onChange={(event) => this.handleChange(event)} value={this.state.searchInput} required />

            </div>
          </form>
              <p>...or read a <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">random Wikipedia article</a></p>
      </div>
    )
  }
}

export default Form;

// import React, { Component } from "react";
// import Input from "@material-ui/core/Input";

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleOnChange = this.handleOnChange.bind(this);
//     this.getWikis = this.getWikis.bind(this)
//   }
//   options={
//     methode: 'GET',
//     uri:'https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/Africa/daily/2017042700/2018051700',
//     json:true
// };
//   getWikis() {
//     rp(options)
//         .then(function(parseBody){
//         var data=[];
//         for(i=0 ;i<parseBody.items.length;i++){
//             data.push([parseBody.items[i].timestamp,parseBody.items[i].views]);
//         }
//         console.log(data);
//         })
//         .catch(function (err){
//     });
//   }
//   handleOnChange(e) {
//     let currentList = [];
//     let newList = [];
//     let questCount = 3;
//     let { setQuestionList, questionsData, handleSearch } = this.props;
//     currentList = questionsData;

//     if (e.target.value.length >= 3) {
//       newList = currentList.filter(question => {
//         let { question_body } = question;
//         let questList = question_body.toLowerCase();
//         let filter = e.target.value.toLowerCase();
//         if (questList.includes(filter)) {
//           return question;
//         }
//       });
//       questCount = currentList.length;
//     } else {
//       newList = questionsData;
//     }
//     //highligth char

//     handleSearch(questCount, e.target.value);
//     setQuestionList(newList);
//     this.setState({ value: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     console.log("search value: ", this.state.value);
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <Input
//           value={this.state.value}
//           onChange={this.handleOnChange}
//           placeholder="🔍   HAVE A QUESTION? SEARCH FOR ANSWERS...     "
//           type="text"
//           fullWidth
//         />
//       </form>
//     );
//   }
// }

// export default SearchBar;
