import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, Button } from '@material-ui/core';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

const ButtonsNbOfPlayer = (props) => {
  const { classes, selectPlayer, value } = props;
  console.log(value);
  return (
    <div>
      <Button
        value={1}
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
        onClick={() => selectPlayer(1)}
      >
        1
      </Button>
      <Button
        value={2}
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
        onClick={() => selectPlayer(2)}
      >
        2
      </Button>
      <Button
        value={3}
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
        onClick={() => selectPlayer(3)}
      >
        3
      </Button>
      <Button
        value={4}
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
        onClick={() => selectPlayer(4)}
      >
        4
      </Button>
    </div>
  );
}

ButtonsNbOfPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonsNbOfPlayer);