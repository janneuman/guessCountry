import cs from '../translations/cs';

export const getCountryTranslation = (countryCode: string, language = 'cs'): string => {
  const languageList = {
    cs,
  };

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
