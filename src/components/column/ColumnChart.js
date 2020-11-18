/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { getRegionData, getCities } from './config';

// eslint-disable-next-line no-unused-vars
const ColumnChart = ({ reportData }) => {
  // eslint-disable-next-line no-unused-vars
  const serieData = getRegionData(reportData);
  const categories = getCities(reportData);
  // eslint-disable-next-line no-unused-vars
  const [chartOptions, setChartOptions] = useState({
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
          color: ( // theme
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
        // dataLabels: {
        //   enabled: true,
        // },
      },
    },
    series: serieData,
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
)(ColumnChart);
