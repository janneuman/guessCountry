import * as React from 'react';
import {getName} from 'country-list'; // TODO: unused
import {Map} from './components/map';
import {CountryInput} from "./components/countryInput";
import {getGuessResult} from './helpers/getGuessResult';

export const App = () => {
  const [showInput, setShowInput] = React.useState(false);
  const [userGuess, setUserGuess] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [guessCorrectly, setGuessCorrectly] = React.useState({});
  const [score, setScore] = React.useState(0);

  const onRegionClick = (e: React.MouseEvent<SVGElement>, countryCode: string) => {
    setShowInput(true);
    setSelectedCountry(countryCode);
  };

  const onUserGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserGuess(e.target.value);
  }

  const onUserCountryGuessSubmitted = () => {
    if (getGuessResult(userGuess, selectedCountry)) {
      setScore(score + 100);
      setGuessCorrectly({
        ...guessCorrectly,
        [selectedCountry]: score,
      });
    }

    //reset
    setShowInput(false);
    setSelectedCountry('');
    setUserGuess('');
  };

  return (
    <React.Fragment>
      <Map
        onRegionClick={onRegionClick}
        highlightCountries={guessCorrectly}
      />
      {showInput && <CountryInput
        userCountryGuess={userGuess}
        onUserCountryGuessSubmitted={onUserCountryGuessSubmitted}
        onChange={onUserGuessChange}/>
      }
    </React.Fragment>
  );
};
