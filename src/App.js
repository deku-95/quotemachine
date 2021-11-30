import * as React from "react";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
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
  }

  render() {
    return (
      <div className="App">
        <div class="pure-g center">
          <div class="pure-u-1-1">
            <h1 class="center">Random Quote Machine</h1>
            <div id="quote">
              <p id="quoteText">"{this.state.quote.quote}"</p>
              <p id="author">-{this.state.quote.author}</p>
            </div>
            <button
              class="pure-button"
              onClick={() => this.componentDidMount()}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
