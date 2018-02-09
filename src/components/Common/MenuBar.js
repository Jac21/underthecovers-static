import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from 'react-router-dom/Link';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui large secondary inverted pointing menu border-none-mixin">
          <Link to="/" className="active item">
            Home
          </Link>
          <div className="right item">
            <a className="ui inverted button">{this.props.firstButtonText}</a>
            <a className="ui inverted button">{this.props.secondButtonText}</a>
          </div>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  firstButtonText: PropTypes.string,
  secondButtonText: PropTypes.string
};

export default MenuBar;
