import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { User } from '@stores/user';
import { FirebaseAuthError } from '@stores/errors/authError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle logging user in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

interface HandleLoginProps {
  email: string;
  password: string;
  setUser: ({ email, uid }: User) => void;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleLogin = ({ email, password, setUser, setError, setLoading }: HandleLoginProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setLoading({ isLoading: true });
      // TODO: If !email, throw some error and don't log user in
      const user = userCredential.user;
      const { email, uid } = user;
      const userEmail = email ?? '';

      setUser({ email: userEmail, uid });

      setLoading({ isLoading: false });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
      setLoading({ isLoading: false });
    });
};

export default handleLogin;
