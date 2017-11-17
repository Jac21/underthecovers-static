import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Grid, Segment } from 'semantic-ui-react';

import GenreCard from './GenreCard';

import genreCardPhotoOne from '../../assets/daniel.jpg';

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid doubling stackable columns={this.props.categories.length}>
        <Grid.Row>
          {this.props.categories &&
            this.props.categories.map(item => (
              <Grid.Column key={item.id}>
                <Segment>
                  <Link to={`/category`}>
                    <GenreCard
                      title={item.title}
                      imageSource={genreCardPhotoOne}
                    />
                  </Link>
                </Segment>
              </Grid.Column>
            ))}
        </Grid.Row>
      </Grid>
    );
  }
}

CardGrid.propTypes = {
  categories: PropTypes.array
};

export default CardGrid;
