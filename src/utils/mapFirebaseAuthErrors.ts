import { EN } from '@assets/strings';

// TODO: Map all possible Firebase error messages.
const mapFirebaseAuthErrors = (errorCode: string) => {
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
            return EN.FIREBASE_AUTH_ERRORS.INTERNAL_SERVER_ERROR;
        case 'auth/email-already-exists':
            return EN.FIREBASE_AUTH_ERRORS.EMAIL_ALREADY_EXISTS;
        case 'auth/id-token-expired':
            return EN.FIREBASE_AUTH_ERRORS.AUTH_TOKEN_EXPIRED;
        case 'auth/id-token-revoked':
            return EN.FIREBASE_AUTH_ERRORS.AUTH_TOKEN_REVOKED;
        case 'auth/invalid-id-token':
            return EN.FIREBASE_AUTH_ERRORS.AUTH_TOKEN_INVALID;
        case 'auth/invalid-email':
            return EN.FIREBASE_AUTH_ERRORS.INVALID_EMAIL;
        case 'auth/invalid-password':
            return EN.FIREBASE_AUTH_ERRORS.INVALID_PASSWORD;
        case 'auth/invalid-phone-number':
            return EN.FIREBASE_AUTH_ERRORS.INVALID_PHONE_NUMBER;
        case 'auth/invalid-photo-url':
            return EN.FIREBASE_AUTH_ERRORS.INVALID_PHOTO_URL;
        case 'auth/wrong-password':
            return EN.FIREBASE_AUTH_ERRORS.WRONG_PASSWORD;
        case 'auth/user-not-found':
            return EN.FIREBASE_AUTH_ERRORS.USER_NOT_FOUND;
        case 'auth/invalid-display-name':
            return EN.FIREBASE_AUTH_ERRORS.INVALID_DISPLAY_NAME;
        default:
            return '';
    }
};

export default mapFirebaseAuthErrors;
