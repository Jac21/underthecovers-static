import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Image, List } from 'semantic-ui-react';

class SongListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <Button primary>Add to Cart</Button>
          </List.Content>
          <Image avatar src={this.props.imageSource} />
          <List.Content>{this.props.title}</List.Content>
        </List.Item>
      </List>
    );
  }
}

SongListItem.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.string
};

export default SongListItem;
