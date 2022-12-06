import { useState } from 'react';
import { Box, Flex, Heading, ScrollView, Text } from 'native-base';
import { Button } from '@common';
import { ProfileImage, UserLocation, UserRating } from '@components/userprofiles';
import { translatorProfileStyles } from './styles';

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

      <Box style={translatorProfileStyles.profileContent} shadow={2}>
        <Flex direction="row" justifyContent="space-between">
          <Heading size="2xl">{name}</Heading>

          <Button onPress={() => console.log('Pressed!')} text="Hire" width={100} />
        </Flex>

        <UserLocation />

        <UserRating />

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. In pellentesque massa placerat duis ultricies lacus sed.
        </Text>
      </Box>
    </ScrollView>
  );
};

export default TranslatorProfile;
