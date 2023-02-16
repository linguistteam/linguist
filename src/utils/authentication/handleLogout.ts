import { AuthError } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { FirebaseError } from '@stores/errors/firebaseError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle logging out user */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/password-auth */

interface HandleLogoutProps {
  resetUser: () => void;
  setError: ({ errorMessage, errorCode }: FirebaseError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleLogout = ({ resetUser, setError, setLoading }: HandleLogoutProps) => {
  setLoading({ isLoading: true });

  auth
    .signOut()
    .then(() => {
      resetUser();
      setLoading({ isLoading: false });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
      setLoading({ isLoading: false });
    });
};

export default handleLogout;
