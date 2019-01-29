import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  confirmationMessage: {
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SetConfirmationModal extends React.Component {
  state = {
    open: false,
  };


  render() {
    const { openSetConfirmationModal, validityOfSet, classes } = this.props;

    return (

      <div>
        <Dialog
          open={openSetConfirmationModal}
          TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title" className={classes.confirmationMessage}>
          {validityOfSet === true ? 'Welldone!' : 'Nope! Try again!'}
          </DialogTitle>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SetConfirmationModal);