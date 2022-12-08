/* Takes languages array of two users and returns common language(s) */
const languageMatch = (languagesArray1: string[], languagesArray2: string[], language: string) =>
  languagesArray1.some(() => languagesArray2.includes(language));

export default languageMatch;
