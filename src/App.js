import React, { Component } from "react";

import CommonHeader from "./components/Common/Header";
import CardGrid from "./components/Card/CardGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: "1", title: "80s" },
        { id: "2", title: "Rock" },
        { id: "3", title: "Indie" },
        { id: "4", title: "Pop" }
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
