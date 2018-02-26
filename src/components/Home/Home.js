import React, { Component } from 'react';

import CommonHeader from '../Common/CommonHeader';
import CardGrid from '../Card/CardGrid';
import SetAccordion from '../Accordion/SetAccordion';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <CommonHeader
            showMenuBar={true}
            headerContentText="Under the Covers"
            headerSubText=" Cover band based in Austin, Texas"
            showButtonBar={true}
            primaryButtonText="Book Now"
            secondaryButtonText="Learn More"
          />
        </div>
        <SetAccordion />
        <CardGrid count={2} className="card-grid-wrapper" />
      </div>
    );
  }
}

export default Home;
