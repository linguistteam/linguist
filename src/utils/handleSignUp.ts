import { AuthError, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// TODO: Cleanup logs/Polish
/* Handle signing user up */
const handleSignUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log('sign up user', user);
    })
    .catch((error: AuthError) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('sign up errorCode', errorCode);
      console.log('sign up errorMessage', errorMessage);
    });
};

export default handleSignUp;
