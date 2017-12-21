import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Button, Image } from 'semantic-ui-react';

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
          <div className="ui two buttons">
            <Button basic color="blue">
              See Song List
            </Button>
          </div>
          <Card.Content extra />
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
