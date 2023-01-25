import { EN } from '@assets/strings';

// TODO: Map all possible Firebase error messages.
const mapFirebaseAuthErrors = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/claims-too-large':
      return EN.FIREBASE_AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    case 'auth/email-already-exists':
      return EN.FIREBASE_AUTH_ERRORS.EMAIL_IS_INVALID;
    case 'auth/id-token-expired':
      return EN.FIREBASE_AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    case 'auth/id-token-revoked':
      return EN.FIREBASE_AUTH_ERRORS.INTERNAL_SERVER_ERROR;
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
