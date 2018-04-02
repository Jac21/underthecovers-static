import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuBar from './MenuBar';
import ButtonBar from './ButtonBar';

class CommonHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        {this.props.showMenuBar ? (
          <MenuBar
            firstButtonText="Extras"
            firstButtonPath="/information"
            secondButtonText="Cart"
            secondButtonPath="/cart"
          />
        ) : null}
        <div className="ui text container">
          <h1 className="ui inverted header">{this.props.headerContentText}</h1>
          <h2>{this.props.headerSubText}</h2>
          {this.props.showButtonBar ? (
            <ButtonBar
              primaryButtonText={this.props.primaryButtonText}
              secondaryButtonText={this.props.secondaryButtonText}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

CommonHeader.propTypes = {
  showMenuBar: PropTypes.bool,
  headerContentText: PropTypes.string,
  headerSubText: PropTypes.string,
  showButtonBar: PropTypes.bool,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string
};

export default CommonHeader;
