import { auth } from '../../../firebaseConfig';
import { AuthError, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

interface HandleUpdatePasswordProps {
  password: string;
}

const handleUpdatePassword = ({ password }: HandleUpdatePasswordProps) => {
  if (auth.currentUser && auth.currentUser.email) {
    const credentials = EmailAuthProvider.credential(auth.currentUser.email, password);

    reauthenticateWithCredential(auth.currentUser, credentials)
      .then(() => {
        console.log('User reauthenticated!');
      })
      .catch((error: AuthError) => {
        console.error('The following error has occurred: ', error.code);
      });
  }
};

export default handleUpdatePassword;
