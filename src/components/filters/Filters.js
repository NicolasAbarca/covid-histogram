/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Filters = ({ onClick }) => {
  const updateSeries = (days) => {
    onClick(days);
  };

  return (
    <div className="box">
      <div className="one">
        <button onClick={() => { updateSeries(7); }}>Last 7 days</button>
      </div>
      <div className="two">
        <button onClick={() => { updateSeries(30); }}>Last 1 month</button>
      </div>
      <div className="three">
        <button onClick={() => { updateSeries('all'); }}>All time</button>
      </div>
    </div>
  );
};

export default Filters;
