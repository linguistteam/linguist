import * as ImagePicker from 'expo-image-picker';

interface ImagePickerProps {
  setPhoto: (value: string | null | ((prevVar: string | null) => string | null)) => void;
}

const imagePicker = async ({ setPhoto }: ImagePickerProps) => {
  // No permissions request is necessary for launching the image library
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    const photoURI = result.assets[0].uri;
    setPhoto(photoURI);
  }
};

export default imagePicker;
