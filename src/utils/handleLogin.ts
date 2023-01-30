import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { FirebaseAuthError } from '@stores/errors/authError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle logging user in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

interface HandleLoginProps {
  email: string;
  password: string;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleLogin = ({ email, password, setError, setLoading }: HandleLoginProps) => {
  setLoading({ isLoading: true });

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      setLoading({ isLoading: false });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
      setLoading({ isLoading: false });
    });
};

export default handleLogin;
