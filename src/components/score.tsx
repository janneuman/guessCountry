import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
  score: number;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignContent: 'space-between'
  },
  headline: {
    fontSize: 15,
    flex: 1,
  },
  scoreNumber: {
    flex: 1,
    // alignSelf: 'flex-end',
    textAlign: 'right',
  },
});

export const Score = (props: Props) => {
  const classes = useStyles({});

  return <div className={classes.container}>
    <span className={classes.headline}>Your Score:</span>
    <span className={classes.scoreNumber}>{props.score}</span>
  </div>
};
