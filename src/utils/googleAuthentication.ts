import { AuthError, signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../../firebaseConfig';

const googleAuthentication = () => {
  signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = provider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      console.log('token', token);
      // @ts-ignore
      console.log('result.user', result.user);
    })
    .catch((error: AuthError) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = provider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential, error });
    });
};

export default googleAuthentication;
