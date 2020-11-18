/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import Typography from '@material-ui/core/Typography';
import { GetReports, GetReportsByDays, GetReportByState } from '../redux/report/actions';
import { GetDetailsByFilters } from '../redux/detail/actions';
import PieChart from '../components/pie/PieChart';
import Filters from '../components/filters/Filters';
import Table from '../components/table/Table';
import SearchBox from '../components/autocomplete/Autocomplete';
import ColumnChart from '../components/column/ColumnChart';

const StateHistogram = ({
  reportData, GetReportByState,
}) => {
  const [showDrilldown, setShowDrilldown] = useState(false);
  const [stateName, setStateName] = useState('Alabama');
  useEffect(() => {
    GetReportByState('Alabama');
  }, []);

  const renderGraphs = () => (
    <>
      <div className="row">
        <Typography variant="h8" component="h2" gutterBottom>
          Covid Histogram by specific State
        </Typography>
        <SearchBox onClick={GetReportByState} setName={setStateName} />
      </div>
      <Typography variant="h8" component="h3" gutterBottom>
        {`${stateName} Situation`}
      </Typography>
      <ColumnChart />
      <PieChart />
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
  const renderSpinner = () => (
    <LoadingOverlay
      active
      spinner
      text="Loading state report..."
    />
  );
  return (
    reportData.reports && reportData.reports.stateData
      ? reportData.loading ? renderSpinner() : reportData.error ? <h2>{reportData.error}</h2> : (
        !showDrilldown
          ? renderGraphs()
          : renderDrilldown()
      ) : renderSpinner()
  );
};

const mapStateToProps = (state) => ({
  reportData: state.report,
});

const mapDispatchToProps = (dispatch) => ({
  GetReports: () => dispatch(GetReports()),
  GetDetailsByFilters: (date, pState) => dispatch(GetDetailsByFilters(date, pState)),
  GetReportByState: (pState) => dispatch(GetReportByState(pState)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StateHistogram);
