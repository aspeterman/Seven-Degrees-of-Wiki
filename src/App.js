import React, {Component} from 'react'
import SearchList from './components/SearchList'
import Form from './components/Form'
import Random from './components/Random'
import GetStarted from './components/GetStarted';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.normalizeData = (rawData) => {
      return rawData[1].map(function(title, index) {
        return {
          title: title,
          paragraph: rawData[2][index],
          link: rawData[3][index]
        }
      })
    }
    this.addNewResult = (queryResult) => {
      if(queryResult === null) {
        this.setState({data: []})
        return;
      }
      const searchResult = this.normalizeData(queryResult)
      this.setState({ data: searchResult });
    }
    this.setStartPage = (start) => {
      this.setState({page: start})
    }
  };

  render() {
    return (
      <div className='container'>
        <h1>Kevin Bacon's 7 Degrees of Freedom</h1>
        <GetStarted/>
        <a ref="noopener noreferrer" target ="_blank" href="https://en.wikipedia.org/wiki/Special:Random"><i className="fa fa-random" aria-hidden="true"></i>Search</a>
        <Form onChange={this.addNewResult} />
        <Random onClick={this.setStartPage}/>
        <SearchList query={this.state.data} />
      </div>
    )
  }
}

export default App;
