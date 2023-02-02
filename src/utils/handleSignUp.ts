import { AuthError, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { FirebaseAuthError } from '@stores/errors/authError';
import { Loading } from '@stores/loading';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle signing user up */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

interface HandleSignUpProps {
  displayName: string;
  email: string;
  password: string;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  setLoading: ({ isLoading }: Loading) => void;
}

const handleSignUp = ({
  displayName,
  email,
  password,
  setError,
  setLoading,
}: HandleSignUpProps) => {
  setLoading({ isLoading: true });

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName,
      })
        .then(() => {
          setLoading({ isLoading: false });
        })
        .catch((error: AuthError) => {
          console.error('The following error has occurred: ', error.code);
          setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
          setLoading({ isLoading: false });
        });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
      setLoading({ isLoading: false });
    });
};

export default handleSignUp;
