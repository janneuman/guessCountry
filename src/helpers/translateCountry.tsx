import cs from '../translations/cs';

export const getCountryTranslation = (countryCode: string, language = 'cs'): string => {
  const languageList = {
    cs,
  };

  if (!languageList[language]) {
    throw 'Unsupported translation language';
  }

  if (!languageList[language][countryCode]) {
    throw 'Unknown country code for translation';
  }

  return languageList[language][countryCode];
};
