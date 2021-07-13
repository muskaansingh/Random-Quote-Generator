import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {

  state = {
    quote: ' '
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Random Quote Generator!</h1>
      </div>
    )
  }
}

