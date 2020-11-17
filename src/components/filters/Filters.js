/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Filters = ({ onClick }) => {
  const updateSeries = (days, incr) => {
    onClick(days, incr);
  };

  return (
    <>
      <div className="box">
        <div className="one">
          <button onClick={() => { updateSeries(7, true); }}>last 7 days increment</button>
        </div>
        <div className="two">
          <button onClick={() => { updateSeries(30, true); }}>Last 1 month increment</button>
        </div>
      </div>
      <div className="box">
        <div className="one">
          <button onClick={() => { updateSeries(7, false); }}>last 7 days</button>
        </div>
        <div className="two">
          <button onClick={() => { updateSeries(30, false); }}>Last 1 month</button>
        </div>
        <div className="three">
          <button onClick={() => { updateSeries('all'); }}>All time</button>
        </div>
      </div>
    </>
  );
};

export default Filters;
