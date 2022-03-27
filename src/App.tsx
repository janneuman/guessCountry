import { useState, MouseEvent } from 'react';
import { Autocomplete } from './components/AutocompleteInput/autocomplete';
import { GuessCorrectlyList } from './components/guessCorrectlyList';
import { Map } from './components/map';
import { ShowRegionName } from './components/showRegionName';
import { Score } from './components/score';
import { getGuessResult } from './helpers/getGuessResult';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  map: {
    width: '80%',
    height: '500px',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
  },
});

export default function App() {
  const [showInput, setShowInput] = useState(false);
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [guessCorrectly, setGuessCorrectly] = useState({});
  const [score, setScore] = useState(0);

  const onRegionClick = (e: MouseEvent<SVGElement>, regionCode: string) => {
    const alreadyGuessed = Object.keys(guessCorrectly).filter(
      (region) => region === regionCode,
    );
    const showGuessInput = !alreadyGuessed.length;

    setShowInput(showGuessInput);
    setSelectedRegion(regionCode);
    setShowAnswer(false);
    setShowCorrectMessage(false);
    setShowIncorrectMessage(false);
  };

  const onUserRegionGuessSubmitted = (userGuess: string) => {
    if (getGuessResult(userGuess, selectedRegion)) {
      setScore(score + 10);
      setGuessCorrectly((prevState) => ({
        ...prevState,
        [selectedRegion]: score,
      }));
      setShowCorrectMessage(true);
    } else {
      setScore(score - 2);
      setShowIncorrectMessage(true);
      setShowAnswer(true);
    }

    //reset
    setShowInput(false);
    // setSelectedRegion('');
  };

  const classes = useStyles({});
  return (
    <div className={classes.container}>
      <div className={classes.map}>
        <Map
          onRegionClick={onRegionClick}
          highlightCountries={guessCorrectly}
          selectedRegion={selectedRegion}
          focusOn={selectedRegion}
        />
      </div>
      <div className={classes.sidebar}>
        <Score score={score} />

        {showInput && (
          <Autocomplete
            onUserRegionGuessSubmitted={onUserRegionGuessSubmitted}
          />
        )}

        {showCorrectMessage && (
          <div>
            <span>Yes! that's correct</span>
          </div>
        )}

        {showIncorrectMessage && (
          <div>
            <span>No! that's incorrect</span>
          </div>
        )}

        {showAnswer && <ShowRegionName regionName={selectedRegion} />}

        <GuessCorrectlyList
          guessCorrectly={guessCorrectly}
          selectedRegion={selectedRegion}
        />
      </div>
    </div>
  );
}
