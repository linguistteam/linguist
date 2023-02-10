import { EN } from '@assets/strings';

const mapFirebaseStorageErrors = (errorCode: string) => {
  // Full list of Firebase storage errors:
  // https://firebase.google.com/docs/storage/web/handle-errors

  switch (errorCode) {
    case 'storage/unknown':
    case 'storage/object-not-found':
    case 'storage/bucket-not-found':
    case 'storage/project-not-found':
    case 'storage/quota-exceeded':
    case 'storage/invalid-event-name':
    case 'storage/invalid-url':
    case 'storage/invalid-argument':
    case 'storage/no-default-bucket':
      return EN.GENERAL_ERRORS.INTERNAL_SERVER_ERROR;
    case 'storage/unauthenticated':
      return EN.STORAGE_ERRORS.UNAUTHENTICATED;
    case 'storage/unauthorized':
      return EN.STORAGE_ERRORS.UNAUTHORIZED;
    case 'storage/retry-limit-exceeded':
    case 'storage/invalid-checksum':
    case 'storage/cannot-slice-blob':
    case 'storage/server-file-wrong-size':
      return EN.STORAGE_ERRORS.PLEASE_TRY_AGAIN;
    case 'storage/canceled':
      return EN.STORAGE_ERRORS.ACTION_CANCELED;
    default:
      return '';
  }
};

export default mapFirebaseStorageErrors;
