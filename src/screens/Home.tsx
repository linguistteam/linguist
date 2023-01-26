import { Button, Heading, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';
import { useUserStore } from '@stores/user';
import { handleLogout } from '@utils';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList>>();
  const user = useUserStore((state) => state.user);
  const resetUser = useUserStore((state) => state.reset);

  return (
    <SafeAreaView>
      <Heading size="md">Logged in as: {user.email}</Heading>

      <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
        <Button onPress={() => navigation.navigate('TRANSLATOR_PROFILE')}>
          Translator Profile
        </Button>
        <Button onPress={() => navigation.navigate('CLIENT_PROFILE')}>Client Profile</Button>
        <Button onPress={() => handleLogout({ resetUser })}>Log Out</Button>
      </Stack>
    </SafeAreaView>
  );
};

export default Home;
