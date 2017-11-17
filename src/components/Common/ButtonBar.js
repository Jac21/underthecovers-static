import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'semantic-ui-react';

class ButtonBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button.Group>
          <Button primary>{this.props.primaryButtonText}</Button>
          <Button.Or />
          <Button secondary>{this.props.secondaryButtonText}</Button>
        </Button.Group>
      </div>
    );
  }
}

ButtonBar.propTypes = {
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string
};

export default ButtonBar;
