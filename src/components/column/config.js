/* eslint-disable import/prefer-default-export */
import Highcharts from 'highcharts';

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

export const getOptions = (categories, serieData) => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Situation in cities',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'values',
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (
            Highcharts.defaultOptions.title.style
                    && Highcharts.defaultOptions.title.style.color
          ) || 'gray',
        },
      },
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
      },
    },
    series: serieData,
  };
  return options;
};
