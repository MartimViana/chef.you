import React, {Component} from 'react';
import {render} from 'react-dom';

// class
import '../public/style.css';

class App extends Component {
  constructor() {
    super();

    // Initialize class variables
    this.title = "chef.you";
    this.quotes = (
      "#BlackLivesMatter",
      "You're the chef here"
    );
  }

  /* Get random quote from quotes list */
  getRandomQuote() {
    //return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    return this.quotes[2];
  }

  renderTitle() {
    return this.title;
  }

  renderQuote() {
    return getRandomQuote();
  }

  render() {
    return (
      <div>
        <center><h2>{this.getRandomQuote()}</h2></center>
      </div>
    );
  }
}

/* RENDER ELEMENTS HERE */
render(<App />, document.getElementById('intro'));