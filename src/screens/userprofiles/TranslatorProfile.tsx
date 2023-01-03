import { useState } from 'react';
import { Box, Flex, Heading, ScrollView, Text } from 'native-base';
import { Button } from '@common';
import {
  Languages,
  ProfileImage,
  Reviews,
  TopLinguistBadge,
  UserLocation,
  UserRating,
} from '@components/userprofiles';
import reviews from '@assets/dummyData/reviews';
import { ReviewType } from '@components/userprofiles/reviews/Reviews';
import { fixedRatingAverage } from '@utils';
import { translatorProfileStyles } from './styles';

// TODO: Figure out user data structure
// interface TranslatorProfileProps {
//   userId: string;
//   emailAddress: string;
//   firstName: string;
//   lastName: string;
//   profileImage: string;
//   languages: string[];
//   location: string;
//   bio: string;
//   currency: string;
//   isTranslator: boolean;
//   isTopLinguist: boolean;
// }

// TODO: Values here should be editable by user and passed in from DB
// TODO: When user location text length is longer than certain amount of chars, truncate the text
// TODO: Lanugage data coming from DB needs to match ISO 3166-1 alpha-2: https://www.iban.com/country-codes
const user = {
  userId: 'c5ca67d5-a754-465d-add9-7508cfe0d821',
  emailAddress: 'john@getlinguist.app',
  name: 'John Smith',
  profileImage:
    'https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
  languages: ['gb', 'kr', 'jp', 'cn'],
  location: 'Philadelphia, Pennsylvania, USA',
  bio: 'Egestas pretium aenean pharetra nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras faucibus et porttitor ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
  currency: 'usd',
  isTranslator: true,
  isTopLinguist: true,
};

const { name, bio, location, languages, profileImage, isTranslator } = user;

const combinedReviews: ReviewType[] = reviews.fromClients.concat(reviews.fromTranslators);

const numberOfReviews = (array: ReviewType[]) => array.length;

const isTopLinguist =
  numberOfReviews(combinedReviews) >= 10 && fixedRatingAverage(combinedReviews) >= 4.5;

const TranslatorProfile = () => {
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
      <ProfileImage imageBlur={imageBlur} name={name} profileImage={profileImage} />

      <Box style={translatorProfileStyles.profileContent} shadow={2}>
        <Flex direction="row" justifyContent="space-between">
          <Heading size="2xl">{name}</Heading>

          <Button onPress={() => console.log('Pressed!')} text="Hire" width={100} />
        </Flex>

        <UserLocation location={location} />

        <Flex direction="row" justifyContent="space-between">
          <UserRating reviews={reviews} />

          <TopLinguistBadge isTopLinguist={isTopLinguist} />
        </Flex>

        <Text>{bio}</Text>

        <Languages languages={languages} />

        <Reviews isTranslator={isTranslator} reviews={reviews} />
      </Box>
    </ScrollView>
  );
};

export default TranslatorProfile;
