const React = require('react');
const Search = require('./Search');
const Form = require('./Form')

const SearchList = (props) => {
  return (
    <div className='list'>
      {props.query.map(query => <Search key={query.title} {...query} />)}
    </div>
  )
}

module.exports = SearchList;