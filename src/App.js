import React, { Component } from "react";

import CommonHeader from "./components/Common/CommonHeader";
import CardGrid from "./components/Card/CardGrid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
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
        <CommonHeader
          headerContentText="Under the Covers"
          headerSubText="Austin, Texas"
          showButtonBar={true}
          primaryButtonText="Under the Covers"
          secondaryButtonText="Austin, Texas"
        />
        <CardGrid categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
