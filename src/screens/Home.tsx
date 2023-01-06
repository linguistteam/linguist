import { Heading } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@common';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';
import { auth } from '../../firebaseConfig';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  console.log('auth', auth.currentUser?.email);

  return (
    <SafeAreaView>
      <Heading size="md">Logged in as: {auth.currentUser?.email}</Heading>
      <Button onPress={() => navigation.navigate('SIGN_UP')} text="Sign Up" />
      <Button onPress={() => navigation.navigate('TRANSLATOR_PROFILE')} text="Translator Profile" />
      <Button onPress={() => navigation.navigate('CLIENT_PROFILE')} text="Client Profile" />
    </SafeAreaView>
  );
};

export default Home;
