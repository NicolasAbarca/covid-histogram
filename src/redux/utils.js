/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import moment from 'moment';

export const modifyData = (data) => {
  const indexValue = Object.values(data)[0];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      // code here
      const newValue = data[key] - indexValue;
      // eslint-disable-next-line no-param-reassign
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
