import * as types from './actionTypes';
import TracksApi from '../api/TracksApi';
import { beginAjaxCall } from './ajaxStatusActions';

/*
*   Action Creators
*/

export function loadCategoriesSuccess(categories) {
  return { type: types.LOAD_CATEGORIES_SUCCESS, categories };
}

export function loadCategories() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return TracksApi.getDistinctCategories()
      .then(categories => {
        dispatch(loadCategoriesSuccess(categories));
      })
      .catch(error => {
        throw error;
      });
  };
}
