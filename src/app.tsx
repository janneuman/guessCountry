import * as React from 'react';
import {Map} from './components/map';
import {CountryInput} from "./components/countryInput";
import {GuessCorrectlyList} from './components/guessCorrectlyList';
import {ShowRegionName} from './components/showRegionName';
import {getGuessResult} from './helpers/getGuessResult';

export const App = () => {
  const [showInput, setShowInput] = React.useState(false);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState('');
  const [guessCorrectly, setGuessCorrectly] = React.useState({});
  const [score, setScore] = React.useState(0);

  const onRegionClick = (e: React.MouseEvent<SVGElement>, countryCode: string) => {
    setShowInput(true);
    setSelectedRegion(countryCode);
  };

  const onUserCountryGuessSubmitted = (userGuess: string) => {
    if (getGuessResult(userGuess, selectedRegion)) {
      setScore(score + 1);
      setGuessCorrectly(prevState => {
        return {
          ...prevState,
          [selectedRegion]: score,
        }
      });
    } else {
      setShowAnswer(true);
    }

    //reset
    setShowInput(false);
    // setSelectedRegion('');
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
        onUserCountryGuessSubmitted={onUserCountryGuessSubmitted} />
      }
      <GuessCorrectlyList
        guessCorrectly={guessCorrectly}
      />
      {showAnswer && !showInput && <ShowRegionName
        regionName={selectedRegion}
      />
      }
      <p>Your score: {score}</p>
    </React.Fragment>
  );
};
