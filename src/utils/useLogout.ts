import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from '@screens/StackNavigator';
import { AuthError } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

// TODO: Cleanup logs/Polish
/* Handle logging out user */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/password-auth */
const useLogout = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

  auth
    .signOut()
    .then(() => {
      navigation.replace('SIGN_UP');
    })
    .catch((error: AuthError) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('logout errorCode', errorCode);
      console.log('logout errorMessage', errorMessage);
    });
};

export default useLogout;
