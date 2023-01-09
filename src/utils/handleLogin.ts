import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// TODO: Cleanup logs/Polish
// TODO: Add validation (i.e. don't allow empty form, invalid email, etc)
/* Handle logging user in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */
const handleLogin = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // TODO: Send relevant user data to Redux state
      const user = userCredential.user;
      console.log('user', user);
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.message);
    });
};

export default handleLogin;
