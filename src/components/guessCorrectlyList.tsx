import * as React from "react";
import {getCountryTranslation} from '../helpers/translateCountry';
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    guessCorrectly: {[key: string]: string};
    selectedRegion: string;
}

const useStyles = makeStyles({
      normal: {
          fontWeight: 300,
      },
      selected: {
          fontWeight: 800,
      },
  });

export const GuessCorrectlyList = (props: Props) => {
    const classes = useStyles({});
    const isSelected = (current: string): boolean => current === props.selectedRegion;

    return <ul>
        {Object.keys(props.guessCorrectly).reverse().map((countryCode: string, index) => {
            return <li
              key={index}
              className={isSelected(countryCode) ? classes.selected : classes.normal}>
                {getCountryTranslation(countryCode)}
            </li>
        })}
    </ul>;
};
