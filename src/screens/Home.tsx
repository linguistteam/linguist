import { Heading, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthError } from 'firebase/auth';
import { Button } from '@common';
import { StackNavigatorList } from './StackNavigator';
import { auth } from '../../firebaseConfig';

// TODO: Create alias
import useUserStore from '../stores/user';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const user = useUserStore((state) => state.user);

  console.log('user zustand', user);

  // TODO: Cleanup logs/Polish
  /* Handle logging out user */
  /* Learn more about Firebase Auth: https://firebase.google.com/docs/auth/web/password-auth */
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate('SIGN_UP');
        console.log('user is logging out...');
      })
      .catch((error: AuthError) => {
        console.error('The following error has occurred: ', error.message);
      });
  };

  return (
    <SafeAreaView>
      <Heading size="md">Logged in as: {auth.currentUser?.email}</Heading>

      <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
        <Button
          onPress={() => navigation.navigate('TRANSLATOR_PROFILE')}
          text="Translator Profile"
        />
        <Button onPress={() => navigation.navigate('CLIENT_PROFILE')} text="Client Profile" />
        <Button onPress={() => handleLogout()} text="Log Out" />
      </Stack>
    </SafeAreaView>
  );
};

export default Home;
