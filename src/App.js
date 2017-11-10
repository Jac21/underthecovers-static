import React, { Component } from "react";

import CommonHeader from "./components/Common/Header";
import CardGrid from "./components/Card/CardGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { title: "80s" },
        { title: "Rock" },
        { title: "Indie" },
        { title: "Pop" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <CommonHeader />
        <CardGrid categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
