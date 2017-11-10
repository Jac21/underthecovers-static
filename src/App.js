import React, { Component } from "react";

import CommonHeader from "./components/Common/Header";
import CardGrid from "./components/Card/CardGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommonHeader />
        <CardGrid />
      </div>
    );
  }
}

export default App;
