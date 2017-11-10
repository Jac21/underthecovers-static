import React, { Component } from "react";
import PropTypes from "prop-types";

import { Grid, Segment } from "semantic-ui-react";

import GenreCard from "./GenreCard";

import genreCardPhotoOne from "../../assets/daniel.jpg";

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
              <Grid.Column>
                <Segment>
                  <GenreCard
                    key={item.id}
                    imageSource={genreCardPhotoOne}
                    title={item.title}
                  />
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
