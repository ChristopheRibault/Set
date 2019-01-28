import React from "react";
import { withStyles } from "@material-ui/core/styles";

/* eslint-disable jsx-a11y/anchor-is-valid */

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const AddThreeCards = (props) => {
  const { addThreeCards } = props;  
  
  return (
    <div>
      <button onClick={addThreeCards}>Add three cards</button>
    </div>
  );
};

export default withStyles(styles)(AddThreeCards);
