import { AuthError, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { User } from '@stores/user';
import { FirebaseAuthError } from '@stores/errors/authError';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';

/* Handle signing user up */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */
interface HandleSignUpProps {
  email: string;
  password: string;
  setUser: ({ email, uid }: User) => void;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
}

// TODO: Cleanup logs/Polish
// TODO: Add validation (i.e. don't allow empty form, invalid email, etc)
const handleSignUp = ({ email, password, setUser, setError }: HandleSignUpProps) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // TODO: If !email, throw some error and don't log user in
      const user = userCredential.user;
      const { email, uid } = user;
      const userEmail = email ?? '';

      console.log({ email, uid });
      setUser({ email: userEmail, uid });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
    });
};

export default handleSignUp;
