import * as React from 'react';
import {Autocomplete} from './components/AutocompleteInput/autocomplete';
import {GuessCorrectlyList} from './components/guessCorrectlyList';
import {Map} from './components/map';
import {ShowRegionName} from './components/showRegionName';
import {Score} from './components/score';
import {getGuessResult} from './helpers/getGuessResult';

export const App = () => {
  const [showInput, setShowInput] = React.useState(false);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = React.useState('');
  const [guessCorrectly, setGuessCorrectly] = React.useState({});
  const [score, setScore] = React.useState(0);

  const onRegionClick = (e: React.MouseEvent<SVGElement>, regionCode: string) => {
    const alreadyGuessed = Object.keys(guessCorrectly).filter(region => region === regionCode);
    const showGuessInput = !alreadyGuessed.length;

    setShowInput(showGuessInput);
    setSelectedRegion(regionCode);
    setShowAnswer(false);
  };

  const onUserRegionGuessSubmitted = (userGuess: string) => {
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
      {showInput && <Autocomplete
        onUserRegionGuessSubmitted={onUserRegionGuessSubmitted}
      />}
      {showAnswer && <ShowRegionName
        regionName={selectedRegion}
      />
      }
      <GuessCorrectlyList
        guessCorrectly={guessCorrectly}
        selectedRegion={selectedRegion}
      />
      <Score score={score}/>
    </React.Fragment>
  );
};
