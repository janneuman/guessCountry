import cs from '../translations/cs';

interface TranslationObj {
  [key: string]: string;
}

interface LanguageList {
  [key: string]: TranslationObj;
}

const getLanguageList = (): LanguageList => ({
    cs,
});

export const getCountryTranslation = (countryCode: string, language = 'cs'): string => {
  const languageList = getLanguageList();

  let error = '';

  if (!languageList[language]) {
    error = 'Unsupported translation language'
    console.error(error)
    throw error;
  }

  if (!languageList[language][countryCode]) {
    error = 'Unknown country code for translation';
    console.error(error)
    throw error;
  }

  return languageList[language][countryCode];
};

export interface Suggestion {
  label: string;
}

export const getTranslationRegionSuggestionList = (language = 'cs'): Suggestion[] => {
  const languageList = getLanguageList();

  return Object.keys(languageList[language]).map(countryCode => (
    { label: languageList[language][countryCode] }
  ));
};
