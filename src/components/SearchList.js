var React = require('react');
var Search = require('./Search');

const SearchList = (props) => {
  return (
    <div className='list'>
      {props.query.map(query => <Search key={query.title} {...query} />)}
    </div>
  )
}

module.exports = SearchList;