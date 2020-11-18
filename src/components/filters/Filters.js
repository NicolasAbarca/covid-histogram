/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Filters = ({ onClick }) => {
  const updateSeries = (days, incr) => {
    onClick(days, incr);
  };
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className="filterbox">
          <div className="A">
            <Typography variant="h8" component="h4" gutterBottom>
              Accumulated data
            </Typography>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={() => { updateSeries(7, false); }}>Last 7 days</Button>
              <Button onClick={() => { updateSeries(30, false); }}>Last 1 month</Button>
            </ButtonGroup>
          </div>
          <div className="clear-data">
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button onClick={() => { updateSeries('all'); }}>All Data</Button>
            </ButtonGroup>
          </div>
          <div className="C">
            <Typography variant="h8" component="h4" gutterBottom>
              No Accumulated data
            </Typography>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button onClick={() => { updateSeries(7, true); }}>Last 7 days</Button>
              <Button onClick={() => { updateSeries(30, true); }}>Last 1 month</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
