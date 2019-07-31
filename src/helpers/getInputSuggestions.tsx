import { deburr } from 'lodash';
import {getTranslationRegionSuggestionList, Suggestion} from "./translateCountry";

const suggestionListSize = 5;
const suggestions: Suggestion[] = getTranslationRegionSuggestionList('cs');

export const getInputSuggestions = (value: string, { showEmpty = false } = {}) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

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
