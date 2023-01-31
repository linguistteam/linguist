import { AuthError, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { FirebaseAuthError } from '@stores/errors/authError';
import mapFirebaseAuthErrors from './mapFirebaseAuthErrors';
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
  sendPasswordResetEmail(auth, email)
    .then(() => {
      navigation.navigate('AUTHENTICATION', { passwordReset: true, email });
    })
    .catch((error: AuthError) => {
      console.error('The following error has occurred: ', error.code);
      setError({ errorMessage: mapFirebaseAuthErrors(error.code), errorCode: error.code });
    });
};

export default handleSendPasswordResetEmail;
