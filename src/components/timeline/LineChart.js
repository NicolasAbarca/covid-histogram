/* eslint-disable no-unused-vars */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

// eslint-disable-next-line no-unused-vars
const LineChart = ({ reportData }) => {
  console.log('asdasdasd data', reportData);
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: reportData.reports.timeline ? Object.keys(reportData.reports.timeline.cases) : [],
    },
    series: [{
      name: 'Confirmed cases,',
      data: reportData.reports.timeline ? Object.values(reportData.reports.timeline.cases) : [],
    }, {
      name: 'Deaths',
      data: reportData.reports.timeline ? Object.values(reportData.reports.timeline.deaths) : [],
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

  // const updateSeries = () => {
  //   setChartOptions({
  //     series: [
  //       { data: [Math.random() * 5, 2, 1] },
  //     ],
  //   });
  // };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  reportData: state.report,
});

export default connect(
  mapStateToProps,
)(LineChart);
