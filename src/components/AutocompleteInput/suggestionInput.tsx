import * as React from "react";
import TextField, {TextFieldProps} from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';

type Props = TextFieldProps & {
  ref?: React.Ref<HTMLDivElement>;
};

const useStyles = makeStyles({
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
});

export const SuggestionInput = (props: Props) => {
  const {InputProps, ref, ...other} = props;
  const classes = useStyles({});

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
};
