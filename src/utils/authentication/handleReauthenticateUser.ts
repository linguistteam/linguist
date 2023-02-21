import { auth } from '../../../firebaseConfig';
import { AuthError, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

// TODO: Pass user enter password as prop
const handleReauthenticateUser = () => {
  if (auth.currentUser && auth.currentUser.email) {
    const password = 'Grab from user input';
    const credentials = EmailAuthProvider.credential(auth.currentUser.email, password);

    reauthenticateWithCredential(auth.currentUser, credentials)
      .then(() => {
        // User reauthenticated
      })
      .catch((error: AuthError) => {
        console.error('The following error has occurred: ', error.code);
      });
  }
};

export default handleReauthenticateUser;
