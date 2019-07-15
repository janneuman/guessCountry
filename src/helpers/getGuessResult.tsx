import { deburr } from 'lodash';
import {getCountryTranslation} from './translateCountry';

export const getGuessResult = (userGuess: string, selectedRegion: string): boolean => {

  try {
    const formattedUserGuess = deburr(userGuess.trim()).toLowerCase();
    const formattedTranslation = deburr(getCountryTranslation(selectedRegion)).toLowerCase();

    return formattedTranslation === formattedUserGuess;

  } catch (error) {

    return false;
  }
};
