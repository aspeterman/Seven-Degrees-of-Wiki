import React, {Component} from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import SearchList from './components/SearchList'
import Form from './components/Form'
import GetStarted from './components/GetStarted';
import SideBar from './components/SideBar'
import ShowTheLocationWithRouter from './components/location'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      page: ''
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

        <Router basename="/localhost:3001/wiki" forceRefresh={true}>
        <h1>Kevin Bacon's 7 Degrees of Freedom</h1>
        <SideBar />
        <ShowTheLocationWithRouter/>
        <Form onChange={this.addNewResult} />
        <SearchList query={this.state.data} />
        <GetStarted/>
        </Router>
      </div>
    )
  }
}

export default App;
