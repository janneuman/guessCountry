import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Downshift from 'downshift';
import Paper from '@material-ui/core/Paper';
import {SuggestionItem} from './suggestionItem';
import {SuggestionInput} from './suggestionInput';
import {getInputSuggestions} from '../../helpers/getInputSuggestions';

interface Props {
  onUserRegionGuessSubmitted: (userGuess: string) => any;
}

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: 0,
    left: 0,
    right: 0,
  },
});

export const Autocomplete = (props: Props) => {
  const classes = useStyles({});

  return <Downshift
    id="downshift-simple"
    onChange={selection => props.onUserRegionGuessSubmitted(selection)}>
    {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem,
      }) => {
      const {onBlur, onFocus, ...inputProps} = getInputProps({
        placeholder: 'Search for a country',
      });

      return (
        <div className={classes.container}>
          <SuggestionInput
            autoFocus
            fullWidth={true}
            InputLabelProps={getLabelProps({shrink: true} as any)}
            InputProps={{onBlur, onFocus}}
            inputProps={inputProps}
          />
          <div {...getMenuProps()}>
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getInputSuggestions(inputValue!).map((suggestion, index) =>
                  <SuggestionItem
                    key={index}
                    suggestion={suggestion}
                    index={index}
                    itemProps={getItemProps({item: suggestion.label})}
                    highlightedIndex={highlightedIndex}
                    selectedItem={selectedItem}
                  />,
                )}
              </Paper>
            ) : null}
          </div>
        </div>
      );
    }}
  </Downshift>
};
