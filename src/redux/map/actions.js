/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  GET_MAP_REQUEST,
  GET_MAP_SUCCESS,
  GET_MAP_FAILURE,
} from './types';

export const GetMap = () => (dispatch) => {
  dispatch(getMapRequest());
  axios
    .get('https://code.highcharts.com/mapdata/countries/us/us-all.geo.json')
    .then((response) => {
      const map = response.data;
      dispatch(getMapSuccess(map));
    })
    .catch((error) => {
      dispatch(getMapFailure(error.message));
    });
};

export const getMapRequest = () => ({
  type: GET_MAP_REQUEST,
});

export const getMapSuccess = (map) => ({
  type: GET_MAP_SUCCESS,
  payload: map,
});

export const getMapFailure = (error) => ({
  type: GET_MAP_FAILURE,
  payload: error,
});
