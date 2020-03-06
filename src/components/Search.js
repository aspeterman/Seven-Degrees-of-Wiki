var React = require('react');

const Search = (props) => {
  console.log(props.start)
  return (
    <div className='result'>
      <div className='bubble'>
        <h2>{props.title}</h2>
        <p>
		      {/* <input id="userinput" value="rainbow" /> */}
	      </p>
        <div className="text">{props.paragraph}</div>
        <a style={{padding: '0px 10px 5px', display: 'block', textAlign:'right'}} rel="noopener noreferrer" target="_blank" href={props.link}>See full article</a>
        {/* <a style={{padding: '0px 10px 5px', display: 'block', textAlign:'right'}} rel="noopener noreferrer" target="_blank" onClick={document.getElementById('origin').innerText=props.title}>Set As Starting Point</a>
        <a style={{padding: '0px 10px 5px', display: 'block', textAlign:'right'}} rel="noopener noreferrer" target="#" onClick={document.getElementById('end').innerText=props.title}>Set As Ending Point</a> */}
      </div>
    </div>
  )
}

module.exports = Search;