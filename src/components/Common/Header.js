import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";

class CommonHeader extends Component {
  render() {
    return (
      <div>
        <Header as="h2" textAlign="center">
          <Header.Content>Under the Covers</Header.Content>
          <Header sub>Austin, Texas</Header>
          <Button primary>Learn More</Button>
          <Button primary>Book Now</Button>
        </Header>
      </div>
    );
  }
}

export default CommonHeader;
