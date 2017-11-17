import React, { Component } from 'react';

import CommonHeader from '../Common/CommonHeader';
import CardGrid from '../Card/CardGrid';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      categories: [
        { id: '1', title: '80s' },
        { id: '2', title: 'Rock' },
        { id: '3', title: 'Indie' },
        { id: '4', title: 'Pop' }
      ]
    };
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
        <CardGrid categories={this.state.categories} />
      </div>
    );
  }
}

export default Home;
