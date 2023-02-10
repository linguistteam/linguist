import { useState } from 'react';
import { Button, Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';
import { useUserStore } from '@stores/user';
import { useFirebaseErrorStore } from '@stores/errors/firebaseError';
import { useLoadingStore } from '@stores/loading';
import {
  handleLogout,
  handleUpdateDisplayName,
  handleUpdateProfilePhoto,
  imagePicker,
} from '@utils';
import { ProfileImage } from '@components/userprofiles';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList, 'HOME'>>();
  const user = useUserStore((state) => state.user);
  const setError = useFirebaseErrorStore((state) => state.setError);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const resetUser = useUserStore((state) => state.reset);

  // NOTE: For profile updates
  const [displayName, setDisplayName] = useState(user.displayName ?? '');
  const [photo, setPhoto] = useState<string | null>(null);

  return (
    <SafeAreaView>
      <Heading size="md" textAlign="center">
        Profile
      </Heading>
      <Heading size="sm" textAlign="center">
        Logged in as: {user.displayName}
      </Heading>
      <Heading size="sm" textAlign="center">
        Email: {user.email}
      </Heading>
      <ProfileImage name={user.displayName} profileImage={user.photoURL} />

      <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
        <Input
          variant="outline"
          placeholder="Display Name"
          value={displayName}
          onChangeText={(text) => setDisplayName(text)}
          type="text"
        />
        <Button onPress={() => handleUpdateDisplayName({ displayName, setError, setLoading })}>
          Update display name
        </Button>
        {/* NOTE: Add `void` keyword to tell `no-floating-promises` rule to ignore unhandled rejection */}
        {/* Docs here: https://typescript-eslint.io/rules/no-misused-promises/#checksvoidreturn */}
        <Button onPress={() => void imagePicker({ setPhoto })}>Select profile photo</Button>
        {photo && (
          <Button onPress={() => void handleUpdateProfilePhoto({ photo, setError, setLoading })}>
            Update profile photo
          </Button>
        )}
      </Stack>

      <Heading size="sm" textAlign="center" mt={10}>
        Navigation
      </Heading>
      <Stack space={4} w="75%" maxW="300px" mx="auto" alignItems="center">
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
