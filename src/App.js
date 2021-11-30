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
        <h1>{this.state.quote.quote}</h1>
        <h2>{this.state.quote.author}</h2>
        <button onClick={() => this.componentDidMount()}>New Quote</button>
      </div>
    );
  }
}

export default App;
