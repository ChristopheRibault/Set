import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Grid } from "@material-ui/core";
import Refresh from "@material-ui/icons/Refresh";
import Info from "@material-ui/icons/Info";
import logo from "../../Assets/logo_set.gif";
/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  gameBoardIcons: {
    // border: "2px solid salmon",
    display: "flex",
    justifyContent: "flex-end"
  },
  gameBoardIcon: {
    height: 50,
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 50,
  },
  table: {
    padding: 20,
  },
});

const Header = props => {
  const {
    restart,
    classes
  } = props;

  return (
    <div>
      <div>
        <Grid container className={classes.root}>
          <Grid item xs={2} className={classes.emptyGridHeader} />
          <Grid item xs={8} className={classes.logo}>
            <img src={logo} alt={"Set logo"} />
          </Grid>
          <Grid item xs={2} className={classes.gameBoardIcons}>
            <IconButton className={classes.gameBoardIcon}>
              <Info />
            </IconButton>
            <IconButton onClick={restart} className={classes.gameBoardIcon}>
              <Refresh />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
