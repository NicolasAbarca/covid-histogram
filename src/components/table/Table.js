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
  const [states, setStates] = useState([]);
  const renderTableData = () => states.map((state, index) => {
    const id = index;
    const region = state.region.province;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{region}</td>
      </tr>
    );
  });
  return (
    <>
      <h1 id="title">React Dynamic Table</h1>
      <table>
        <tbody>
          {renderTableData()}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  reportData: state.report,
});

export default connect(
  mapStateToProps,
)(LineChart);
