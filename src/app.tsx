import * as React from 'react';
import {Map} from './components/map';
import {CountryInput} from "./components/countryInput";
import {GuessCorrectlyList} from './components/guessCorrectlyList';
import {getGuessResult} from './helpers/getGuessResult';

export const App = () => {
  const [showInput, setShowInput] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState('');
  const [guessCorrectly, setGuessCorrectly] = React.useState({});
  const [score, setScore] = React.useState(0);

  const onRegionClick = (e: React.MouseEvent<SVGElement>, countryCode: string) => {
    setShowInput(true);
    setSelectedRegion(countryCode);
  };

  const onUserCountryGuessSubmitted = (userGuess: string) => {
    if (getGuessResult(userGuess, selectedRegion)) {
      setScore(score + 100);
      setGuessCorrectly(prevState => {
        return {
          ...prevState,
          [selectedRegion]: score,
        }
      });
    }

    //reset
    setShowInput(false);
    setSelectedRegion('');
  };

  return (
    <React.Fragment>
      <Map
        onRegionClick={onRegionClick}
        highlightCountries={guessCorrectly}
        selectedRegion={selectedRegion}
        focusOn={selectedRegion}
      />
      {showInput && <CountryInput
        onUserCountryGuessSubmitted={onUserCountryGuessSubmitted}/>
      }
      <GuessCorrectlyList
        guessCorrectly={guessCorrectly}
      />
    </React.Fragment>
  );
};
