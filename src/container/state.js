/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { GetReports, GetReportsByDays, GetReportByState } from '../redux/report/actions';
import { GetDetailsByFilters } from '../redux/detail/actions';

import LineChart from '../components/timeline/LineChart';
import PieChart from '../components/pie/PieChart';
import Filters from '../components/filters/Filters';
import Table from '../components/table/Table';
import SearchBox from '../components/autocomplete/Autocomplete';

const StateHistogram = ({
  reportData, GetReports, GetReportsByDays, GetDetailsByFilters, GetReportByState,
}) => {
  const [showDrilldown, setShowDrilldown] = useState(false);
  useEffect(() => {
    GetReports();
  }, []);

  const loadDetail = (date) => {
    setShowDrilldown(true);
    GetDetailsByFilters(date);
  };

  const renderGraphs = () => (
    <>
      <div className="row">
        <div>
          Covid Histogram with drilldown visualization
        </div>
        <SearchBox onClick={GetReportByState} />
        <Filters onClick={GetReportsByDays} />
      </div>
      <PieChart />
      <LineChart onClick={loadDetail} />
    </>
  );
  const renderDrilldown = () => (
    <>
      <div className="row">
        <Filters onClick={GetReportsByDays} />
      </div>
      <Table />
    </>
  );

  return (
    reportData.reports && reportData.reports.usData
      ? reportData.loading ? <h2>Loading</h2> : reportData.error ? <h2>{reportData.error}</h2> : (
        !showDrilldown
          ? renderGraphs()
          : renderDrilldown()
      ) : <>State</>
  );
};

const mapStateToProps = (state) => ({
  reportData: state.report,
});

const mapDispatchToProps = (dispatch) => ({
  GetReports: () => dispatch(GetReports()),
  GetReportsByDays: (days, incr) => dispatch(GetReportsByDays(days, incr)),
  GetDetailsByFilters: (date, pState) => dispatch(GetDetailsByFilters(date, pState)),
  GetReportByState: (pState) => dispatch(GetReportByState(pState)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateHistogram);
