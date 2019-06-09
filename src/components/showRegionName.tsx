import * as React from "react";
import {getCountryTranslation} from '../helpers/translateCountry';

interface Props {
  regionName: string;
}

export const ShowRegionName = (props: Props) => {
  const [showRegionName, setShowRegionName] = React.useState(false);
  const [translatedRegionName, setTranslatedRegionName] = React.useState('');


  const onShowRegionName = (e: React.MouseEvent<HTMLButtonElement>): void => {
    try {
      const translation = getCountryTranslation(props.regionName);

      setTranslatedRegionName(translation);
      setShowRegionName(true);

    } catch (error) {

      setShowRegionName(false);
    }
  };

  return (
    <React.Fragment>
      {showRegionName && <p>Correct answer is: {translatedRegionName}</p>}
      {!showRegionName && <button onClick={onShowRegionName}>Get answer</button>}
    </React.Fragment>
  );
};
