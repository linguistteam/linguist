import { AuthError, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { FirebaseAuthError } from '@stores/errors/authError';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';
import { PasswordResetNavigate } from '@screens/authentication/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigatorList } from '@screens/StackNavigator';

/* Handle sending password reset email to user */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email */

interface HandleSendPasswordResetEmailProps {
  email: string;
  setError: ({ errorMessage, errorCode }: FirebaseAuthError) => void;
  navigation: NativeStackScreenProps<StackNavigatorList>;
}

const handleSendPasswordResetEmail = ({
  email,
  setError,
  navigation,
}: HandleSendPasswordResetEmailProps) => {
  navigation.navigate('AUTHENTICATION', { passwordReset: true, email });
  // sendPasswordResetEmail(auth, email)
  //   .then(() => {
  //     console.log('email sent!');
  //     navigation.navigate('AUTHENTICATION', { passwordReset: true });
  //   })
  //   .catch((error: AuthError) => {
  //     console.error('The following error has occurred: ', error.code);
  //     setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
  //   });
};

export default handleSendPasswordResetEmail;
