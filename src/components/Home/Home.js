import React, { Component } from 'react';

import CommonHeader from '../Common/CommonHeader';
import CardGrid from '../Card/CardGrid';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CommonHeader
          headerContentText="Under the Covers"
          headerSubText="Austin, Texas"
          showButtonBar={true}
          primaryButtonText="Book Now"
          secondaryButtonText="Learn More"
        />
        <CardGrid count={4} />
      </div>
    );
  }
}

export default Home;
