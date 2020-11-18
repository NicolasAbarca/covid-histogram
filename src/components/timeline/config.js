/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export const getOptions = (reportData, onClick) => {
  const options = {
    title: {
      text: 'Timeline',
    },
    subtitle: {
      text: 'Clicking a datapoint to show more details',
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: reportData.reports && reportData.reports.usData
        ? Object.keys(reportData.reports.usData.timeline.cases) : [],
    },
    series: [{
      name: 'Confirmed cases',
      data: reportData.reports && reportData.reports.usData
        ? Object.values(reportData.reports.usData.timeline.cases) : [],
    }, {
      name: 'Deaths',
      data: reportData.reports && reportData.reports.usData
        ? Object.values(reportData.reports.usData.timeline.deaths) : [],
    }],
    tooltip: {
      shared: true,
      crosshairs: true,
    },
    plotOptions: {
      series: {
        point: {
          events: {
            click() {
              onClick(this.category);
            },
          },
        },
      },
    },
  };
  return options;
};
