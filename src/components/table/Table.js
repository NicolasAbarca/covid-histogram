/* eslint-disable prefer-const */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.css';
import LoadingOverlay from 'react-loading-overlay';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// eslint-disable-next-line no-unused-vars
const Table = ({ detailData, hideDetail }) => {
  console.log('asdasdasd data', detailData);
  let totalCases = 0;
  let totalDeaths = 0;
  let date = detailData.detail.length > 0 && detailData.detail[0].date;
  // eslint-disable-next-line no-debugger
  debugger;
  let title = `${date} State report`;
  const payload = detailData.detail.map((item, index) => {
    const { confirmed, deaths, region } = item;
    totalDeaths += deaths;
    totalCases += confirmed;
    return {
      confirmed,
      deaths,
      province: region.province,
    };
  });
  const renderSpinner = () => (
    <LoadingOverlay
      active
      spinner
      text="Loading your report..."
    />
  );
  return (
    detailData.loading ? renderSpinner() : detailData.error ? <h2>{detailData.error}</h2> : (
      <div className="container">
        <ButtonGroup className="backButton" variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={() => { hideDetail(); }}>Go Back</Button>
        </ButtonGroup>
        <h1 id="title">
          {title}
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Province</th>
              <th>Cases</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {payload.map((item, index) => (
              <tr key={index}>
                <td>{item.province}</td>
                <td>{item.confirmed}</td>
                <td>{item.deaths}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th id="total" colSpan="1">Total :</th>
              <td>{totalCases}</td>
              <td>{totalDeaths}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  detailData: state.detail,
});

export default connect(
  mapStateToProps,
)(Table);
