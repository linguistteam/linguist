import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from '@screens/StackNavigator';
import { auth } from '../../firebaseConfig';
import { useUserStore } from '@stores/user';

// TODO: Cleanup logs/Polish
/* Handle checking if user is logged in */
/* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/start */
const useCheckLoggedInState = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const user = useUserStore((state) => state.user);

  auth.onAuthStateChanged(() => {
    // TODO: Figure out accurate check of if user is logged in
    if (user.email) {
      console.log('user logged in');
      navigation.replace('HOME');
    } else {
      console.log('user is logged out');
    }
  });
};

export default useCheckLoggedInState;
