/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { getCases, getDeaths } from './config';
import './Pie.css';

// eslint-disable-next-line no-unused-vars
const PieChart = ({ reportData }) => {
  // eslint-disable-next-line no-unused-vars
  const [chartOptions, setChartOptions] = useState({
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
            y: getCases(reportData),
          },
          {
            name: 'Deaths',
            y: getDeaths(reportData),
          },
        ],
      },
    ],
  });

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
)(PieChart);
