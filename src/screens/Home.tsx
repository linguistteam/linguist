import { Heading, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@common';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';
import { auth } from '../../firebaseConfig';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();

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
        <Button onPress={() => console.log('handle sign out')} text="Sign Out" />
      </Stack>
    </SafeAreaView>
  );
};

export default Home;
