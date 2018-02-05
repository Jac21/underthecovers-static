import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonBar from './ButtonBar';
import Link from 'react-router-dom/Link';

class CommonHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        {this.props.showMenuBar ? (
          <div className="ui container">
            <div className="ui large secondary inverted pointing menu border-none-mixin">
              <Link to="/" className="active item">
                Home
              </Link>
              <div className="right item">
                <a className="ui inverted button">Watch</a>
                <a className="ui inverted button">Listen</a>
              </div>
            </div>
          </div>
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
