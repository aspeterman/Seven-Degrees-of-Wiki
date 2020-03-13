import React, {Component} from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Link,
Redirect
} from "react-router-dom";
// import SevenStepsToKevinBacon from './components/index'
// import withAuth from './components/Auth/withAuth'
import WikiGameHistory from './components/WikiGameHistory';
import WikiSetup from './components/WikiSetup';
import WikiGameApp from './components/WikiGameApp'
import SearchList from './components/SearchList'
import Form from './components/Form'
import GetStarted from './components/GetStarted';
// import Profile from './components/Profile'
// import Auth from './components/Auth/components/App'


import WikiLinks from './components/WikiLinks'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
      title: '',
      links: [],
      count: 7,
      title: ''
    };



    this.normalizeData = (rawData) => {
      return rawData[1].map(function(title, index) {
        return {
          title: title,
          paragraph: rawData[2][index],
          link: rawData[3][index],
          title: document.title
        }
      })
    }
    this.addNewResult = (queryResult) => {
      if(queryResult === null) {
        this.setState({data: [], title: ''})
        return;
      }
      const searchResult = this.normalizeData(queryResult)
      this.setState({ data: searchResult });
      this.setState({title: searchResult})
    }

    this.counter = () => {
      this.setState({count: this.count--})
    }
  };
  componentDidMount() {
    this.setState({
      pageQueue: [],
      pageId: null,
      title: document.getElementById('origin').innerText
    })
    // console.log(this.state.title)

  }




  render() {
    return (


      <Router>
      <div>
        <Route path="/" exact component={WikiSetup} />
        {/* <Route path="/:title" component={WikiGameHistory}/> */}
        <Form onChange={this.addNewResult}  />
        <SearchList query={this.state.data} />
        <GetStarted onChange={console.log(this.props)}/>
      </div>
    </Router>




  )
  }
}

export default App;
