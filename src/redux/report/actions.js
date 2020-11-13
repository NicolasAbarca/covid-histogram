/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  GET_REPORTS_REQUEST,
  GET_REPORTS_SUCCESS,
  GET_REPORTS_FAILURE,
} from './types';

export const GethReports = () => (dispatch) => {
  dispatch(getReportsRequest());
  axios
    .get('https://covid-api.com/api/reports')
    .then((response) => {
      const reports = response.data;
      console.log(response.data);
      dispatch(getReportsSuccess(reports));
    })
    .catch((error) => {
      dispatch(getReportsFailure(error.message));
    });
};

export const getReportsRequest = () => ({
  type: GET_REPORTS_REQUEST,
});

export const getReportsSuccess = (reports) => ({
  type: GET_REPORTS_SUCCESS,
  payload: reports,
});

export const getReportsFailure = (error) => ({
  type: GET_REPORTS_FAILURE,
  payload: error,
});
