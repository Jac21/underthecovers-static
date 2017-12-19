import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SongListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.title}</div>;
  }
}

SongListItem.propTypes = {
  title: PropTypes.string
};

export default SongListItem;
