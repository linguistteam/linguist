import { useState } from 'react';
import { Button, Heading, Input, Text, ScrollView, Stack } from 'native-base';
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
  handleUpdatePassword,
  handleUpdateProfilePhoto,
  imagePicker,
} from '@utils';
import { ProfileImage } from '@components/userprofiles';
import Colors from '@assets/colors';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList, 'HOME'>>();
  const user = useUserStore((state) => state.user);
  const setError = useFirebaseErrorStore((state) => state.setError);
  const firebaseError = useFirebaseErrorStore((state) => state.error);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const resetUser = useUserStore((state) => state.reset);

  // NOTE: For profile updates
  const [displayName, setDisplayName] = useState(user.displayName ?? '');
  const [photo, setPhoto] = useState<string | null>(null);

  // NOTE: For account updates
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <SafeAreaView>
      <ScrollView>
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
          <Text color={Colors.error}>{firebaseError.errorMessage}</Text>

          <Heading size="sm" textAlign="center">
            Personal Info
          </Heading>

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

        <Stack space={4} w="75%" maxW="300px" mx="auto" mt={10} alignItems="center">
          <Heading size="sm" textAlign="center">
            Account Info
          </Heading>

          {/* TODO: Pop up a modal telling the user their password was changed successfully */}
          {/* TODO: Add Confirm New Password field and validate to make sure fields match */}
          <Input
            variant="outline"
            placeholder="Current Password"
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
            type="text"
          />

          <Input
            variant="outline"
            placeholder="New Password"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
            type="text"
          />

          <Button
            onPress={() =>
              handleUpdatePassword({ currentPassword, newPassword, setError, setLoading })
            }
          >
            Update password
          </Button>
        </Stack>

        <Stack space={4} w="75%" maxW="300px" mx="auto" mt={10} alignItems="center">
          <Heading size="sm" textAlign="center">
            Navigation
          </Heading>

          <Button onPress={() => navigation.navigate('TRANSLATOR_PROFILE')}>
            Translator Profile
          </Button>
          <Button onPress={() => navigation.navigate('CLIENT_PROFILE')}>Client Profile</Button>
          <Button onPress={() => handleLogout({ resetUser, setError, setLoading })}>Log Out</Button>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
