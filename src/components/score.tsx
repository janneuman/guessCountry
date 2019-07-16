import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
  score: number;
}

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    top: 30,
    right: 30,
  },
  headline: {
    fontSize: 15,
  },
  scoreContainer: {
    width: 60,
    height: 60,
    boxSizing: 'border-box',
    borderRadius: '50%',
    backgroundColor: '#f50057',
  },
  scoreNumber: {
    display: 'block',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 800,
    color: '#fff',
    lineHeight: '60px',
  },
});

export const Score = (props: Props) => {
  const classes = useStyles({});

  return <div className={classes.container}>
    <span className={classes.headline}>Your Score:</span>
    <div className={classes.scoreContainer}>
      <span className={classes.scoreNumber}>{props.score}</span>
    </div>
  </div>
};
