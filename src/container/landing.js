/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetReports, GetReportsByDays } from '../redux/report/actions';
import LineChart from '../components/timeline/LineChart';
import PieChart from '../components/pie/PieChart';
import Filters from '../components/filters/Filters';

const Reports = ({
  reportData, GetReports, GetReportsByDays,
}) => {
  useEffect(() => {
    GetReports();
  }, []);

  return (
    reportData.loading ? <h2>Loading</h2> : reportData.error ? <h2>{reportData.error}</h2> : (
      <div>
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Covid Histogram with drilldown visualization
          </div>
          <Filters onClick={GetReportsByDays} />
        </div>
        <PieChart />
        <LineChart />
      </div>
    )

  );
};

const mapStateToProps = (state) => ({
  reportData: state.report,
});

const mapDispatchToProps = (dispatch) => ({
  GetReports: () => dispatch(GetReports()),
  GetReportsByDays: (days, incr) => dispatch(GetReportsByDays(days, incr)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reports);
