export const getCases = (data) => {
  if (data.reports && data.reports.usData) {
    return Object.values(data.reports.usData.timeline.cases).pop();
  } if (data.reports && data.reports.stateData) {
    const result = data.reports.stateData.data;
    return result.length ? result[0].confirmed : 0;
  }
  return 0;
};

export const getDeaths = (data) => {
  if (data.reports && data.reports.usData) {
    return Object.values(data.reports.usData.timeline.deaths).pop();
  } if (data.reports && data.reports.stateData) {
    const result = data.reports.stateData.data;
    return result.length ? result[0].deaths : 0;
  }
  return 0;
};

export const getOptions = (cases, deaths) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'Percentage',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        data: [
          {
            name: 'Confirmed cases',
            y: cases,
          },
          {
            name: 'Deaths',
            y: deaths,
          },
        ],
      },
    ],
  };
  return options;
};
