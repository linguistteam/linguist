import { auth } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from '@screens/StackNavigator';

/* Handle checking if user is logged in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */
// TODO: Add proper type
const useCheckLoggedInState = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user logged in');
      navigation.navigate('HOME');
    } else {
      console.log('user is logged out');
    }
  });
};

export default useCheckLoggedInState;
