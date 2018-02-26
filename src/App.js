import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';

import Main from './components/Main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Main loading={this.props.loading} />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

// function mapStateToProps(state, ownProps) {
//   return {
//     loading: false //state.ajaxCallsInProgress > 0
//   };
// }

export default /*connect(mapStateToProps)*/ App;
