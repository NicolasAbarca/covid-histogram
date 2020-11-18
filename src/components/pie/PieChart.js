/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { getCases, getDeaths, getOptions } from './config';
import './Pie.css';

const PieChart = ({ reportData }) => {
  const cases = getCases(reportData);
  const deaths = getDeaths(reportData);
  const chartOptions = getOptions(cases, deaths);
  return (
    <div>
      {cases > 0 ? (
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      ) : (<></>)}

    </div>
  );
};

const mapStateToProps = (state) => ({
  reportData: state.report,
});

export default connect(
  mapStateToProps,
)(PieChart);
