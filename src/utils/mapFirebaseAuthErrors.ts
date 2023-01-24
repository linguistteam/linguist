const mapFirebaseAuthErrors = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Email is invalid.';
    default:
      return '';
  }
};

export default mapFirebaseAuthErrors;
