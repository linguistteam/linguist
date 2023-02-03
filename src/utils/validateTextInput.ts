/* Validates text input length and against regex, returns true or false */
const validateTextInput = (text: string) => {
  const specialCharsRegex = /[-'`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/0-9]/gi;

  if (text.trim().length && !specialCharsRegex.test(text)) {
    return true;
  }

  return false;
};

export default validateTextInput;
