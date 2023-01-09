import { AuthError, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// TODO: Cleanup logs/Polish
/* Handle signing user up */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */
const handleSignUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
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

export default handleSignUp;
