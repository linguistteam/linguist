import { useState } from 'react';
import { Alert, Button, Heading, Input, Stack } from 'native-base';
import { collection, doc, getDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import * as DocumentPicker from 'expo-document-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';
import { useUserStore } from '@stores/user';
import { useAuthErrorStore } from '@stores/errors/authError';
import { useLoadingStore } from '@stores/loading';
import { auth, db } from '../../firebaseConfig';
import { handleLogout, handleUpdateDisplayName, handleUpdateProfilePhoto } from '@utils';
import { ProfileImage } from '@components/userprofiles';
import { PermissionsAndroid } from 'react-native';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList, 'HOME'>>();
  const user = useUserStore((state) => state.user);
  const setError = useAuthErrorStore((state) => state.setError);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const resetUser = useUserStore((state) => state.reset);

  const usersRef = collection(db, 'users');

  // const docRef = getDoc(doc(db, 'users', user.uid));

  // docRef.then((docSnap) => {
  //   if (docSnap.exists()) {
  //     console.log('Document data:', docSnap.data());
  //   } else {
  //     console.log('No such document!');
  //   }
  // });

  // TODO: Move to own file
  const [photo, setPhoto] = useState(null);

  const checkPermissions = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );

      if (!result) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'You need to give storage permission to download and save the file',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          return true;
        } else {
          Alert.alert('Error', I18n.t('PERMISSION_ACCESS_FILE'));

          console.log('Camera permission denied');
          return false;
        }
      } else {
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  async function selectFile() {
    try {
      const result = await checkPermissions();

      if (result) {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: false,
          type: 'image/*',
        });

        if (result.type === 'success') {
          // Printing the log realted to the file
          console.log('res : ' + JSON.stringify(result));
          // Setting the state to show single file attributes
          setPhoto(result);
        }
      }
    } catch (err) {
      setPhoto(null);
      console.warn(err);
      return false;
    }
  }

  // NOTE: For profile updates
  const [displayName, setDisplayName] = useState(user.displayName ?? '');
  const [base64PhotoURL, setBase64PhotoURL] = useState('');

  const handleUpdatePhotoUrl = (photo: string) => {
    updateProfile(auth.currentUser, {
      photoURL: photo.uri,
    })
      .then(() => console.log('upload success!'))
      .catch((error: any) => {
        console.error('Error occurred:', error);
      });
  };

  console.log('photo', photo);
  console.log('user photo', user.photoURL);

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
      {/* <ProfileImage name={user.displayName} profileImage={photo?.uri} /> */}

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

        <Input
          variant="outline"
          placeholder="Photo URL"
          value={base64PhotoURL}
          onChangeText={(text) => setBase64PhotoURL(text)}
          type="text"
        />
        <Button
          onPress={() =>
            handleUpdateProfilePhoto({ photoURL: base64PhotoURL, setError, setLoading })
          }
        >
          Update profile photo
        </Button>

        <Button onPress={selectFile}>Select photo</Button>
        <Button onPress={handleUpdatePhotoUrl}>Upload photo</Button>
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
