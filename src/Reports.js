import React, { useEffect } from 'react'; //Use if using useEffect during fetch
import ReactMarkdown from 'react-markdown';
import ReactDOM from 'react-dom';

const Reports = ({ match }) => {
  const weekTitle = "Week " + match.params.weekNumber;

  useEffect (() => {
      fetch("https://raw.githubusercontent.com/Lundmarks/jsramverkBTH/master/README.md")
        .then(function(response) {
          if (!response.ok) return "# Error fetching data :/";
          return response.text();
        })
        .then(function(response) {
          ReactDOM.render(<ReactMarkdown source={response} />, document.querySelector(".readmeContainer"));
      });
  })

  return (
    <main>
      <h2>{weekTitle}</h2>
      <p>This page currently shows the content of my Readme.md from my GitHub page.</p>
      <p>See my GitHub repo in its full form <a href="https://github.com/Lundmarks/jsramverkBTH/">here!</a></p>
      <br></br><hr></hr>
      <div className="readmeContainer"></div>
    </main>
  );
};

export default Reports;
