/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  GET_REPORTS_REQUEST,
  GET_REPORTS_SUCCESS,
  GET_REPORTS_FAILURE,
  GET_DETAIL_SUCCESS,
} from './types';
import { modifyData, getShortISODate } from '../utils';

export const GetReports = () => (dispatch) => {
  dispatch(getReportsRequest());
  axios
    .get('https://disease.sh/v3/covid-19/historical/USA?lastdays=all')
    .then((response) => {
      const reports = response.data;
      dispatch(getReportsSuccess(reports));
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

      dispatch(getReportsSuccess(reports));
    })
    .catch((error) => {
      dispatch(getReportsFailure(error.message));
    });
};

export const GetDetailsByFilters = (pDate, state) => (dispatch) => {
  dispatch(getReportsRequest());
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

export const getDetailSuccess = (detail) => ({
  type: GET_DETAIL_SUCCESS,
  payload: detail,
});
