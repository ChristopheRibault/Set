import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddThreeCardsModal extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { openAddThreeCardsModal, handleAddThreeCardsModal, actualQuantityOfSets } = this.props;
    return (
      <div>
        <Dialog
          open={openAddThreeCardsModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Not so fast, cow-boy!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              There are {actualQuantityOfSets} Set left. Use hints if you are stucked!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleAddThreeCardsModal(false)} color="primary">
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddThreeCardsModal;