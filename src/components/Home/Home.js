import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

import CommonHeader from '../Common/CommonHeader';
import CardGrid from '../Card/CardGrid';
import SetAccordion from '../Accordion/SetAccordion';

import logo from '../../assets/images/Branding/UTC_Light_Sticker.png';

const comingSoonWrapper = css({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
});

const comingSoonImage = css({
  display: 'block',
  margin: '0 auto',
  maxWidth: '40em',
  maxHeight: '80em'
});

const comingSoonContent = css({
  textAlign: 'center'
});

const comingSoonMessage = css({
  fontSize: '1.4em'
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {!this.props.comingSoonMode && (
          <div>
            <div>
              <CommonHeader
                showMenuBar={true}
                headerContentText="Under the Covers"
                headerSubText=" Cover band based in Austin, Texas"
                showButtonBar={true}
                primaryButtonText="Book Now"
                secondaryButtonText="Learn More"
              />
            </div>
            <SetAccordion />
            <CardGrid count={2} className="card-grid-wrapper" />
          </div>
        )}
        {this.props.comingSoonMode && (
          <div {...comingSoonWrapper}>
            <img src={logo} alt="Under the Covers" {...comingSoonImage} />
            <div {...comingSoonContent}>
              <h1>Coming Soon!</h1>
              <p {...comingSoonMessage}>
                For booking information, please shoot us an email at{' '}
                <a
                  href="mailto:mail@bookthecovers.com"
                  rel="noopener noreferrer"
                >
                  mail@bookthecovers.com
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  comingSoonMode: PropTypes.bool.isRequired
};

export default Home;
