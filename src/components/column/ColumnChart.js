/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { getRegionData, getCities, getOptions } from './config';

const ColumnChart = ({ reportData }) => {
  const serieData = getRegionData(reportData);
  const categories = getCities(reportData);
  const chartOptions = getOptions(categories, serieData);
  return (
    <div>
      {serieData.length > 0 ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      ) : (<>No data found :(</>)}

    </div>
  );
};

const mapStateToProps = (state) => ({
  reportData: state.report,
});

export default connect(
  mapStateToProps,
)(ColumnChart);
