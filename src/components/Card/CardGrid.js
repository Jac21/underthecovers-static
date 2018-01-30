import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Grid } from 'semantic-ui-react';

import GenreCard from './GenreCard';

import genreCardPhotoOne from '../../assets/images/daniel.jpg';

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  render() {
    return (
      <Grid doubling stackable columns={this.props.count}>
        <Grid.Row>
          {this.props.categories.map(item => (
            <Grid.Column key={item.id}>
              <Link to={`/category/${item.title}`}>
                <GenreCard title={item.title} imageSource={genreCardPhotoOne} />
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

CardGrid.propTypes = {
  count: PropTypes.number
};

export default CardGrid;
