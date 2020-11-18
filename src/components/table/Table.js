/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import LoadingOverlay from 'react-loading-overlay';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Table = ({ detailData, hideDetail }) => {
  let totalCases = 0;
  let totalDeaths = 0;
  const date = detailData.detail.length > 0 && detailData.detail[0].date;
  const title = `${date} Report by state`;
  const payload = detailData.detail.map((item) => {
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
