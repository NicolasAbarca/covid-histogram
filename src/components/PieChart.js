/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import './Pie.css';
// eslint-disable-next-line no-unused-vars
const PieChart = ({ data }) => {
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
            y: 100,
          },
          {
            y: 50,
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

export default PieChart;
