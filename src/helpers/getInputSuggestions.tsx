import { deburr } from 'lodash';
// import Fuse from 'fuse.js';
import {getTranslationRegionSuggestionList, Suggestion} from "./translateCountry";

const suggestionListSize = 5;
const suggestions: Suggestion[] = getTranslationRegionSuggestionList('cs');

export const getInputSuggestions = (value: string, { showEmpty = false } = {}) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  // Fuse do not support ASCII searching :-/


  // const fuseOptions: Fuse.FuseOptions<Suggestion> = {
  //   shouldSort: true,
  //   threshold: 0.2,
  //   maxPatternLength: 5,
  //   minMatchCharLength: 2,
  //   keys: ['label'],
  // }
  // const fuse = new Fuse(suggestions, fuseOptions);
  // const result = fuse.search(inputValue);
  //
  // return result;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
      const keep =
        count < suggestionListSize && deburr(suggestion.label).slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
};
