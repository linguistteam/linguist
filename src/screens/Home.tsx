import { Heading, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthError } from 'firebase/auth';
import { Button } from '@common';
import { StackNavigatorList } from './StackNavigator';
import { auth } from '../../firebaseConfig';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

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
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('logout errorCode', errorCode);
        console.log('logout errorMessage', errorMessage);
      });
  };

  return (
    <SafeAreaView>
      <Heading size="md">Logged in as: {auth.currentUser?.email}</Heading>

      <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
        <Button onPress={() => navigation.navigate('SIGN_UP')} text="Sign Up" />
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
