import {remove as removeAccents} from 'remove-accents';
import {getCountryTranslation} from './translateCountry';

export const getGuessResult = (userGuess: string, selectedCountry: string): boolean => {
  let translation = '';

  try {
    translation = getCountryTranslation(selectedCountry);
  } catch (error) {

    console.error(error)
    return false;
  }

  const formattedUserGuess = removeAccents(userGuess).trim().toLocaleLowerCase();
  const formattedTranslation = removeAccents(translation).toLocaleLowerCase();

  return formattedTranslation === formattedUserGuess;
};
