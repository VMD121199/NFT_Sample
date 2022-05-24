import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { Route } from "react-router-dom";

import NFT721 from "./nft";
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={NFT721} />
      </div>
    );
  }
}

export default App;
