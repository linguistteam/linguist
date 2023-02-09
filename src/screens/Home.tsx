import { useState } from 'react';
import { Button, Heading, Input, Stack } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorList } from './StackNavigator';
import { useUserStore } from '@stores/user';
import { useAuthErrorStore } from '@stores/errors/authError';
import { useLoadingStore } from '@stores/loading';
import { handleLogout, handleUpdateDisplayName, handleUpdateProfilePhoto } from '@utils';
import { ProfileImage } from '@components/userprofiles';

// TODO: Move to own file
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebaseConfig';
// END move to own file

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorList, 'HOME'>>();
  const user = useUserStore((state) => state.user);
  const setError = useAuthErrorStore((state) => state.setError);
  const setLoading = useLoadingStore((state) => state.setLoading);
  const resetUser = useUserStore((state) => state.reset);

  // NOTE: For profile updates
  const [displayName, setDisplayName] = useState(user.displayName ?? '');
  const [base64PhotoURL, setBase64PhotoURL] = useState('');

  // TODO: Move to own file
  const [photo, setPhoto] = useState<string | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const pickPhoto = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const photoURI = result.assets[0].uri;
      console.log('photoURI', photoURI);
      setPhoto(photoURI);
    }
  };

  // const storageRef = ref(storage, 'images');
  // console.log('storage img', storageRef);

  const uploadImage = async () => {
    if (photo) {
      setUploadingPhoto(true);

      const response = await fetch(photo);
      const blob = await response.blob();
      const fileName = photo.substring(photo.lastIndexOf('/') + 1);
      console.log('fileName', fileName);
      const storageRef = ref(storage, fileName);

      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log('Uploaded file!', snapshot);
      });
    }
  };

  console.log('photo', photo);
  // END move to own file

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
      {/* <ProfileImage name={user.displayName} profileImage={user.photoURL} /> */}
      <ProfileImage name={user.displayName} profileImage={photo} />

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

        <Button onPress={pickPhoto}>Select photo</Button>
        <Button onPress={uploadImage}>Upload photo</Button>
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
