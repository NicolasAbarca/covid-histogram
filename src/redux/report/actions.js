/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  GET_REPORTS_REQUEST,
  GET_REPORTS_SUCCESS,
  GET_REPORTS_FAILURE,
} from './types';
import { modifyData, getDate } from '../utils';

export const GetReports = () => (dispatch) => {
  dispatch(getReportsRequest());
  axios
    .get('https://disease.sh/v3/covid-19/historical/USA?lastdays=all')
    .then((response) => {
      const payload = {
        usData: response.data,
        stateData: null,
      };
      dispatch(getReportsSuccess(payload));
    })
    .catch((error) => {
      dispatch(getReportsFailure(error.message));
    });
};

export const GetReportsByDays = (days, incr) => (dispatch) => {
  dispatch(getReportsRequest());
  axios
    .get(`https://disease.sh/v3/covid-19/historical/USA?lastdays=${days}`)
    .then((response) => {
      const reports = response.data;
      const { cases, deaths } = reports.timeline;
      if (incr) {
        modifyData(cases);
        modifyData(deaths);
      }
      const payload = {
        usData: reports,
        stateData: null,
      };

      dispatch(getReportsSuccess(payload));
    })
    .catch((error) => {
      dispatch(getReportsFailure(error.message));
    });
};

// eslint-disable-next-line no-unused-vars
export const GetReportByState = (state) => (dispatch) => {
  dispatch(getReportsRequest());
  const date = getDate();
  const url = `https://covid-api.com/api/reports?&iso=USA&region_name=US&date=${date}&region_province=Oklahoma`;
  axios
    .get(url)
    .then((response) => {
      const detail = {
        usData: null,
        stateData: response.data,
      };

      dispatch(getReportsSuccess(detail));
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
