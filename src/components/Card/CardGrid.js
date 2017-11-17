import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Grid, Segment } from 'semantic-ui-react';

import CategoryApi from '../../api/CategoryApi';
import GenreCard from './GenreCard';

import genreCardPhotoOne from '../../assets/daniel.jpg';

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid doubling stackable columns={this.props.count}>
        <Grid.Row>
          {CategoryApi.all().map(item => (
            <Grid.Column key={item.id}>
              <Segment>
                <Link to={`/category/${item.id}`}>
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
  count: PropTypes.number
};

export default CardGrid;
