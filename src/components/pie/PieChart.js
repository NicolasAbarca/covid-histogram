/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
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
            y: reportData.reports && reportData.reports.usData
              ? Object.values(reportData.reports.usData.timeline.cases).pop()
              : [],
          },
          {
            name: 'Deaths',
            y: reportData.reports && reportData.reports.usData
              ? Object.values(reportData.reports.usData.timeline.deaths).pop()
              : [],
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
