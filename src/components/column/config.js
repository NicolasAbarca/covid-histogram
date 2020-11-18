/* eslint-disable import/prefer-default-export */
export const getRegionData = (data) => {
  if (data.reports && data.reports.stateData.data && data.reports.stateData.data.length) {
    const stateData = data.reports.stateData.data[0];
    const cases = {
      name: 'Cases',
      data: stateData.region.cities.map((x) => x.confirmed),
    };
    const deaths = {
      name: 'Deaths',
      data: stateData.region.cities.map((x) => x.deaths),
    };
    return [cases, deaths];
  }
  return [];
};
export const getCities = (data) => {
  if (data.reports && data.reports.stateData.data && data.reports.stateData.data.length) {
    const stateData = data.reports.stateData.data[0];
    const cities = stateData.region.cities.map((x) => x.name);
    return cities;
  }
  return [];
};
