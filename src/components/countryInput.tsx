import * as React from 'react';

interface Props {
  onUserCountryGuessSubmitted: (userGuess: string) => any;
}

export const CountryInput = (props: Props) => {
  const [userGuess, setUserGuess] = React.useState('');

  const onCountrySubmit = (e: any): any => {
    props.onUserCountryGuessSubmitted(userGuess);
  };

  const onEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      props.onUserCountryGuessSubmitted(userGuess);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserGuess(e.target.value);

  return (
    <React.Fragment>
      <label htmlFor="">Enter Country name:</label>
      <input
        autoFocus
        value={userGuess}
        onChange={onChange}
        onKeyDown={onEnterSubmit}
      />
      <button onClick={onCountrySubmit}>Check</button>
    </React.Fragment>
  )
};
