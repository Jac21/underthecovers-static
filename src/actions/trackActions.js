import * as types from './actionTypes';
import TracksApi from '../api/TracksApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

/*
*   Action Creators
*/

export function loadTracksSuccess(tracks) {
  return { type: types.LOAD_TRACKS_SUCCESS, tracks };
}

export function addTrackToCartSuccess(track) {
  return { type: types.ADD_TRACK_TO_CART_SUCCESS, track };
}

export function loadTracks() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return TracksApi.get()
      .then(tracks => {
        dispatch(loadTracksSuccess(tracks));
      })
      .catch(error => {
        throw error;
      });
  };
}
