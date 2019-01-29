import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
// const domain = process.env.REACT_APP_DOMAIN_NAME;

class InstructionModal extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { openInstructionModal, handleInstructionModal } = this.props;

    return (
      <div>
        <Dialog
          open={openInstructionModal}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Rules of Set</DialogTitle>
          <DialogContent>
            <DialogContentText>
              The object of the game is to identify a 'Set' of three cards from
              12 cards laid out on the table. Each card has a variation of the
              following four features: 
              <br />
              1) COLOR: Each card is red, green, or
              blue.
              <br />
              2) SYMBOL: Each card contains ovals, squiggles, or diamonds.
              <br />
              3) NUMBER: Each card has one, two, or three symbols.
              <br />
              4) SHADING:
              Each card is solid, open, or striped. A 'Set' consists of three
              cards in which each feature is EITHER the same on each card OR is
              different on each card. That is to say, any feature in the 'Set'
              of three cards is either common to all three cards or is different
              on each card.
              <br />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => handleInstructionModal(false)}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default InstructionModal;
