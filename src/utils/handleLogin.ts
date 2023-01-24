import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { User } from '@stores/user';

// TODO: Cleanup logs/Polish
// TODO: Add validation (i.e. don't allow empty form, invalid email, etc)
/* Handle logging user in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */

interface HandleLoginProps {
  email: string;
  password: string;
  setUser: ({ email, uid }: User) => void;
}

const handleLogin = ({ email, password, setUser }: HandleLoginProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // TODO: If !email, throw some error and don't log user in
      const user = userCredential.user;
      const { email, uid } = user;
      const userEmail = email ?? '';

      setUser({ email: userEmail, uid });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
    });
};

export default handleLogin;
