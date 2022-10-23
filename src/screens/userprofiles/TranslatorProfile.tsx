import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from '@rneui/base';
import { styles } from './styles';
import { ProfileImage } from '../../components/userprofiles';

const TranslatorProfile = () => {
  // TODO: All values here should be editable by user and passed in from DB
  const name = 'John Doe';

  const [imageBlur, setImageBlur] = useState(false);

  // TODO: Fix blur on Android
  const scrolledPastProfileImage = (contentOffset: { x: number; y: number }) => {
    const reachedMiddleOfImage = 100;

    return contentOffset.y >= reachedMiddleOfImage;
  };

  return (
    <ScrollView
      onScroll={({ nativeEvent }) => {
        if (scrolledPastProfileImage(nativeEvent.contentOffset)) {
          setImageBlur(true);
        } else {
          setImageBlur(false);
        }
      }}
      scrollEventThrottle={400}
    >
      <ProfileImage imageBlur={imageBlur} />

      <View style={styles.profileContent}>
        <Text h1>{name}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.
        </Text>
      </View>
    </ScrollView>
  );
};

export default TranslatorProfile;
