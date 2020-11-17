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
  // console.log('asdasdasd data', data);
  // eslint-disable-next-line no-unused-vars
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'pie',
    },
    series: [
      {
        data: [
          {
            y: reportData.reports.timeline
              ? Object.values(reportData.reports.timeline.cases).pop()
              : [],
          },
          {
            y: reportData.reports.timeline
              ? Object.values(reportData.reports.timeline.deaths).pop()
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
