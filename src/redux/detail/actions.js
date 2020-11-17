/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  GET_DETAIL_REQUEST,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_FAILURE,
} from './types';
import { getShortISODate } from '../utils';

export const GetDetailsByFilters = (pDate, state) => (dispatch) => {
  dispatch(getDetailRequest());
  const date = getShortISODate(pDate);
  const url = `https://covid-api.com/api/reports?&iso=USA&region_name=US&date=${date}`;
  if (state) {
    const pState = `&region_province=${state}`;
    url.concat(pState);
  }
  axios
    .get(url)
    .then((response) => {
      const detail = response.data;

      dispatch(getDetailSuccess(detail));
    })
    .catch((error) => {
      dispatch(getDetailFailure(error.message));
    });
};

export const getDetailRequest = () => ({
  type: GET_DETAIL_REQUEST,
});

export const getDetailSuccess = (map) => ({
  type: GET_DETAIL_SUCCESS,
  payload: map,
});

export const getDetailFailure = (error) => ({
  type: GET_DETAIL_FAILURE,
  payload: error,
});
