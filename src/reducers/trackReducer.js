import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function trackReducer(state = initialState.tracks, action) {
  switch (action.type) {
    case types.LOAD_TRACKS_SUCCESS:
      console.log(action.tracks);
      return action.tracks;
    case types.ADD_TRACK_TO_CART_SUCCESS:
      console.log('Added to Cart!');
    // eslint-disable-next-line
    default:
      return state;
  }
}
