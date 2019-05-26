import * as React from 'react';

interface Props {
  userCountryGuess: string;
  onUserCountryGuessSubmitted: () => any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CountryInput = (props: Props) => {
  const onCountrySubmit = (e: any): any => {
    props.onUserCountryGuessSubmitted();
  };

  const onEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      props.onUserCountryGuessSubmitted();
    }
  }

  return (
    <React.Fragment>
      <label htmlFor="">Enter Country name:</label>
      <input
        autoFocus
        value={props.userCountryGuess}
        onChange={props.onChange}
        onKeyDown={onEnterSubmit}
      />
      <button onClick={onCountrySubmit}>Check</button>
    </React.Fragment>
  )
};
