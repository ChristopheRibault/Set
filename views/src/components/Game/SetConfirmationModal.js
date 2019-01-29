import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SetConfirmationModal extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { openSetConfirmationModal, handleSetConfirmationModal } = this.props;
    return (
      <div>
        <Dialog
          open={openSetConfirmationModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Well done!
          </DialogTitle>
          <DialogActions>
            <Button onClick={() => handleSetConfirmationModal(false)} color="primary">
              Thanks bro!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SetConfirmationModal;