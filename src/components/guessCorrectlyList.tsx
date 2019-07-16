import * as React from "react";
import Flag from 'react-country-flags';
import {getCountryTranslation} from '../helpers/translateCountry';
import {makeStyles} from "@material-ui/core/styles";

interface Props {
  guessCorrectly: { [key: string]: string };
  selectedRegion: string;
}

const useStyles = makeStyles({
  container: {
    listStyleType: 'none',
  },
  item: {
    display: 'flex',
    lineHeight: '30px',
  },
  normal: {
    fontWeight: 300,
  },
  selected: {
    fontWeight: 800,
  },
  flag: {
    height: '30px',
  },
  regionName: {
    paddingLeft: 20,
  },
});

export const GuessCorrectlyList = (props: Props) => {
  const classes = useStyles({});
  const isSelected = (current: string): boolean => current === props.selectedRegion;

  return <ul className={classes.container}>
    {Object.keys(props.guessCorrectly).reverse().map((countryCode: string, index) => {
      return <li
        key={index}
        className={`${classes.item} ${isSelected(countryCode) ? classes.selected : classes.normal}`}>
        <Flag
          className={classes.flag}
          asSquare={true}
          country={countryCode.toLocaleLowerCase()}
        />
        <span className={classes.regionName}>{getCountryTranslation(countryCode)}</span>
      </li>
    })}
  </ul>
};
