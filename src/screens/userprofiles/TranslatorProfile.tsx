import { Box, Flex, Heading, ScrollView, Text, View } from 'native-base';
import { Button } from '@common';
import { fixedRatingAverage } from '@utils';
import { EN } from '@assets/strings';
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
  name: 'Macauley Chan',
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
  numberOfReviews(combinedReviews) >= 10 && Number(fixedRatingAverage(combinedReviews)) >= 4.5;

const TranslatorProfile = () => {
  return (
    <ScrollView>
      <ProfileImage name={name} profileImage={profileImage} />

      <Box style={translatorProfileStyles.profileContent}>
        <Flex direction="column" alignItems="center">
          <Heading size="xl">{name}</Heading>

          <UserLocation location={location} />
        </Flex>

        <Flex direction="row" justifyContent={isTopLinguist ? 'space-between' : 'center'}>
          <UserRating reviews={reviews} />

          <TopLinguistBadge isTopLinguist={isTopLinguist} />
        </Flex>

        <View style={translatorProfileStyles.hireButton}>
          <Button onPress={() => console.log('Pressed!')} text={EN.TRANSLATOR_PROFILE.HIRE} />
        </View>

        <Text>{bio}</Text>

        <Languages languages={languages} />

        <Reviews isTranslator={isTranslator} reviews={reviews} />
      </Box>
    </ScrollView>
  );
};

export default TranslatorProfile;
