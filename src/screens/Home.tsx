import { Button, Heading, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';
import { useUserStore } from '@stores/user';
import { useAuthErrorStore } from '@stores/errors/authError';
import { useLoadingStore } from '@stores/loading';
import { handleLogout, handleUpdateProfilePhoto } from '@utils';
import { ProfileImage } from '@components/userprofiles';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList, 'HOME'>>();
  const user = useUserStore((state) => state.user);
  const setError = useAuthErrorStore((state) => state.setError);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const resetUser = useUserStore((state) => state.reset);

  const photoURL =
    'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

  return (
    <SafeAreaView>
      <Heading size="md">Logged in as: {user.displayName}</Heading>
      <Heading size="md">Email: {user.email}</Heading>
      <ProfileImage name="Test User" profileImage={photoURL} />

      <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
        <Button onPress={() => handleUpdateProfilePhoto({ photoURL, setError, setLoading })}>
          Update profile photo
        </Button>
        <Button onPress={() => navigation.navigate('TRANSLATOR_PROFILE')}>
          Translator Profile
        </Button>
        <Button onPress={() => navigation.navigate('CLIENT_PROFILE')}>Client Profile</Button>
        <Button onPress={() => handleLogout({ resetUser, setError, setLoading })}>Log Out</Button>
      </Stack>
    </SafeAreaView>
  );
};

export default Home;
