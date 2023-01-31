import { AuthError, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { FirebaseAuthError } from '@stores/errors/authError';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';
import { PasswordResetNavigate } from '@screens/authentication/types';

/* Handle sending password reset email to user */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email */

interface HandleSendPasswordResetEmailProps {
  email: string;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  navigate: ({ name, params }: PasswordResetNavigate) => void;
}

// TODO: Set some state here that denotes that password reset
// email has been sent. This state will conditionally route the
// user back to the Auth page
const handleSendPasswordResetEmail = ({
  email,
  setError,
  navigate,
}: HandleSendPasswordResetEmailProps) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('email sent!');
      navigate('AUTHENTICATION', { passwordReset: true });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
    });
};

export default handleSendPasswordResetEmail;
