import { Button, Flex, Heading, ScrollView, Text, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
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
import { translatorProfileReviews } from '@assets/dummyData/reviews';
import { ReviewType } from '@components/userprofiles/reviews/Reviews';
import { globalStyles } from '@constants/styles';
import { useUserStore } from '@stores/user';
import { profileStyles } from './styles';

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

const TranslatorProfile = () => {
  const user = useUserStore((state) => state.user);

  // TODO: Values here should be editable by user and passed in from DB
  // TODO: When user location text length is longer than certain amount of chars, truncate the text
  // TODO: Lanugage data coming from DB needs to match ISO 3166-1 alpha-2: https://www.iban.com/country-codes
  const userData = {
    userId: user.uid,
    emailAddress: user.email,
    name: user?.displayName ?? '',
    profileImage: user.photoURL ?? '',
    languages: ['gb', 'kr', 'jp', 'cn'],
    location: 'Philadelphia, Pennsylvania, USA',
    bio: 'Egestas pretium aenean pharetra nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras faucibus et porttitor ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
    currency: 'yen',
    isTranslator: true,
    isTopLinguist: true,
  };

  const { name, bio, location, languages, profileImage, isTranslator } = userData;

  const combinedReviews: ReviewType[] = translatorProfileReviews.fromClients.concat(
    translatorProfileReviews.fromTranslators,
  );

  const numberOfReviews = (array: ReviewType[]) => array.length;

  const isTopLinguist =
    numberOfReviews(combinedReviews) >= 10 && Number(fixedRatingAverage(combinedReviews)) >= 4.5;

  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <ScrollView>
        <ProfileImage name={name} profileImage={profileImage} />

        <Flex direction="column" alignItems="center">
          <Heading size="xl">{name}</Heading>

          <UserLocation location={location} />
        </Flex>

        <Flex direction="row" justifyContent={isTopLinguist ? 'space-between' : 'center'}>
          <UserRating reviews={translatorProfileReviews} />

          <TopLinguistBadge isTopLinguist={isTopLinguist} />
        </Flex>

        <View style={profileStyles.hireButton}>
          <Button variant="magenta" onPress={() => console.log('Pressed!')}>
            {EN.TRANSLATOR_PROFILE.HIRE}
          </Button>
        </View>

        <Text>{bio}</Text>

        <Languages languages={languages} />

        <Reviews isTranslator={isTranslator} reviews={translatorProfileReviews} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TranslatorProfile;
