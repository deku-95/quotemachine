import * as React from "react";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Loading...",
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quote: data.quotes[Math.floor(Math.random() * data.quotes.length)],
        });
      });

    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    var tweet =
      "https://twitter.com/intent/tweet?text=" +
      '"' +
      this.state.quote.quote +
      '" -' +
      this.state.quote.author;

    return (
      <div className="App">
        <div className="pure-g center">
          <div className="pure-u-1-1">
            <h1 className="center">Random Quote Machine</h1>
            <div id="quote-box">
              <p id="text">"{this.state.quote.quote}"</p>
              <p id="author">-{this.state.quote.author}</p>
            </div>
            <button
              id="new-quote"
              className="pure-button"
              onClick={() => this.componentDidMount()}
            >
              New Quote
            </button>
            <a
              id="tweet-quote"
              className="pure-button"
              href={tweet}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet this quote
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
