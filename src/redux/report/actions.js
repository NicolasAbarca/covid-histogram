/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
import axios from 'axios';
import {
  GET_REPORTS_REQUEST,
  GET_REPORTS_SUCCESS,
  GET_REPORTS_FAILURE,
} from './types';
import { modifyData } from '../utils';

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

export const GetReportsByDays = (days) => (dispatch) => {
  dispatch(getReportsRequest());
  axios
    .get(`https://disease.sh/v3/covid-19/historical/USA?lastdays=${days}`)
    .then((response) => {
      const reports = response.data;
      const { cases, deaths } = reports.timeline;
      modifyData(cases);
      modifyData(deaths);
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
