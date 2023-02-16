import { EN } from '@assets/strings';

const mapFirebaseAuthErrors = (errorCode: string) => {
  // NOTE: Not sure if all of these Internal Server Error mappings are
  // needed (ex. auth/invalid-user-import, auth/missing-android-pkg-name).
  // Just adding all of the Firebase Auth errors for now:
  // https://firebase.google.com/docs/auth/admin/errors

  switch (errorCode) {
    case 'auth/claims-too-large':
    case 'auth/insufficient-permission':
    case 'auth/internal-error':
    case 'auth/invalid-argument':
    case 'auth/invalid-claims':
    case 'auth/invalid-continue-uri':
    case 'auth/invalid-creation-time':
    case 'auth/invalid-credential':
    case 'auth/invalid-disabled-field':
    case 'auth/invalid-dynamic-link-domain':
    case 'auth/invalid-email-verified':
    case 'auth/invalid-hash-algorithm':
    case 'auth/invalid-hash-block-size':
    case 'auth/invalid-hash-derived-key-length':
    case 'auth/invalid-hash-key':
    case 'auth/invalid-hash-memory-cost':
    case 'auth/invalid-hash-parallelization':
    case 'auth/invalid-hash-rounds':
    case 'auth/invalid-hash-salt-separator':
    case 'auth/invalid-last-sign-in-time':
    case 'auth/invalid-page-token':
    case 'auth/invalid-password-hash':
    case 'auth/invalid-password-salt':
    case 'auth/invalid-provider-data':
    case 'auth/invalid-provider-id':
    case 'auth/invalid-oauth-responsetype':
    case 'auth/invalid-session-cookie-duration':
    case 'auth/invalid-uid':
    case 'auth/invalid-user-import':
    case 'auth/maximum-user-count-exceeded':
    case 'auth/missing-android-pkg-name':
    case 'auth/missing-continue-uri':
    case 'auth/missing-hash-algorithm':
    case 'auth/missing-ios-bundle-id':
    case 'auth/missing-uid':
    case 'auth/missing-oauth-client-secret':
    case 'auth/operation-not-allowed':
    case 'auth/project-not-found':
    case 'auth/reserved-claims':
    case 'auth/session-cookie-expired':
    case 'auth/uid-already-exists':
    case 'auth/unauthorized-continue-uri':
      return EN.GENERAL_ERRORS.INTERNAL_SERVER_ERROR;
    case 'auth/email-already-exists':
    case 'auth/email-already-in-use':
      return EN.AUTH_ERRORS.EMAIL_ALREADY_IN_USE;
    case 'auth/phone-number-already-exists':
      return EN.AUTH_ERRORS.PHONE_NUMBER_ALREADY_EXISTS;
    case 'auth/id-token-expired':
      return EN.AUTH_ERRORS.AUTH_TOKEN_EXPIRED;
    case 'auth/id-token-revoked':
      return EN.AUTH_ERRORS.AUTH_TOKEN_REVOKED;
    case 'auth/invalid-id-token':
      return EN.AUTH_ERRORS.AUTH_TOKEN_INVALID;
    case 'auth/session-cookie-revoked':
      return EN.AUTH_ERRORS.SESSION_COOKIE_REVOKED;
    case 'auth/invalid-email':
      return EN.AUTH_ERRORS.INVALID_EMAIL;
    case 'auth/invalid-password':
      return EN.AUTH_ERRORS.INVALID_PASSWORD;
    case 'auth/invalid-phone-number':
      return EN.AUTH_ERRORS.INVALID_PHONE_NUMBER;
    case 'auth/invalid-photo-url':
      return EN.AUTH_ERRORS.INVALID_PHOTO_URL;
    case 'auth/wrong-password':
      return EN.AUTH_ERRORS.WRONG_PASSWORD;
    case 'auth/user-not-found':
      return EN.AUTH_ERRORS.USER_NOT_FOUND;
    case 'auth/invalid-display-name':
      return EN.AUTH_ERRORS.INVALID_DISPLAY_NAME;
    default:
      return '';
  }
};

export default mapFirebaseAuthErrors;
