import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from 'semantic-ui-react';

import ButtonBar from './ButtonBar';

class CommonHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <Header as="h2" textAlign="center">
          <Header.Content>{this.props.headerContentText}</Header.Content>
          <Header sub>{this.props.headerSubText}</Header>
          {this.props.showButtonBar ? (
            <ButtonBar
              primaryButtonText={this.props.primaryButtonText}
              secondaryButtonText={this.props.secondaryButtonText}
            />
          ) : null}
        </Header>
      </header>
    );
  }
}

CommonHeader.propTypes = {
  headerContentText: PropTypes.string,
  headerSubText: PropTypes.string,
  showButtonBar: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string
};

export default CommonHeader;
