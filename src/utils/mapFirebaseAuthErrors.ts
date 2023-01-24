import { EN } from '@assets/strings';

// TODO: Map all possible Firebase error messages.
const mapFirebaseAuthErrors = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return EN.FIREBASE_AUTH_ERRORS.EMAIL_IS_INVALID;
    case 'auth/invalid-password':
      return EN.FIREBASE_AUTH_ERRORS.INVALID_PASSWORD;
    case 'auth/wrong-password':
      return EN.FIREBASE_AUTH_ERRORS.WRONG_PASSWORD;
    case 'auth/user-not-found':
      return EN.FIREBASE_AUTH_ERRORS.USER_NOT_FOUND;
    default:
      return '';
  }
};

export default mapFirebaseAuthErrors;
