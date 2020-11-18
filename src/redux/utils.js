/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

import moment from 'moment';

export const DISEASE_BASEURL = 'https://disease.sh';
export const COVID_BASEURL = 'https://covid-api.com';

export const modifyData = (data) => {
  const indexValue = Object.values(data)[0];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const newValue = data[key] - indexValue;
      data[key] = newValue;
    }
  }
};

export const getShortISODate = (pDate) => {
  const date = moment(pDate).format('YYYY-MM-DD');
  return date;
};
export const getDate = () => {
  const date = moment().subtract(1, 'days').format('YYYY-MM-DD');
  return date;
};
