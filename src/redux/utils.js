/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
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
  const date = new Date(pDate);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
