import { useState } from 'react';
import { Box, Flex, Heading, ScrollView, Text } from 'native-base';
import { Button } from '@common';
import { ProfileImage, TopLinguistBadge, UserLocation, UserRating } from '@components/userprofiles';
import { translatorProfileStyles } from './styles';

const TranslatorProfile = () => {
  // TODO: All values here should be editable by user and passed in from DB
  const name = 'John Doe';
  const bio =
    'Egestas pretium aenean pharetra nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras faucibus et porttitor ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.';

  // TODO: Should be passed in from DB
  const isTopLinguist = true;

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

        <Flex direction="row" justifyContent="space-between">
          <UserRating />

          <TopLinguistBadge isTopLinguist={isTopLinguist} />
        </Flex>

        <Text>{bio}</Text>
      </Box>
    </ScrollView>
  );
};

export default TranslatorProfile;
