/* Validates text input length and against regex, returns true or false */
const validateTextInput = (text: string) => {
  // NOTE: Removes special chars and numbers
  const invalidNameRegex = /[-'`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/0-9]/gi;

  if (!!text.trim().length && !invalidNameRegex.test(text)) {
    return true;
  }

  return false;
};

export default validateTextInput;
