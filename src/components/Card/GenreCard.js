import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, Image } from "semantic-ui-react";

class GenreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>
          <Image src={this.props.imageSource} />
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

GenreCard.propTypes = {
  imageSource: PropTypes.string,
  title: PropTypes.string
};

export default GenreCard;
