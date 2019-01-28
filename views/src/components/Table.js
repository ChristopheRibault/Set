import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Card from "./Card";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const Table = (props) => {
  const {recordValue, classes, gameCards} = props;  

  // console.log('gameCards : ', gameCards);
  // console.log(recordValue);
  
  return (
    <div>
      <Grid container className={classes.root} spacing={16}>
        {gameCards && gameCards.map(card => {
          return (
            <Grid key={card.code} item xs={3}>
              <p>{card.code}</p>
              <button onClick={() => recordValue(card)}>Click !</button>
              <Card card={card}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Table);
