/* Validates email against given regex, returns true or false */
const validateEmail = (email: string) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
};

export default validateEmail;
