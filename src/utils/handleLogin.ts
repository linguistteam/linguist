import { AuthError, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// TODO: Cleanup logs/Polish
/* Handle logging user in */
const handleLogin = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('logged in user', user);
    })
    .catch((error: AuthError) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('log in errorCode', errorCode);
      console.log('log in errorMessage', errorMessage);
    });
};

export default handleLogin;
