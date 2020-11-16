/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetReports } from '../redux/report/actions';
import { GetMap } from '../redux/map/actions';
import LineChart from '../components/LineChart';

function Reports({
  // eslint-disable-next-line no-unused-vars
  reportData, GetReports, reportMap, GetMap,
}) {
  useEffect(() => {
    GetReports();
    GetMap();
  }, []);
  return reportData.loading ? (
    <h2>Loading</h2>
  ) : reportData.error ? (
    <h2>{reportData.error}</h2>
  ) : (
    <div>
      <div className="row">
        <div className="col-sm-12 btn btn-info">
          How to Build an Application Using Reactjs and Redux
        </div>
      </div>
      <LineChart />
    </div>
  );
}

const mapStateToProps = (state) => ({
  reportData: state.report,
  reportMap: state.map,
});

const mapDispatchToProps = (dispatch) => ({
  GetReports: () => dispatch(GetReports()),
  GetMap: () => dispatch(GetMap()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reports);
