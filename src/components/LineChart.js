/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

// eslint-disable-next-line no-unused-vars
const LineChart = ({ data }) => {
  console.log('asdasdasd data', data);
  // eslint-disable-next-line no-debugger
  debugger;
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: data.reports.timeline ? Object.keys(data.reports.timeline.cases) : [],
    },
    series: [{
      name: 'Confirmed cases,',
      data: data.reports.timeline ? Object.values(data.reports.timeline.cases) : [],
    }, {
      name: 'Deaths',
      data: data.reports.timeline ? Object.values(data.reports.timeline.deaths) : [],
    }],
    tooltip: {
      shared: true,
      crosshairs: true,
    },
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e) {
              setHoverData(e.target.category);
            },
            click() {
              // eslint-disable-next-line no-alert
              alert(`Category: ${this.category}, value: ${this.y}`);
            },
          },
        },
      },
    },
  });

  const updateSeries = () => {
    setChartOptions({
      series: [
        { data: [Math.random() * 5, 2, 1] },
      ],
    });
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
      <h3>
        Hovering over
        {hoverData}
      </h3>
      <button onClick={updateSeries}>Update Series</button>
    </div>
  );
};

export default LineChart;
