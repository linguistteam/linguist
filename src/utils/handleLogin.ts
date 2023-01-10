import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { User } from 'src/stores/user';

// TODO: Cleanup logs/Polish
// TODO: Add validation (i.e. don't allow empty form, invalid email, etc)
/* Handle logging user in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

interface HandleLoginProps {
  email: string;
  password: string;
  setUser: ({ email, uid }: User) => void;
}

// TODO: Add proper type for setUser
const handleLogin = ({ email, password, setUser }: HandleLoginProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // TODO: Send relevant user data to Redux state
      // TODO: If !email, throw some error and don't log user in
      const user = userCredential.user;
      const { email, uid } = user;
      const userEmail = email ?? '';

      console.log({ email, uid });
      setUser({ email: userEmail, uid });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.message);
    });
};

export default handleLogin;
