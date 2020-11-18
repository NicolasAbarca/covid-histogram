/* eslint-disable no-use-before-define */

import axios from 'axios';
import {
  GET_REPORTS_REQUEST,
  GET_REPORTS_SUCCESS,
  GET_REPORTS_FAILURE,
} from './types';
import {
  modifyData, getDate, DISEASE_BASEURL, COVID_BASEURL,
} from '../utils';

export const GetReports = () => (dispatch) => {
  dispatch(getReportsRequest());
  const url = `${DISEASE_BASEURL}/v3/covid-19/historical/USA?lastdays=all`;
  axios
    .get(url)
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
  const url = `${DISEASE_BASEURL}/v3/covid-19/historical/USA?lastdays=${days}`;
  axios
    .get(url)
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

export const GetReportByState = (state) => (dispatch) => {
  dispatch(getReportsRequest());
  const date = getDate();
  const url = `${COVID_BASEURL}/api/reports?&iso=USA&region_name=US&date=${date}&region_province=${state}`;
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
