import { auth } from '../../../firebaseConfig';
import {
  AuthError,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { FirebaseError } from '@stores/errors/firebaseError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle updating user password */
/* Learn more about updating user password: https://firebase.google.com/docs/auth/web/manage-users#set_a_users_password */

interface HandleUpdatePasswordProps {
  currentPassword: string;
  newPassword: string;
  setError: ({ errorMessage, errorCode }: FirebaseError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleUpdatePassword = ({
  currentPassword,
  newPassword,
  setError,
  setLoading,
}: HandleUpdatePasswordProps) => {
  const user = auth.currentUser;

  if (user && user.email) {
    setLoading({ isLoading: true });

    const credentials = EmailAuthProvider.credential(user.email, currentPassword);

    reauthenticateWithCredential(user, credentials)
      .then(() => {
        // User reauthenticated
        return updatePassword(user, newPassword);
      })
      .then(() => {
        setLoading({ isLoading: false });
      })
      .catch((error: AuthError) => {
        console.error('The following error has occurred: ', error.code);
        setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
        setLoading({ isLoading: false });
      });
  }
};

export default handleUpdatePassword;
