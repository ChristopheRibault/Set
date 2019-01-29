import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './IntroductionPage.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  buttonStartIntro: {
    display: 'block',
    margin: 'auto',
    marginTop: '80vh',
  },
  input: {
    display: 'none',
  },
});

class IntroductionPage extends Component {
  state ={
    redirect: false,
  }

  redirectPlayersPage = () => {
    this.setState({ redirect: true })
  }
  render(){
    const { classes } = this.props;
    const { redirect } = this.state;
    if (redirect){
      return(
        <Redirect to="players_page" />
      )
    }
    return (
      <div className="introductionPage">
        <h1 className="backgroundIntroduction">Welcome in the great game of</h1>
        <Button onClick={this.redirectPlayersPage} variant="outlined" color="secondary" className={classes.buttonStartIntro}>
        Let's start playing !
        </Button>
        <button className="buttonStartIntro"></button>
      </div>
    )
  }
}

IntroductionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroductionPage);
